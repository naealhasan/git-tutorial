console.log("vs code is Awesome...");
const numbers = [1, 2, 3, 7, 4, -50];

const getMinValue = (arr) => {
   return arr.reduce(
      (min, current) => (min <= current ? min : current),
      Infinity,
   );
};
