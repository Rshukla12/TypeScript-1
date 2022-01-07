// Data Types
// numbers
// strings
// booleans

// implicit typing 
let x = 10;
// x = "123";

// explicit typing
// declaration
let y: number;
// assignment
y = 10;

// declaration and assignment
let z: number = 15;

let a: string = "abc";

let isAvailable : boolean = false;

if ( isAvailable ) isAvailable = true;
else {
    console.log("hello Peter!")
}

// Arrays
let list: number[] = [1, 2, 3];

list.push(4)
list.push(5)
// list.push("a") error

let char: string[] = [];

char.push("12");
char.push("24");

let mat: number[][] = [[], []];

mat[0][0] = 1;
mat[0][1] = 1;
mat[0][2] = 1;
mat[1][0] = 1;
mat[1][1] = 1;
mat[1][2] = 1;

// also array
// const arr: Array<number> = [1, 2,3];

// tuples

let tuple: [ string, number ];
tuple = ["Tuple", 1]

// Enums

enum ActionTypes {
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS = 5,
    GET_TODO_FAILURE 
}

function reducer( action: ActionTypes ){
    switch(action){
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

const action = ActionTypes.GET_TODO_REQUEST;

reducer( action );

// null and undefined
let n: null = null;
let u: undefined = undefined;

// void
// empty no return 
function printData(a:number): void{
    console.log(a)
}
function addData(a:number, b:number): number{
    return a + b;
}

let f: string = "1";
let c: number = 1;

// optional values
function printName( firstName: string, lastName?:string ): string {
    let res: string = firstName;
    if ( lastName ) res += " " + lastName;
    return res;
}

let res = printName("Ravi");
console.log(res);

// avoid
// any
// never


// * Objects

// * Interface
interface TodoItem {
    id: number;
    title: string;
    status: boolean;
    onClick: ( id: number ) => void;
    obj: {
        a: number,
        s: string
    }
}


const todoItem: TodoItem = {
    id: 1,
    title: "Learn TS",
    onClick: ( val:number ) => console.log(val),
    status: true,
    obj: {
        a: 10,
        s: "string"
    }

}

todoItem.onClick(100);

// * union | , & i.e. or, and 

let users: "admin" | "user" | "superadmin";

let variants : "h1" | "h2" | "h3"

let grids: 1 | 2 | 3;


// type
type Users = "users" | "admin" | "superadmin"

let user: Users;

type ActionType = "GET_TODO_REQUEST" | "GET_TODO_SUCCESS" |"GET_TODO_FAILURE";

type State = {
    todos?: TodoItem[] | null;
    isLoading? : boolean | null;
    isError ? : boolean | null;
}

type Actions = {
    type: ActionType;
    payload: State
}

const myReducer = ( state: State, action: Actions ) => {
    switch( action.type ){
        case "GET_TODO_REQUEST" : {
            break;
        }
        case "GET_TODO_SUCCESS" : {
            break;
        }
        case "GET_TODO_FAILURE" : {
            break;
        }
    }
}

interface Response200 {
    status: 200 | 201,
    error? :"network error" | "no data"
}

interface TodoResponse {
    data: TodoItem[]
}

type TodoResponseAxios = Response200 & TodoResponse;