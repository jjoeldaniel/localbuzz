import { useEffect, useRef } from 'preact/hooks';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

let _view;          // singleton
let _portalItemId;  // to detect portal changes

export function useArcGISMap(containerRef, portalItemId, onMainPinChange) {
    // keep a ref to track first‐time init
    const inited = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;
        // 1) First time ever OR portalItemId changed?
        if (!inited.current || _portalItemId !== portalItemId) {
            _portalItemId = portalItemId;
            // dispose old view if exists
            if (_view) _view.destroy();
            // create a brand new MapView
            _view = new MapView({
                container: containerRef.current,
                map: new Map({ basemap: 'streets' /* or your portalItemId basemap */ }),
                center: [-117.173, 34.0397],
                zoom: 12
            });
            // wire your click handler for onMainPinChange
            _view.on('click', evt => {
                const lat = evt.mapPoint.latitude.toFixed(6);
                const lon = evt.mapPoint.longitude.toFixed(6);
                onMainPinChange(JSON.stringify({ latitude: lat, longitude: lon }));
            });
            inited.current = true;
        } else {
            // subsequent: just re‐parent the existing view into the new container
            _view.container = containerRef.current;
        }
        return () => { /* we do NOT destroy here—keep the singleton alive */ };
    }, [containerRef, portalItemId, onMainPinChange]);
}
