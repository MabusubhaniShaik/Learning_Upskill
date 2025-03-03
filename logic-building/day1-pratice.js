//  1.write a program to consolee hello word!.
console.log("Hello World");

// write a function it takes the 2 numbers as input and print their sum.
function SumOfTwo(a, b) {
  const c = a + b;
  console.log(`Sum of 2 numbers ${a} + ${b} = ${c}`);
}
SumOfTwo(1, 2);

// 3. write a function that can calculate the arear of the rectungle based on length & width
// area = lenth * width

function AreaOfReactagle(l, w) {
  if (l >= 0 && w >= 0) {
    if (l !== w) {
      const area = l * w;
      console.log("It is the rectangle");
      console.log(
        `Areaa of the Reactangle length:${l} * width:${w} = Area:${area}`
      );
    } else if (l === w) {
      console.log("it is square");
    }
  } else {
    console.log("Inputs are should be postitive numbers");
  }
}
AreaOfReactagle(7, 4);
AreaOfReactagle(-9, 4);
