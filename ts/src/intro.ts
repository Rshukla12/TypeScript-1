// 1 create a type name with a string
type name = string;

// 2 create a type age with a number
type age = number;

// 3 create a type isFetching with boolean
type isFetching = boolean;

// 4 create an array of numbers
const nums: number[] = [];
// const nums: Array<number> = [];

// 5 create an array of strings (using array constructor generic type)
const strArr: Array<string> = [];

// 6 create a tuple, which keeps a string as the first value, and boolean as the second
const tup: [ string, number ] = [ "s", 1];

// 7 create an enum
// it should have User, SuperUser, Admin, SuperAdmin
enum UserEnum {
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

// 8 create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
const addNums = ( x: number, y: number ): number => {
    return x + y;
}

// 9 create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divNums ( x: number, y: number ): number{
    return x/y;
}

// 10 create a function that takes a name and prints it without returning anything
function printName ( name:name ): void {
    console.log( name );
}

printName("ravi");
console.log("add num", addNums(10, 20));
console.log("divide num", divNums(10, 5));