const car1 = {
    color: "Red",
    type: "Ferrari"
}
function purchaseCar(currency, price) {
    console.log(`I have bought ${this.color} ${this.type} car for ${currency} ${price}`);
}
// Function.prototype.myCall = function(context = {}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error(this + "its not callable")
//     }
//     context.fn = this;
//     return context.fn(...args)
// }
// purchaseCar.myCall(car1, "$", 423)

Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this !== "function") {
        throw new Error (this + "Create list skk")
    }
    if(!Array.isArray(args)) {
        throw new TypeError (this + "li,dfgf")
    }
    context.fn = this;
    return context.fn(...args)
}
purchaseCar.myApply(car1, ["$",5674554])

Function.prototype.myBlind = function(context = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error (this + "its not callable")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}
const fasee = purchaseCar.myBlind(car1, "$", 5445);
console.log(fasee);



Array.map((num, i , arr) => {})

Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i , this));
    }
    return temp;
}

Array.filter((num, i, arr) => {})

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) temp.push(this[i])
    }
    return temp
}

Array.prototype.reduce = function(cb, initialValue) {
    var accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

Function.prototype.myBlind = function(context = {}, ...args) {
    if(typeof this !== "function"){
        throw new Error (this + " its not callable")
    }
    context.fn =this;
    return function(...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}