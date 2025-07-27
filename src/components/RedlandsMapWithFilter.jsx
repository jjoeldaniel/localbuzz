import { h } from 'preact';
import { useState } from 'preact/hooks';
import RedlandsMap from './RedlandsMap.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import TravelModeFilter from './TravelModeFilter.jsx';

export default function RedlandsMapWithFilter({ featureLayerUrl }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTravelMode, setSelectedTravelMode] = useState('none');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log('Category changed to:', category);
  };

  const handleTravelModeChange = (travelMode) => {
    setSelectedTravelMode(travelMode);
    console.log('Travel mode changed to:', travelMode);
  };

  return (
    <div>
      <CategoryFilter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <TravelModeFilter
        onTravelModeChange={handleTravelModeChange}
        selectedTravelMode={selectedTravelMode}
      />
      <RedlandsMap
        featureLayerUrl={featureLayerUrl}
        selectedCategory={selectedCategory}
        selectedTravelMode={selectedTravelMode}
      />
    </div>
  );
} 
