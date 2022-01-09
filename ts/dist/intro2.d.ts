interface todo {
    title: string;
    status: boolean;
    id: number;
}
interface names {
    firstName: string;
    lastName?: string;
}
declare const getName: ({ firstName, lastName }: names) => string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    phones: number[];
    addresses: Address[];
    email?: string[];
    firstname: string;
    lastname: string;
    middlename: string;
}
declare const allPersons: PersonDetails[];
declare const phoneBook: (personDetails: PersonDetails) => void;
