// src/hooks/useArcGISMap.js
import { useEffect, useRef } from 'preact/hooks';

let _view;               // singleton MapView
let _lastPortalItemId;   // remember which portalItemId we used

export function useArcGISMap(containerRef, portalItemId, onMainPinChange) {
    const initialized = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;

        (async () => {
            // dynamic import of everything inside the effect
            const [
                { default: Map },
                { default: MapView },
                { default: FeatureLayer },
                { default: Basemap },
                { default: GroupLayer },
                { webMercatorToGeographic },
                { default: GraphicsLayer },
            ] = await Promise.all([
                import('@arcgis/core/Map'),
                import('@arcgis/core/views/MapView'),
                import('@arcgis/core/layers/FeatureLayer'),
                import('@arcgis/core/Basemap'),
                import('@arcgis/core/layers/GroupLayer'),
                import('@arcgis/core/geometry/support/webMercatorUtils'),
                import('@arcgis/core/layers/GraphicsLayer'),
            ]);

            // if this is the first time or the portalItemId changed, recreate view
            if (!initialized.current || portalItemId !== _lastPortalItemId) {
                // destroy old view if exists
                if (_view) {
                    _view.container = null;
                    _view.destroy();
                }

                const basemap = new Basemap({ portalItem: { id: portalItemId } });
                const map = new Map({ basemap });

                _view = new MapView({
                    container: containerRef.current,
                    map,
                    center: [-117.173, 34.0397],
                    zoom: 12,
                });

                // example click handler hooking into your onMainPinChange
                _view.on('click', evt => {
                    const gp = webMercatorToGeographic(evt.mapPoint);
                    onMainPinChange(JSON.stringify({
                        latitude: gp.latitude.toFixed(6),
                        longitude: gp.longitude.toFixed(6)
                    }));
                });

                initialized.current = true;
                _lastPortalItemId = portalItemId;
            } else {
                // just move existing view into this new container
                _view.container = containerRef.current;
            }
        })();
    }, [containerRef, portalItemId, onMainPinChange]);
}
