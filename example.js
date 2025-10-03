//  console.log("A");
//  setTimeout(() => console.log("B"), 0);
//  Promise.resolve().then(() => console.log("C"));
//  console.log("D");

// setTimeout(() => console.log("Timeout"), 0);
// for (let i = 0; i < 1e9; i++) {
//     console.log(i)
//  }
// console.log("Done");

//  let count = 0;
//  let id = setInterval(() => {
//   console.log(++count);
//   if (count === 3) clearInterval(id);
//  }, 1000);

 Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("Oops"); })
  .catch(err => 42)
  .then(x => console.log(x));