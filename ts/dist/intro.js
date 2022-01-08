// 4 create an array of numbers
const nums = [];
// const nums: Array<number> = [];
// 5 create an array of strings (using array constructor generic type)
const strArr = [];
// 6 create a tuple, which keeps a string as the first value, and boolean as the second
const tup = ["s", 1];
// 7 create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var UserEnum;
(function (UserEnum) {
    UserEnum[UserEnum["User"] = 0] = "User";
    UserEnum[UserEnum["SuperUser"] = 1] = "SuperUser";
    UserEnum[UserEnum["Admin"] = 2] = "Admin";
    UserEnum[UserEnum["SuperAdmin"] = 3] = "SuperAdmin";
})(UserEnum || (UserEnum = {}));
// 8 create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
const addNums = (x, y) => {
    return x + y;
};
// 9 create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divNums(x, y) {
    return x / y;
}
// 10 create a function that takes a name and prints it without returning anything
function printName(name) {
    console.log(name);
}
printName("ravi");
console.log("add num", addNums(10, 20));
console.log("divide num", divNums(10, 5));
