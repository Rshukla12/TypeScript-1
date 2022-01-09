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

const getUserType = ( user: User | Admin ): User["type"] | Admin["type"] => {
    return user.type;
};

const userAcc: User = {
    type: 'user',
    name: "Ravi",
    age: 22,
    occupation: "student"
};

const adminAcc: Admin = {
    type: 'admin',
    name: "Ravi Admin",
    age: 23,
    role: "System Admin"
};

console.log(userAcc, getUserType(userAcc) );

console.log(adminAcc, getUserType(adminAcc) );