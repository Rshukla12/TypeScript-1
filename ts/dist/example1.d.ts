declare let x: number;
declare let y: number;
declare let z: number;
declare let a: string;
declare let isAvailable: boolean;
declare let list: number[];
declare let char: string[];
declare let mat: number[][];
declare let tuple: [string, number];
declare enum ActionTypes {
    GET_TODO_REQUEST = 0,
    GET_TODO_SUCCESS = 5,
    GET_TODO_FAILURE = 6
}
declare function reducer(action: ActionTypes): void;
declare const action = ActionTypes.GET_TODO_REQUEST;
declare let n: null;
declare function printData(a: number): void;
declare function addData(a: number, b: number): number;
declare let f: string;
declare let c: number;
declare function printNames(firstName: string, lastName?: string): string;
declare let res: string;
interface TodoItem {
    id: number;
    title: string;
    status: boolean;
    onClick: (id: number) => void;
    obj: {
        a: number;
        s: string;
    };
}
declare const todoItem: TodoItem;
declare let users: "admin" | "user" | "superadmin";
declare let variants: "h1" | "h2" | "h3";
declare let grids: 1 | 2 | 3;
declare type Users = "users" | "admin" | "superadmin";
declare let user: Users;
declare type ActionType = "GET_TODO_REQUEST" | "GET_TODO_SUCCESS" | "GET_TODO_FAILURE";
declare type State = {
    todos?: TodoItem[] | null;
    isLoading?: boolean | null;
    isError?: boolean | null;
};
declare type Actions = {
    type: ActionType;
    payload: State;
};
declare const myReducer: (state: State, action: Actions) => void;
interface Response200 {
    status: 200 | 201;
    error?: "network error" | "no data";
}
interface TodoResponse {
    data: TodoItem[];
}
declare type TodoResponseAxios = Response200 & TodoResponse;
