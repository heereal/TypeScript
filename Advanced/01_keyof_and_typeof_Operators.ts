// typeof : 객체 데이터를 객체 타입으로 변환해주는 연산자
const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

type Fruit = typeof obj;

//  type Fruit = {
//      red: string;
//      yellow: string;
//      green: string;
//  }

// keyof : 객체 형태의 타입을 key들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
type Type = {
  name: string;
  age: number;
  married: boolean;
};

type Union = keyof Type;
// type Union = name | age | married

let person = { name: "Alice", age: 28 };
type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"

// 상수 타입을 구성하기 위해서는 타입 단언을 해준다.
const color = { red: "apple", yellow: "banana", green: "cucumber" } as const;

// 위의 객체에서 red, yellow, green 부분만 꺼내와 타입으로서 사용하고 싶을떄
type Color = keyof typeof color;
// type Color = "red" | "yellow" | "green"
