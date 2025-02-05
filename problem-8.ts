{
    const validateKeys = <X extends object>(obj: X, keys: string[]): boolean => {
        for (const key of keys) {
            if (!(key in obj)) return false;
        }
        return true;
    };

    // const person = { name: "Alice", age: 25, email: "alice@example.com", gender: "male" };
    // console.log(validateKeys(person, ["name", "age"]));
    // console.log(validateKeys(person, ["name", "gender"]));
}