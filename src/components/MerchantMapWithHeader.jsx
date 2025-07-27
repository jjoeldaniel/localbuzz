// components/MerchantMapWithHeader.jsx
import { h } from 'preact';
import { useState } from 'preact/hooks';
import GeoEnrichedMap from './MerchantMap';

export default function MerchantMapWithHeader({ portalItemId }) {
    const [mainPinPoint, setMainPinPoint] = useState(null);
    return (
        <div className="w-full h-full flex flex-col">
            <p>Main Pin Point: {mainPinPoint ?? 'none selected'}</p>
            <GeoEnrichedMap
                portalItemId={portalItemId}
                onMainPinChange={setMainPinPoint}
            />
        </div>
    );
}
