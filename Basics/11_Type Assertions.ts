// You can use type assertions to specify the type you're confident about.
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
// Or using as-syntax
let strLengthAs: number = (someValue as string).length;
