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

export interface GameDetailStructure extends GameStructure {
  description: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: [
    {
      image: string;
    },
    {
      image: string;
    },
    {
      image: string;
    }
  ];
}

export type GamesStructure = GameStructure[];
