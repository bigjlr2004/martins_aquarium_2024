import { getFish } from "./database.js";

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const fishes = getFish;
  const holyFish = [];

  for (const fish of fishes) {
    if (fish.size % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const fishes = getFish;
  const soldiers = [];
  for (const fish of fishes) {
    if (fish.size % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};

export const nonHolyFish = () => {
  const fishes = getFish;
  const regularFish = [];
  for (const fish of fishes) {
    if (fish.size % 5 != 0 && fish.size % 3 != 0) {
      regularFish.push(fish);
    }
  }
  // Any fish not a multiple of 3 or 5
  return regularFish;
};
