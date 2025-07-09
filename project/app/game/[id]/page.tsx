import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getGameById } from '@/lib/games';

interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameById(params.id);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Games
        </Link>

        {/* Game Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {game.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {game.category}
                </span>
                {game.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </span>
                )}
                {game.isTrending && (
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    TRENDING
                  </span>
                )}
              </div>
            </div>
            <a
              href={game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Open in New Tab
            </a>
          </div>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl">
            {game.description}
          </p>
        </div>

        {/* Game Container */}
        <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
          <div className="aspect-video bg-black flex items-center justify-center">
            <iframe
              src={game.gameUrl}
              title={game.title}
              className="w-full h-full border-0"
              allowFullScreen
              allow="gamepad; microphone; camera"
            />
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-8 bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
          <p className="text-gray-300 leading-relaxed">
            {game.description} Experience hours of entertainment with this high-quality HTML5 game 
            that runs smoothly in your browser. No downloads or installations required - just click 
            and play instantly!
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="text-sm">
              <span className="text-gray-400">Category:</span>
              <span className="text-white ml-2">{game.category}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Platform:</span>
              <span className="text-white ml-2">HTML5 (All Browsers)</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Price:</span>
              <span className="text-green-400 ml-2">Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: GamePageProps) {
  const game = getGameById(params.id);
  
  if (!game) {
    return {
      title: 'Game Not Found - HyperPlay',
    };
  }

  return {
    title: `${game.title} - Play Free on HyperPlay`,
    description: game.description,
    openGraph: {
      title: `${game.title} - Play Free on HyperPlay`,
      description: game.description,
      images: [game.thumbnail],
    },
  };
}