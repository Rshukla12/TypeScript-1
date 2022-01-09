interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
declare const getUserType: (user: User | Admin) => User["type"] | Admin["type"];
declare const userAcc: User;
declare const adminAcc: Admin;
