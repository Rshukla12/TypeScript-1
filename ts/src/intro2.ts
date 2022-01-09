// 1
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
interface todo {
    title: string;
    status: boolean;
    id: number
};

// 2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
interface names {
    firstName: string;
    lastName?: string;
};

const getName = ( { firstName, lastName } :names): string => {
    if ( !lastName ) return firstName;
    return firstName + " " + lastName;
};


// 3
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
};


// 4
// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional
interface PersonDetails {
    phones: number[];
    addresses: Address[];
    email?: string[];
    firstname: string;
    lastname: string;
    middlename: string;
}


// 5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
const allPersons: PersonDetails[] = [];
const phoneBook = ( personDetails: PersonDetails ) : void => {
    allPersons.push( personDetails );
};
