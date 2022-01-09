const getUserType = (user) => {
    return user.type;
};
const userAcc = {
    type: 'user',
    name: "Ravi",
    age: 22,
    occupation: "student"
};
const adminAcc = {
    type: 'admin',
    name: "Ravi Admin",
    age: 23,
    role: "System Admin"
};
console.log(userAcc, getUserType(userAcc));
console.log(adminAcc, getUserType(adminAcc));
