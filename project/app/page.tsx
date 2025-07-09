'use client';

import { useState, useMemo } from 'react';
import GameCard from '@/components/GameCard';
import SearchBar from '@/components/SearchBar';
import { games, categories, getTrendingGames, Game } from '@/lib/games';
import { Flame, Zap, Trophy } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const trendingGames = getTrendingGames();

  const filteredGames = useMemo(() => {
    let filtered = games;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(game => game.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to HyperPlay
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the ultimate collection of free HTML5 games. Play instantly in your browser - no downloads required!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <SearchBar onSearch={handleSearch} placeholder="Search thousands of games..." />
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Instant Play</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-500" />
              <span>High Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-500" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Games Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trending Now
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories and All Games */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            All Games
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
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

          {/* Games Grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No games found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}