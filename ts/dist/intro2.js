;
;
const getName = ({ firstName, lastName }) => {
    if (!lastName)
        return firstName;
    return firstName + " " + lastName;
};
;
// 5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
const allPersons = [];
const phoneBook = (personDetails) => {
    allPersons.push(personDetails);
};
