const generateRandomNum = () => Math.floor(Math.random() * (151 - 1)) + 1;

const createUrls = () => {
  const randomNum = generateRandomNum();
  return `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
};

export { createUrls };
