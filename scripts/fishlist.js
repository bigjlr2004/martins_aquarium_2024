import { mostHolyFish, soldierFish, nonHolyFish } from "./filterFish.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const mostHolyFishes = mostHolyFish();
  const soldierFishes = soldierFish();
  const nonHolyFishes = nonHolyFish();

  // Start building a string filled with HTML syntax
  let htmlString = '<section class="owned-fish-block">';

  // Create HTNL representations of each fish here
  for (const fish of mostHolyFishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <h3>${fish.name}</h3>
            <ul>
            <li>${fish.species}</li>
            <li>${fish.size}</li>
            <li>${fish.harvestLocation}</li>
            <li>${fish.food}</li>
            </ul>
        </section>
`;
  }
  for (const fish of soldierFishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <h3>${fish.name}</h3>
            <ul>
            <li>${fish.species}</li>
            <li>${fish.size}</li>
            <li>${fish.harvestLocation}</li>
            <li>${fish.food}</li>
            </ul>
        </section>
`;
  }
  for (const fish of nonHolyFishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <h3>${fish.name}</h3>
            <ul>
            <li>${fish.species}</li>
            <li>${fish.size}</li>
            <li>${fish.harvestLocation}</li>
            <li>${fish.food}</li>
            </ul>
        </section>
`;
  }

  htmlString += `</section>`;

  return htmlString;
};
