const colorsLight = {
  green: "#BED52A",
  gold: "#D4C122",
  yellow: "#FEDF00",
  brownOrange: "#CC7A12",
  red: "#ED5430",
  whiteGrey: "#E9E7E2",
  purple: "#C78DBD",
  blue: "#189FD6",
  darkGreen: "#01454A",
};

const colorsDark = {
  green: "#9BAD23",
  gold: "#B1A11D",
  yellow: "#DFC300",
  brownOrange: "#B76E11",
  red: "#D64B2B",
  whiteGrey: "#CDCBC7",
  purple: "#B27EA9",
  blue: "#168CBC",
  darkGreen: "#026D75",
};

const generateCardColor = (type) => {
  switch (type) {
    case "grass":
    case "bug":
      return colorsLight.green;
    case "dragon":
      return colorsLight.gold;
    case "electric":
      return colorsLight.yellow;
    case "rock":
    case "ground":
    case "fighting":
      return colorsLight.brownOrange;
    case "fire":
      return colorsLight.red;
    case "normal":
    case "flying":
      return colorsLight.whiteGrey;
    case "psychic":
    case "ghost":
      return colorsLight.purple;
    case "water":
    case "ice":
      return colorsLight.blue; //#1663A4
    case "poison":
      return colorsLight.darkGreen;
    default:
      return colorsLight.whiteGrey;
  }
};

const generateBgColor = (type) => {
  switch (type) {
    case "grass":
    case "bug":
      return colorsDark.green;
    case "dragon":
      return colorsDark.gold;
    case "electric":
      return colorsDark.yellow;
    case "rock":
    case "ground":
    case "fighting":
      return colorsDark.brownOrange;
    case "fire":
      return colorsDark.red;
    case "normal":
    case "flying":
      return colorsDark.whiteGrey;
    case "psychic":
    case "ghost":
      return colorsDark.purple;
    case "water":
    case "ice":
      return colorsDark.blue; //#1663A4
    case "poison":
      return colorsDark.darkGreen;
    default:
      return colorsDark.whiteGrey;
  }
};

export { generateCardColor, generateBgColor };
