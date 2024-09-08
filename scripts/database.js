/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
  fishes: [
    {
      id: 9,
      image:
        "https://cdn.pixabay.com/photo/2024/04/17/15/06/ai-generated-8702284_1280.jpg",
      name: "Bart",
      food: "crustaceans",
      size: 3,
      species: "Great White",
      harvestLocation: "Hawaii",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZnnSh94AGZULfu0IcwQ9L4g0xC72MFqI9luxNPHCSs0TwGO6V_QcUI7SO2T9XxjpAMc&usqp=CAU",
      name: "Sparkle",
      food: "air",
      size: 12,
      species: "Cinnamon Fish",
      harvestLocation: "India",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs0U4dw672PlJthf-xm7yesRMPKng_V3JhA&s",
      name: "O'Keefe",
      food: "herring",
      size: 99,
      species: "Jelly Fish",
      harvestLocation: "Gulf of Mexico",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoVAQmFYtE-zaiNhQ1jbiRN5RS6lqPnvXSE1yldtboRqpgl7J17CFJSa42jSjhaJR6BQ&usqp=CAU",
      name: "Stan",
      food: "tuna",
      size: 3,
      species: "Smith Fish",
      harvestLocation: "Georgia",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ346rr9brvCvDZNfxqXFF66_6uzyimieaatg&s",
      name: "Squirt",
      food: "Crawdead",
      size: 3,
      species: "Small Mouth Bass",
      harvestLocation: "Cossatot",
    },
    {
      id: 4,
      image:
        "https://www.shutterstock.com/image-photo/kyiv-oceanarium-fish-large-spotted-260nw-2440914345.jpg",
      name: "Manny",
      food: "worms",
      size: 6,
      species: "Manta Ray",
      harvestLocation: "San Diego",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr049jmUetLW-8US8Xt3PCvxDYFxq6MCxsdkSe2uUZqdDXrRro2EZfyZ7c9JgISmiZ2k&usqp=CAU",
      name: "Christmas",
      food: "Christmas Treats",
      size: 8,
      species: "Grinch Fish",
      harvestLocation: "Maine",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3omPjBnCv8VNe2-YutFPeGOb0eFVSwVL94g1TE3drAdFY53jhNiR86UQePuN-bNbUXs&usqp=CAU",
      name: "Tiny",
      food: "crustaceans",
      size: 1,
      species: "Elephant Fish",
      harvestLocation: "Brazil",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQHzYUofSHvSnKmb1bsx4h_LX45xEZvKnHQ&s",
      name: "Jimbo",
      food: "crustaceans",
      size: 22,
      species: "Catfish",
      harvestLocation: "Alaska",
    },
  ],
};

export const getFish = database.fishes.map((fish) => fish);
