const generateRandomNum = () => Math.floor(Math.random() * (151 - 1)) + 1;

const generateRandomHealth = () =>
  (Math.floor(Math.random() * (20 - 6)) + 6) * 10;

const generateRandomAtk = () => (Math.floor(Math.random() * (12 - 3)) + 3) * 10;

export { generateRandomNum, generateRandomHealth, generateRandomAtk };
