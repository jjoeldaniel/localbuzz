import { h } from 'preact';
import { useState } from 'preact/hooks';

const categories = [
    { id: 'all', label: 'All Categories', color: 'bg-gray-600' },
    { id: 'Bakery', label: 'Bakery', color: 'bg-yellow-600' },
    { id: 'Food', label: 'Food', color: 'bg-orange-600' },
    { id: 'Floral', label: 'Floral', color: 'bg-pink-600' },
    { id: 'Confectionary', label: 'Confectionary', color: 'bg-purple-600' },
    { id: 'Crafts', label: 'Crafts', color: 'bg-blue-600' },
    { id: 'Beverages', label: 'Beverages', color: 'bg-green-600' }
];

export default function CategoryFilter({ onCategoryChange, selectedCategory = 'all' }) {
    const [activeCategory, setActiveCategory] = useState(selectedCategory);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        onCategoryChange(categoryId);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 ${
                            activeCategory === category.id
                                ? `${category.color} shadow-lg`
                                : `${category.color} opacity-70 hover:opacity-100`
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
} 
