export interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  gameUrl: string;
  isNew: boolean;
  isTrending: boolean;
}

export const games: Game[] = [
  {
    id: 'speed-racer',
    title: 'Speed Racer 3D',
    category: 'Racing',
    thumbnail: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-speed racing through neon-lit city streets',
    gameUrl: 'https://html5games.com/embed/speed-racer',
    isNew: false,
    isTrending: true
  },
  {
    id: 'space-shooter',
    title: 'Galaxy Defender',
    category: 'Shooting',
    thumbnail: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Defend the galaxy from alien invasion',
    gameUrl: 'https://html5games.com/embed/galaxy-defender',
    isNew: true,
    isTrending: true
  },
  {
    id: 'puzzle-master',
    title: 'Puzzle Master',
    category: 'Puzzle',
    thumbnail: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Mind-bending puzzles to test your skills',
    gameUrl: 'https://html5games.com/embed/puzzle-master',
    isNew: false,
    isTrending: true
  },
  {
    id: 'ninja-warrior',
    title: 'Ninja Warrior',
    category: 'Action',
    thumbnail: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master the way of the ninja in this action-packed adventure',
    gameUrl: 'https://html5games.com/embed/ninja-warrior',
    isNew: true,
    isTrending: true
  },
  {
    id: 'moto-cross',
    title: 'Moto Cross Extreme',
    category: 'Racing',
    thumbnail: 'https://images.pexels.com/photos/2519379/pexels-photo-2519379.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Extreme motorcycle racing on challenging tracks',
    gameUrl: 'https://html5games.com/embed/moto-cross',
    isNew: false,
    isTrending: false
  },
  {
    id: 'zombie-survival',
    title: 'Zombie Apocalypse',
    category: 'Shooting',
    thumbnail: 'https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Survive the zombie apocalypse in this intense shooter',
    gameUrl: 'https://html5games.com/embed/zombie-survival',
    isNew: true,
    isTrending: false
  },
  {
    id: 'block-breaker',
    title: 'Block Breaker',
    category: 'Puzzle',
    thumbnail: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic block-breaking game with modern twists',
    gameUrl: 'https://html5games.com/embed/block-breaker',
    isNew: false,
    isTrending: false
  },
  {
    id: 'cyber-fighter',
    title: 'Cyber Fighter',
    category: 'Action',
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Futuristic combat in a cyberpunk world',
    gameUrl: 'https://html5games.com/embed/cyber-fighter',
    isNew: true,
    isTrending: false
  }
];

export const categories = ['All', 'Racing', 'Shooting', 'Puzzle', 'Action'];

export function getGameById(id: string): Game | undefined {
  return games.find(game => game.id === id);
}

export function getGamesByCategory(category: string): Game[] {
  if (category === 'All') return games;
  return games.filter(game => game.category === category);
}

export function getTrendingGames(): Game[] {
  return games.filter(game => game.isTrending);
}

export function getNewGames(): Game[] {
  return games.filter(game => game.isNew);
}