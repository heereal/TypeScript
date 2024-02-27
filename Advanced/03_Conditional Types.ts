// Conditional types have the syntax T extends U ? X : Y.
type IsString<T> = T extends string ? "Yes" : "No";

type TypeName<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : T extends boolean
      ? "boolean"
      : "object";
