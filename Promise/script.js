// const p1 = new Promise((resolve, reject)  => {
//     // setTimeout(() => resolve("P1 success"), 3000);
//     setTimeout(() => reject("P2 fail"), 1000);

// });
// const p2 = new Promise((resolve, reject)  => {
//     setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject)  => {
//     // setTimeout(() => resolve("P3 success"), 2000);
//     setTimeout(() => reject("P3 fail"),2000)
// });

// // Promise.all([p1,p2,p3])
// // Promise.allSettled([p1,p2,p3])
// Promise.any([p1,p2,p3])

// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
//     console.log(err.errors)
// })

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve("Promise Resolved Value");
//     }, 10000)
// })

// // async function handlePromise() {
// //     const val = await p;
// //     console.log("Javascript");
// //     console.log(val);
// // }
// // handlePromise()

// function getData() {
//     p.then((res) => console.log(res));
//     console.log("Javascript")
// }

// getData();


// fetch().then(res => res.json()).then(res => console.log());

// const API_URL = "http://api.github.com/users/akshaymarch7";

// async function handlePromise() {
//    try{ const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue)
// } catch(err) {
//     console.log(err);
// }
// }
// handlePromise();


function largestNumber(arr) {
    const sortedArr = arr.sort((a,b) => {
        const strA = a.toString();
        const strB = b.toString();

        return (strB + strA).localeCompare(strA + strB)
    })
    return sortedArr.join("");
}
const inputarray = [54,546,548,50];
console.log(largestNumber(inputarray))