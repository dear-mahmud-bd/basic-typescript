{
    const getProperty = <X, Y extends keyof X>(object: X, property: Y): X[Y] => {
        return object[property];
    };
    // type User = { name: string, age: number }
    // const person: User = { name: "Alice", age: 30 };

    // const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));
    // console.log(getProperty(person, "age"));

    // const me = { name: "Mahmud", department: "CSE", id: "CS2102001" };
    // console.log(getProperty(me, "id"));
}