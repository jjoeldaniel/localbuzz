import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function GeoEnrichment() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEnrichment() {

            try {

                const params = new URLSearchParams();

                // Required output format & token
                params.append('f', 'json');
                console.log("key", import.meta.env.PUBLIC_ARCGIS_API_KEY);

                params.append('token', import.meta.env.PUBLIC_ARCGIS_API_KEY);

                // studyAreas must be a JSON‑stringified array of objects with geometry.rings + spatialReference
                // params.append('studyAreas', JSON.stringify([{
                //     geometry: {
                //         rings: [
                //             [
                //                 [-122.68, 45.53],
                //                 [-122.45, 45.53],
                //                 [-122.45, 45.60],
                //                 [-122.68, 45.60],
                //                 [-122.68, 45.53]
                //             ]
                //         ],
                //         spatialReference: { wkid: 4326 }
                //     },
                //     attributes: { id: '1' }
                // }]));

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

                console.log("test 2");


                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                setResult(data);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchEnrichment();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!result) return <div>Loading GeoEnrichment...</div>;

    return (
        <div>
            <h3>GeoEnrichment Results</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {JSON.stringify(result, null, 2)}
            </pre>
        </div>
    );
}