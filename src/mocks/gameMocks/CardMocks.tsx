import { GameStrucutre, GamesStructure } from "../../types/types";

export const mockGameOverWatch: GameStrucutre = {
  developer: "Blizzard",
  genre: "shooter",
  id: 540,
  platform: "PC",
  publisher: "Steam",
  release_date: "2020-02-01",
  short_description:
    "A hero-focused first-person team shooter from Blizzard Entertainment.",
  title: "OverWatch 2",
  thumbnail:
    "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltcbbc6817daa50f1f/632b3a82636d390da7826077/Cross_progression_2.png?width=&format=webply&dpr=2&disable=upscale&quality=80",
  game_url: "https://www.freetogame.com/open/overwatch-2",
};

export const mockGameDiablo: GameStrucutre = {
  developer: "Blizzard",
  genre: "shooter",
  id: 540,
  platform: "PC",
  publisher: "Steam",
  release_date: "2020-02-01",
  short_description:
    "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
  title: "Diablo",
  thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
  game_url: "https://www.freetogame.com/open/diablo-immortal",
};

export const mockListOfGames: GamesStructure = [
  mockGameOverWatch,
  mockGameDiablo,
];