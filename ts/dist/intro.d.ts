declare type name = string;
declare type age = number;
declare type isFetching = boolean;
declare const nums: number[];
declare const strArr: Array<string>;
declare const tup: [string, number];
declare enum UserEnum {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperAdmin = 3
}
declare const addNums: (x: number, y: number) => number;
declare function divNums(x: number, y: number): number;
declare function printName(name: name): void;
