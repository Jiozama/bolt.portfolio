'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Star } from 'lucide-react';
import { Game } from '@/lib/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {game.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              NEW
            </span>
          )}
          {game.isTrending && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-white" />
              TRENDING
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
            {game.title}
          </h3>
          <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
            {game.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {game.description}
        </p>
        <Link
          href={`/game/${game.id}`}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/button"
        >
          <Play className="w-4 h-4 group-hover/button:scale-110 transition-transform" />
          Play Now
        </Link>
      </div>
    </div>
  );
}