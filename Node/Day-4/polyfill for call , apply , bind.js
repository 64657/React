// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
//     );
// }

// // purchaseCar.call(car1, "$",60000);

// Function.prototype.myCall = function (context = {}, ...args) {
//     if (typeof this !== "function") {
//         throw new Error(this + "It's not callable");
//     }
//     context.fn = this;
//     return context.fn(...args);
// };

// purchaseCar.myCall(car1, "$", 900000);



// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
//     );
// }

// // purchaseCar.apply(car1,["$", 9486966767])

// Function.prototype.myApply = function(context = {} , args = []) {
//     if(typeof this !== "function") {
//         throw new Error (this + "It'S not callable")
//     }
// if (!Array.isArray(args)) {
//     throw new TypeError(("CreateListFromArrayLike called on non-object"))
// }
//     context.fn = this;
//     return context.fn(...args);
// }

// purchaseCar.myApply(car1,["$" , 763407]);



// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
//     )
// };
// const fasee = purchaseCar.bind(car1);
// console.log(fasee("$", 505050505));

// Function.prototype.myBind = function(context = {} , ...args) {
//     if( typeof this !== "function") {
//         throw new Error (this +"cannot be bound it's not callable")
//     };
//     context.fn = this;
//     return function (...newArgs) {
//        return context.fn(...args, ...newArgs);
//     }
// }
// const newFunc = purchaseCar.myBind(car1 , "$", 89898898);
// console.log(newFunc())


Array.map((num, i, arr) =>  {})

Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i =0; i < this.length; i++) {
        temp.push(cb(this[i] , i, this));
    }
    return temp;
}

Array.filter((num, i, arr) => {}) 

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}

Array.reduce((acc,curr, i, arr) => {});

Array.prototype.myReduce = function(cb, initialValue) {
    var accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator;
}

const car2 = {
    color: "Red",
    type: "Ferrari"
}
function purchaseCar (currency , price){
console.log(`I have bought ${this.color} ${this.type}  car for ${currency} ${price}`);
}
Function.prototype.myCall = function(context ={} , ...args) {
    if(typeof this !== "function") {
        throw new Error (this + "its not Callable")
    }
    context.fn = this;
    return context.fn(...args)
}
purchaseCar.myCall(car2, "$", 90934970347)

Function.prototype.myApply = function(context ={} , args = []) {
    if(typeof this !== "function") {
        throw new Error (this + "CreateListFrom called on non-object");
    }
    if(!Array.isArray(args)) {
        throw new typeError (this + " like me")
    }
    context.fn = this;
    return context.fn(...args)
}
purchaseCar.myApply(car2, ["$", 90934970347])


// Function.prototype.myBind = function(context ={} , args = []) {
//     if(typeof this !== "function") {
//         throw new Error (this + "not bound");
//     }

//     context.fn = this;
//     return function (... newargs) {
//         return context.fn(...args, ...newargs)
//     }
// }
// const fasee = purchaseCar.myBind(car2, "$", 90934970347)
// console.log(fasee());

// Array.prototype.myReduce =function(initialValue, cb ) {
//     var accumulator = initialValue;
//     for(i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator,this[i], i, this) : this[i]
//     }
//     return accumulator;
// }


Function.prototype.myBlind = function(context = {} , ...args){
    if(typeof this !== "function") {
        throw new Error (this + " its not callable")
    }
    context.fn = this;
    return function(...newArgs){
    return context.fn(...args , ...newArgs)
    }
}
const fasee  = purchaseCar.myBlind(car2, "$" , 99834984);
console.log(fasee())