import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

export default function GeoEnrichedMap() {
    const viewDiv = useRef(null);

    useEffect(() => {
        let view;
        (async () => {
            // Load core ArcGIS modules
            const [
                { default: Map },
                { default: MapView },
                { default: GraphicsLayer },
                { default: Graphic },
                { default: BasemapGallery },
                { default: Basemap }
            ] = await Promise.all([
                import('@arcgis/core/Map'),
                import('@arcgis/core/views/MapView'),
                import('@arcgis/core/layers/GraphicsLayer'),
                import('@arcgis/core/Graphic'),
                import('@arcgis/core/widgets/BasemapGallery'),
                import('@arcgis/core/Basemap'),
            ]);

            const coloredPencilBasemap = new Basemap({
                portalItem: { id: '826498a48bd0424f9c9315214f2165d4' }
            });
            const map = new Map({ basemap: coloredPencilBasemap });
            const enrichLayer = new GraphicsLayer();
            map.add(enrichLayer);
            view = new MapView({
                container: viewDiv.current,
                map,
                center: [-117.173, 34.0397],
                zoom: 13
            });

            const params = new URLSearchParams();

            // Required output format & token
            params.append('f', 'json');
            console.log("key", import.meta.env.PUBLIC_ARCGIS_API_KEY);

            params.append('token', import.meta.env.PUBLIC_ARCGIS_API_KEY);

            let studyAreas = [{ "geometry": { "x": -117.173, "y": 34.0397 } }]
            params.append('studyAreas', JSON.stringify(studyAreas));
            params.append('returnGeometry', true);

            const url = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/Enrich';
            const payload = {
                f: 'json',
                token: import.meta.env.PUBLIC_ARCGIS_API_KEY,
                studyAreas: [{
                    geometry: {
                        polygon: {
                            // Example bounding box around Portland, OR
                            rings: [
                                [[-122.68, 45.53], [-122.45, 45.53], [-122.45, 45.60], [-122.68, 45.60], [-122.68, 45.53]]
                            ]
                        }
                    },
                    attributes: { id: '1' }
                }],
                analysisVariables: ['AgeMedian', 'HouseholdIncome']
            };

            console.log("test");

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params
            });

            const json = await response.json();

            // Extract first feature
            const featureSet = json.results[0].value.FeatureSet[0];
            const feat = featureSet.features[0];
            const rings = feat.geometry.rings;
            const spatialReference = featureSet.spatialReference;

            // const popupTemplate = {
            //     title: 'Enrichment Attributes',
            //     content: [{
            //         type: 'fields',
            //         fieldInfos: Object.keys(feat.attributes).map(name => ({
            //             fieldName: name,
            //             label: featureSet.fieldAliases[name] || name
            //         }))
            //     }]
            // };

            const popupTemplate = {
                title: `<div style="font-size:1.25rem; font-weight:600; color:#003366; margin-bottom:0.5rem;">Enriched Data for Area {ID}</div>`,
                content: [
                    {
                        type: 'text',
                        text: `**Total Population:** {TOTPOP}  
**Households:** {TOTHH}  
**Avg. Household Size:** {AVGHHSZ}`
                    },
                    {
                        type: 'fields',
                        fieldInfos: [
                            { fieldName: 'TOTMALES', label: 'Male Pop.', visible: true, format: { digitSeparator: true } },
                            { fieldName: 'TOTFEMALES', label: 'Female Pop.', visible: true, format: { digitSeparator: true } }
                        ]
                    },
                    {
                        type: 'text',
                        text: '<div style="margin-top:1rem; font-size:0.9rem; color: red;">Data sourced from ArcGIS GeoEnrichment API.</div>'
                    }
                ],
                actions: [
                    {
                        id: 'more-info',
                        title: 'More Details',
                        className: 'esri-icon-list' // use Esri CSS icon
                    }
                ]
            };

            // Build a Graphic and add to layer
            const polygon = {
                type: 'polygon',
                rings,
                spatialReference
            };
            const symbol = {
                type: 'simple-fill',
                style: 'solid',
                color: [51, 51, 204, 0.2],
                outline: { color: [51, 51, 204], width: 2 }
            };
            const graphic = new Graphic({
                geometry: polygon,
                symbol,
                attributes: feat.attributes,
                popupTemplate
            });
            enrichLayer.add(graphic);

            // Wire up click event to open popup
            view.on('click', async event => {
                const hit = await view.hitTest(event);
                const result = hit.results.find(r => r.graphic && r.graphic.layer === enrichLayer);
                if (result) {
                    view.popup.open({
                        features: [result.graphic],
                        location: event.mapPoint
                    });
                }
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