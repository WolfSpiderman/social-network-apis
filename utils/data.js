const names = [
    'Nimrod',
    'Lucifina',
    'Bojangles',
    'JoshMothafuckinJenkins',
    'TripleM',
    'WolfSpiderman',
    'Spider-Man',
    'Thor',
    'Hulk',
    'Iron-Man',
    'DanCummins',
    'Lynze',
    'Black-Widow',
    'Ant-Man',
    'Star-Lord',
    'Gamora',
    'Drax-The-Destroyer',
    'Rocket-Raccoon',
    'Groot',
    'Nebula',
    'Mantis',
    'Kraglin',
    'Cosmo'
];

const emails = [
    'Nimrod@email.com',
    'Lucifina@email.com',
    'Bojangles@email.com',
    'JoshMothafuckinJenkins@email.com',
    'TripleM@email.com',
    'WolfSpiderman@email.com',
    'Spider-Man@email.com',
    'Thor@email.com',
    'Hulk@email.com',
    'Iron-Man@email.com',
    'DanCummins@email.com',
    'Lynze@email.com',
    'Black-Widow@email.com',
    'Ant-Man@email.com',
    'Star-Lord@email.com',
    'Gamora@email.com',
    'Drax-The-Destroyer@email.com',
    'Rocket-Raccoon@email.com',
    'Groot@email.com',
    'Nebula@email.com',
    'Mantis@email.com',
    'Kraglin@email.com',
    'Cosmo@email.com'
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getUsername = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        username: names[i],
        email: emails[i],
      });
    }
    return results;
  };

  console.log(getUsername(13));
  module.exports = { getUsername };