import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function TravelModeFilter({ onTravelModeChange, selectedTravelMode = 'none' }) {
    const [activeMode, setActiveMode] = useState(selectedTravelMode);

    const handleModeChange = (mode) => {
        setActiveMode(mode);
        onTravelModeChange(mode);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Travel Mode</h3>
            <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="travelMode"
                        value="none"
                        checked={activeMode === 'none'}
                        onChange={(e) => handleModeChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">Show All Points</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="travelMode"
                        value="walk"
                        checked={activeMode === 'walk'}
                        onChange={(e) => handleModeChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">Walking Time (5 min)</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="travelMode"
                        value="drive"
                        checked={activeMode === 'drive'}
                        onChange={(e) => handleModeChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">Driving Time (5 min)</span>
                </label>
            </div>
        </div>
    );
} 
