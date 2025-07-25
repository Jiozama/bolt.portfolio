import GameCard from '@/components/GameCard';
import { getNewGames } from '@/lib/games';
import { Sparkles, Clock } from 'lucide-react';

export default function NewGamesPage() {
  const newGames = getNewGames();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-green-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              New Games
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest additions to our gaming collection. Fresh, exciting games added regularly for your entertainment!
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">
              {newGames.length}
            </div>
            <div className="text-gray-400 text-sm">New Games</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl font-bold text-blue-500 mb-1">
              <Clock className="w-6 h-6" />
              24h
            </div>
            <div className="text-gray-400 text-sm">Recently Added</div>
          </div>
        </div>

        {/* Games Grid */}
        {newGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Sparkles className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              No new games at the moment. Check back soon for fresh content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}