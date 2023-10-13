// console.log("start");

// function importantAction(userName, cb) {
//     setTimeout(() => {
//         cb(`Subscrite to ${userName}`)
//     }, 1000);
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the ${video} video`)
//     }, 1000)
// }

// function subscribeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Subscribe the ${video} video`)
//     }, 1000)
// }


// const messege = importantAction("Roadside Coder", function (messege) {
//     console.log(messege);
//     likeTheVideo("JS interview que", (action) => {
//         console.log(action);
//         subscribeTheVideoTheVideo("JS interview que", (action) => {
//             console.log(action);
//         })
//     })
// });

// console.log("stop");


// console.log("start");

// const sub  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if(result) resolve("Be Happy");
//         else reject(new Error ("Be Sad"));
//     }, 2000)
// })

// sub
// .then((res) => {
//      console.log(res);
// }).catch(() => {
//      console.error(err);
// });

// console.log("stop")

// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject)  =>  {
//     setTimeout(() => {
//         resolve(`Subscrite to ${userName}`)
//     }, 1000);
// });
// };

// function likeTheVideo(video) {
//     return new Promise((resolve, reject)  =>  {
//     setTimeout(() => {
//         reject(`like to ${video}`)
//     }, 1000);
// });
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject)  =>  {
//     setTimeout(() => {
//         resolve(`Share to ${video}`)
//     }, 1000);
// });
// }

// importantAction("roadsideCOde")
// .then((res) => {
//     console.log(res);
//     return likeTheVideo("js inro")
// })
// .then((res) => {
//     console.log(res);
//     return shareTheVideo("js promise")
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// })
// Promise.all([importantAction("roadsideCoder"), likeTheVideo("js interview questions"), shareTheVideo("promisee Questions")])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// })


// const result = async () => {
//     try{
//         const messege1 = await importantAction("Roadside Coder");
//         console.log(messege1);
//         const messege2 = await likeTheVideo("Like me");
//         console.log(messege2);
//         const messege3 = await shareTheVideo("ooh js");
//         console.log(messege3);
//     } catch(error) {
//         console.error("Promise Failed", error);
//     }
// }
// result();

// console.log("stop");


const firstPromise = new Promise((resolve, reject) => {
    resolve("First!")
});
const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
})

secondPromise
.then((res) => {
    return res;
})
.then((res) => {
    console.log(res)
})


function loadJson (url) {
    return fetch(url).then((response) => {
        if(response.status === 200) {
            return response.json()
        }else {
            throw new Error (response.status);
        }
    })
}
loadJson("https://example.com/api/data").catch((err) {
    console.error(err);
})


async function loadJson(url) {
    try{
        let response = await fetch(url);
        if(response.status === 200) {
            let data = await response.json();
            return data;
        } else {
            throw new Error(response.status)
        }
    } catch(err) {
        console.error(err);
    }
}