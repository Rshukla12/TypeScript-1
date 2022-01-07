// Data Types
// numbers
// strings
// booleans
// implicit typing 
var x = 10;
// x = "123";
// explicit typing
// declaration
var y;
// assignment
y = 10;
// declaration and assignment
var z = 15;
var a = "abc";
var isAvailable = false;
if (isAvailable)
    isAvailable = true;
else {
    console.log("hello Peter!");
}
// Arrays
var list = [1, 2, 3];
list.push(4);
list.push(5);
// list.push("a") error
var char = [];
char.push("12");
char.push("24");
var mat = [[], []];
mat[0][0] = 1;
mat[0][1] = 1;
mat[0][2] = 1;
mat[1][0] = 1;
mat[1][1] = 1;
mat[1][2] = 1;
// also array
// const arr: Array<number> = [1, 2,3];
// tuples
var tuple;
tuple = ["Tuple", 1];
// Enums
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["GET_TODO_REQUEST"] = 0] = "GET_TODO_REQUEST";
    ActionTypes[ActionTypes["GET_TODO_SUCCESS"] = 5] = "GET_TODO_SUCCESS";
    ActionTypes[ActionTypes["GET_TODO_FAILURE"] = 6] = "GET_TODO_FAILURE";
})(ActionTypes || (ActionTypes = {}));
function reducer(action) {
    switch (action) {
        case ActionTypes.GET_TODO_REQUEST: {
            console.log("request.data");
            break;
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            console.log("data recieved");
            break;
        }
        case ActionTypes.GET_TODO_FAILURE: {
            console.log("request.data");
            break;
        }
    }
}
var action = ActionTypes.GET_TODO_REQUEST;
reducer(action);
// null and undefined
var n = null;
var u = undefined;
// void
// empty no return 
function printData(a) {
    console.log(a);
}
function addData(a, b) {
    return a + b;
}
var f = "1";
var c = 1;
// optional values
function printName(firstName, lastName) {
    var res = firstName;
    if (lastName)
        res += " " + lastName;
    return res;
}
var res = printName("Ravi");
console.log(res);
var todoItem = {
    id: 1,
    title: "Learn TS",
    onClick: function (val) { return console.log(val); },
    status: true,
    obj: {
        a: 10,
        s: "string"
    }
};
todoItem.onClick(100);
