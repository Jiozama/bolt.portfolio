'use client';

import { useState } from 'react';
import GameCard from '@/components/GameCard';
import { games, categories } from '@/lib/games';
import { Grid3X3, Filter } from 'lucide-react';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const categoryStats = categories.slice(1).map(category => ({
    name: category,
    count: games.filter(game => game.category === category).length,
    color: {
      'Racing': 'from-red-500 to-orange-500',
      'Shooting': 'from-blue-500 to-cyan-500',
      'Puzzle': 'from-green-500 to-emerald-500',
      'Action': 'from-purple-500 to-pink-500',
    }[category] || 'from-gray-500 to-gray-600'
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Grid3X3 className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Game Categories
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of games organized by category. Find your favorite type of game and discover new adventures!
          </p>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categoryStats.map((category) => (
            <div 
              key={category.name}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">
                  {category.count}
                </span>
              </div>
              <h3 className="text-white font-semibold">{category.name}</h3>
              <p className="text-gray-400 text-sm">
                {category.count} game{category.count !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}