import { Movie } from "../models";

async function seedDatabase() {
  try {
    console.log("seeding DB");
    return [
      {
        name: "Iron man",
        releaseDate: "19-03-2008",
        director: "Jon Favreau",
        cast: [
          { name: "Robert Downey Jr", character: "Tony Stark" },
          { name: "Terrence Howard", character: "Rhodey" },
          { name: "Gwyneth Paltrow", character: "Pepper Potts" },
          { name: "Jeff Bridges", character: "Obadiah Stane" },
          { name: "Leslie Bibb", character: "Christine Everhart" },
        ],
      },
      {
        name: "Iron man 2",
        releaseDate: "19-03-2010",
        director: "Jon Favreau",
        cast: [
          { name: "Robert Downey Jr", character: "Tony Stark" },
          { name: "Don Cheadle", character: "Lt. Col. James 'Rhodey' Rhodes" },
          { name: "Gwyneth Paltrow", character: "Pepper Potts" },
          { name: "Scarlett Johansson", character: "Natalie Rushman" },
          { name: "Samuel L. Jackson", character: "Christine Everhart" },
        ],
      },
      {
        name: "The Amazing Spider-Man",
        releaseDate: "19-03-2012",
        director: "Marc Webb",
        cast: [
          { name: "Andrew Garfield", character: "Spider-Man" },
          { name: "Emma stone", character: "Gwen Stacey" },
          { name: "Rhys Ifans", character: "The Lizard," },
          { name: "Irrfan Khan", character: "Rajit Ratha" },
          { name: "Denis Leary", character: "Christ" },
        ],
      },
      {
        name: "The Avengers",
        releaseDate: "30-04-200",
        director: "Joss Whedon",
        cast: [
          { name: "Robert Downey Jr", character: "Tony Stark" },
          { name: "Chris Evans", character: "Steve Rogers" },
          { name: "Scarlett Johansson", character: "Natasha Romanoff" },
          { name: "Jeremy Renner", character: "Clint Barton" },
        ],
      },
      {
        name: "The Avengers: Infinity War",
        releaseDate: "19-03-2018",
        director: "Anthony Russo",
        cast: [
          { name: "Robert Downey Jr", character: "Tony Stark" },
          { name: "Chris Evans", character: "Steve Rogers" },
          { name: "Chris Hemsworth", character: "Thor" },
          { name: "Mark Ruffalo", character: "Bruce Banner" },
        ],
      },
      {
        name: "Thor: Love and Thunder",
        releaseDate: "19-03-2022",
        director: "Taika Waititi",
        cast: [
          { name: "Taika Waititi", character: "Korg" },
          { name: "Natalie Portman", character: "Jane Foster" },
          { name: "Karen Gillan", character: "Nebula" },
          { name: "Christian Bale", character: "Gorr the God Butcher" },
        ],
      },
    ].forEach((i) => {
      const movie = new Movie(i);
      movie.save();
    });
  } catch (err) {
    throw new Error(`Error seeding db: ${err}`);
  }
}

export { seedDatabase };
