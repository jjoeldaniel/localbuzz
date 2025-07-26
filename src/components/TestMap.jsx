import { useEffect, useRef } from 'preact/hooks';

export default function TestMap() {
    const viewDiv = useRef(null);

    useEffect(() => {
        let view;
        (async () => {
            // only load ArcGIS in the browser
            const [{ default: Map }, { default: MapView }] = await Promise.all([
                import('@arcgis/core/Map'),
                import('@arcgis/core/views/MapView'),
            ]);

            const map = new Map({ basemap: 'topo-vector' });
            view = new MapView({
                container: viewDiv.current,
                map,
                center: [-117.173, 34.0397],
                zoom: 13
            });
        })();

        return () => view?.destroy();
    }, []);

    return (
        <div
            ref={viewDiv}
            style={{ width: '100%', height: '400px', margin: 0, padding: 0 }}
        />
    );
}
