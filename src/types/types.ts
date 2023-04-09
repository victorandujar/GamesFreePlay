export interface GameStructure {
  id: number;
  title: string;
  short_description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  thumbnail: string;
  game_url: string;
}

export type GamesStructure = GameStructure[];
