const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let customers = 1;
let location = "RSA";
let currency = null;
let shipping = null;

if (location === "RSA") {
  (shipping = 400), (currency = "R");
}

if (location === "NAM") {
  (shipping = 600), (currency = "$");
} else {
  (shipping = 800), (currency = "$");
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (location === "RSA" && shoes + batteries + pens + shirts >= 1000) {
  shipping = 0;
}
if (location === "NAM" && shoes + batteries + pens + shirts >= 60) {
  shipping = 0;
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log(
      "Price:",
      currency,
      shoes + batteries + pens + shirts + shipping
    );
