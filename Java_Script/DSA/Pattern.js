// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let sum = " * ";
//   console.log(sum.repeat(i));
// }

// Output
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

// Ex.1
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   let space ="  ";
//   console.log(space.repeat(n - i) + str.repeat(i));
// }

// Output
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// Ex.2
// let n = 5;
// for (let i = n; i >= 0; i--) {
//   let sum = "* ";
//   let space = "";
//   console.log(space.repeat(n - i) + sum.repeat(i));
// }

// Output
// * * * * *
// * * * *
// * * *
// * *
// *

// Ex.3
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let sum = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + sum.repeat(i));
// }

// Output
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// Ex.4
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let sum = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + sum.repeat(i * 2 - 1));
// }

// Output
//        *
//      * * *
//    * * * * *
//  * * * * * * *
// * * * * * * * * *

// Ex.5
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let sum = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + sum.repeat(i * 2 - 1));
// }

// Output
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
