// 100 Days Of Coding Challenge!

/* Day-73 Task:
Learn about TypeScript type assertions by using the following guide and coding along with the examples provided in it:

Type Assertions in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-73/TS-Type-Assertions/README.md */

//----------------------------------------------------------------------------------------------------------------------------

/* Introduction to Type Assertions:
Type assertions are a way to tell the TypeScript compiler that you know the type of a value better than it does.
This is particularly useful when you have more context about the type than TypeScript's inference system can provide. */

// Using 'Angle Brackets' (<>): Example:

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// Here, the angle brackets <string> assert that someValue is a string, enabling access to the length property.

//-----------------------------------------------------------------------------------------------------------------------------

// Using the 'as' Keyword: Example:

let some_Value: any = "this is a string";
let str_Length: number = (some_Value as string).length;

// The as keyword provides an alternative syntax for type assertions, which is especially useful when working with JSX in React.

//------------------------------------------------------------------------------------------------------------------------------

// Examples: Various practical examples demonstrate type assertions in real-world scenarios.

// Asserting a DOM element type
let someElement = document.querySelector("#some-id");
if (someElement) {
  (someElement as HTMLElement).style.color = "red";
}

// In this snippet, we assert that someElement is an HTMLElement to safely change its style.

//------------------------------------------------------------------------------------------------------------------------------

// Important Considerations

/* Non-Nullable Types: Type assertions do not guarantee that a value is not null or undefined.
If you need to ensure that a value is not null or undefined, you should use a type guard or check for null and undefined explicitly.

Runtime Errors: If you use a type assertion incorrectly, it can lead to runtime errors. For example,
if you assert a value to be a type that it's not, you may encounter errors when you try to access properties or methods that don't exist on that type.

TypeScript's Type Inference: TypeScript's type inference is often very good at determining the types of variables.
Whenever possible, let TypeScript infer the types for you. Only use type assertions when necessary. */

//-------------------------------------------------------------------------------------------------------------------------------

// Use Cases

// Type assertions are often used in the following scenarios:

/* Narrowing Down Types: When you have a variable of a more general type (e.g., any),
you can use a type assertion to narrow it down to a more specific type.

Dealing with Legacy Code: If you're working with legacy code that doesn't have explicit type annotations,
you can use type assertions to provide more type safety.

Asserting Type Compatibility: When you're passing a value to a function or method that expects a specific type,
you can use a type assertion to ensure that the value is compatible. */

// Common Use Cases:

//a. Interacting with APIs:

interface ApiResponse {
  id: number;
  name: string;
}

let response: any = {
  id: 1,
  name: "Mike",
};

let user = response as ApiResponse;

console.log(user.id); // 1
console.log(user.name); // Mike

// Type assertions help define the expected shape of API data.

//-------------------------------------------------------------------------------------------------------------------------------

//b. Working with Unions:

function getLength(value: string | number): number {
  if ((value as string).length !== undefined) {
    return (value as string).length;
  } else {
    return value.toString().length;
  }
}

// They can narrow down types in union scenarios, enabling more precise type handling.
