import { types } from "util";

type Person = {
    name: string,
    age: number,
}

const strings = ["123", "sdasdasd", "asdasdasd"]

const personas : Person[] = [{
    name: "John",
    age: 30
}, {
    name: "Jane",
    age: 28
}]

function findByIndex<T>( array : T[], index: number) : T | undefined{
    const object = array.find((element, elementIndex) => index === elementIndex)
    return object
}

findByIndex<string>(strings,3);
findByIndex<Person>(personas,1);


export function getObjects() {
    console.log(findByIndex<string>(strings,2))
    console.log(findByIndex<Person>(personas,1))
}
