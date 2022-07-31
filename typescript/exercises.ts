// 4 - Pick
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type MyPick<T extends Record<string, any>, K extends string> = {
//   [P in K]: T[P]
// };

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo1: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// 7 - Readonly
// interface Todo {
//   title: string
//   description: string
// }

// type MyReadonly<T> = {
//   readonly [key in keyof T]: T[key]
// }

// const todo: MyReadonly<Todo> = {
//   title: "Hey",
//   description: "foobar"
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

// 11 - Tuple of object
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type X = typeof tuple; // readonly ['tesla', 'model 3', ...]

// type TupleToObject<A extends readonly any[]> = {
//   [value in A[number]]: value
// };

// type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// 14 - First of array
// type arr1 = ['a', 'b', 'c']
// type arr2 = []

// type First<A extends any[]> = A['length'] extends 0 ? undefined : A[0]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3

// 15 - Length of tuple
// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// type Length<A extends any[]> = A['length'];

// type teslaLength = Length<tesla>  // expected 4
// type spaceXLength = Length<spaceX> // expected 5

// 43 - Exclude
// type MyExclude<V, E> = V extends E ? never : V
//
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// 599 - Merge
// type foo = {
//   name: string;
//   age: string;
// }
// type coo = {
//   age: number;
//   sex: string
// }

// type Merge <T extends Record<string, any>, K extends Record<string, any>> = {
//   [key in keyof T | keyof K]: key extends keyof T ? T[key] : key extends keyof K ? K[key] : never
// }

// type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

// 3312 - Parameters
// const foo = (arg1: string, arg2: number): void => {}

// type MyParameters<F extends (...args: any[]) => any> = F extends (...args: infer P) => any ? P : never;

// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

// 2 - Get Return Type
// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type MyReturnType<F extends Function> = F extends (v: infer P) => number ? P extends true ? 1 : 2 : never

// type a = MyReturnType<typeof fn> // should be "1 | 2"

// 3 - Omit
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }
//
// type MyExclude<O, V> = O extends V ? never : O
//
// type MyOmit<O extends Record<string, any>, V extends keyof O> = {
//     [key in MyExclude<keyof O, V>]: O[key]
// };
//
// type TodoPreview = MyOmit<Todo, 'description' | 'title'>
//
// const todo: TodoPreview = {
//     completed: false,
// }
// 8 - Readonly
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type MyReadonly2<T, Keys extends keyof T> =  {
//   readonly [key in Keys]: T[key]
// } & Omit<T, Keys>

// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//   title: "Hey",
//   description: "foobar",
//   completed: false,
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK

// 15 - Last of array
// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type Last<A extends any[]> = A extends [...any, infer L] ? L : never;

// type tail1 = Last<arr1> // expected to be 'c'
// type tail2 = Last<arr2> // expected to be 1

// 9 - Deep Readonly
// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }

// type DeepReadonly<T> = {
//   readonly [Key in keyof T]: T[Key] extends never ? T[Key] : DeepReadonly<T[Key]>;
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`

// const y: Todo = {
//  x: {
//    a: 1,
//    b: 'hi',
//  },
//  y: 'hey'
// };

// 10 - Tuple of union
// type Arr = ['1', '2', '3', '4']

// type TupleToUnion<A extends any[]> = A[number]

// type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

// 12 - Chainable options
// type Chainable<O = {}> = {
//   option<T extends string, K extends any>(key: T, value: K): Chainable<O & Record<T, K>>;
//   get(): O
// };

// declare const config: Chainable

// const result = config
//   .option('foo', 123)
//   .option('name', 'type-challenges')
//   .option('bar', { value: 'Hello World' })
//   .get()

// // expect the type of result to be:
// interface Result {
//   foo: number
//   name: string
//   bar: {
//     value: string
//   }
// }

// 16 - Pop
// type arr1 = ['a', 'b', 'c', 'd']
// type arr2 = [3, 2, 1]

// type Pop<A extends any[]> = A extends [...infer K, any] ? K : never;

// type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
// type re2 = Pop<arr2> // expected to be [3, 2]

// 62 - Type lookup
// interface Cat {
//   type: 'cat'
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }

// interface Dog {
//   type: 'dog'
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
//   color: 'brown' | 'white' | 'black'
// }

// type LookUp<A extends { type: string }, C> =  C extends A['type'] ? C : never

// type MyDogType = LookUp<Cat | Dog, 'cat'> // expected to be `Dog`

// 106 - trim left
// type Empty = ' ' | '\n' | '\t'
// type TrimLeft<S extends string> = S extends `${Empty}${infer Rest}` ? TrimLeft<Rest> : S

// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// 108 - Trim
// type Trim<S extends string> = S extends ` ${infer R}` | `${infer R} ` ? Trim<R> : S;

// type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

// 110 - Capitalize
// type Capitalize2<S extends string> = S extends `${infer F extends string}${infer R}` ? `${Uppercase<F>}${R}`: never;

// type capitalized = Capitalize2<'hello world'> // expected to be 'Hello world'

// 116 - Replace
// type Replace<S extends string, From extends string, To extends string> =
//   From extends ''
//   ? S
//   : S extends `${infer r}${From}${infer rest}`
//   ? `${r}${To}${rest}`
//   : S
// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

// 527 - Append to object
// type Test = { id: '1' }

// type AppendToObject<O extends Record<string, any>, P extends PropertyKey, V extends any> = {
//   [Key in keyof O | P]: Key extends keyof O ? O[Key] : V
// }

// type Result = AppendToObject<Test, 'value', 4>

// 191 - Append argument
// type Fn = (a: number, b: string) => number

// type AppendArgument<F extends Function, T> = F extends ((...args: infer A) => number) ? (...args: [...A, T]) => number : never

// type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number











// SQL
// type Ehh<K> = [string, Array<K>];
//
// interface Query<T> {
//     frm: (collection: Array<T>) => this;
//     where: (predicate: (item: T) => boolean) => this;
//     select: (predicate: (item: T) => any) => this;
//     groupBy: (predicate: (item: T) => string) => this;
//     execute: () => Array<T> | Array<Ehh<T>>;
// };
//
// interface Person {
//     name: string;
//     profession: 'teacher' | 'scientific' | 'politician';
//     age: number,
//     maritalStatus: 'married' | 'single';
// };
//
// const persons: Array<Person> = [
//     {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
//     {name: 'Michael', profession: 'teacher', age: 50, maritalStatus: 'single'},
//     {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
//     {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'married'},
//     {name: 'Rose', profession: 'scientific', age: 50, maritalStatus: 'married'},
//     {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'single'},
//     {name: 'Anna', profession: 'politician', age: 50, maritalStatus: 'married'}
// ];
//
// function query<T extends Record<string, any>>(): Query<T> {
//     let result: Array<T> = [];
//
//     let groupedResult: Array<Ehh<T>> | null = null;
//
//     return {
//         frm(collection: Array<T>) {
//             result = [...collection];
//
//             return this;
//         },
//         select(predicate) {
//             result = result.map((item) => predicate(item));
//
//             return this;
//         },
//         where(predicate: (item: T) => boolean) {
//             result = result.filter((item) => predicate(item));
//
//             return this;
//         },
//         execute(): Array<T> | Array<Ehh<T>> {
//             return groupedResult || result;
//         },
//         groupBy(predicate) {
//             console.log(result)
//             const values = result.map(item => {  return predicate(item)});
//
//             const uniqueValues = Array.from(new Set(values));
//
//             const newResult: Array<Ehh<T>> = [];
//
//             uniqueValues.forEach((uniqueValue: string) => {
//                 const resultForUniqueValue: Array<T> = [];
//
//                 result.forEach((item: T) => {
//                     Object.keys(item).forEach((key: string) => {
//                         if (item[key] === uniqueValue) {
//                             resultForUniqueValue.push(item);
//                         }
//                     })
//                 });
//
//                 newResult.push([uniqueValue, Array.from(new Set(resultForUniqueValue))])
//             });
//
//             groupedResult = [...newResult];
//
//             return this;
//         },
//     };
// };
//
// // console.log(query().frm([1,2,3,4,5]).where((item: number) => item === 1 || item === 3).execute())
//
// const predicateSelect = (person: Person): Person['name'] => person.name;
// const predicateWhere = (person: Person): boolean => person.maritalStatus === 'single';
// const predicateGroupBy = (person: Person): string => person.profession;
//
// console.log(query<Person>().frm(persons).groupBy(predicateGroupBy).execute());


// type GroupTuple<T> = [string, Array<T>];
//
// interface Query<T> {
//     execute: () => Array<T> | Array<any> | Array<GroupTuple<T>> | Array<string>;
//     frm: (collection?: Array<T>) => this;
//     select: (predicate?: (item: any | Array<any>) => any) => this;
//     where: (predicate: (item: T) => boolean) => this;
//     groupBy: (predicate: (item: T) => any, predicate2?: (item: T) => any) => this;
// };
//
// interface Person {
//     name: string;
//     profession: string;
//     age: number;
//     maritalStatus: 'married' | 'single';
// }
//
// function query<T>(): Query<T> {
//     let result: Array<T> = [];
//     let selectPredicate: (item: T | GroupTuple<T>) => unknown;
//     let groupResult: Array<GroupTuple<T>>;
//
//     return {
//         execute() {
//             if (groupResult) {
//                 if (!selectPredicate) {
//                     return groupResult;
//                 }
//
//                 return groupResult.map(item => selectPredicate(item))
//             }
//
//             if (!selectPredicate) {
//                 return result;
//             }
//
//             return result.map(selectPredicate);
//         },
//         frm(collection?: Array<T>): typeof this {
//             if (!collection) {
//         return this;
//     }
//
//     result = [...collection];
//
//     return this;
// },
//     select(predicate?): typeof this {
//         if (!predicate) {
//             return this;
//         }
//
//         selectPredicate = predicate;
//
//         return this;
//     },
//     where(predicate): typeof this {
//         result = result.filter(item => predicate(item));
//
//         return this;
//     },
//     groupBy(predicate, predicate2) {
//
//         const grouped: Record<string, Array<T>> = {};
//
//         result.forEach(item => {
//             const result = predicate(item);
//
//             if (grouped[result]) {
//                 grouped[result] = [...grouped[result], item];
//             } else {
//                 grouped[result] = [item];
//             }
//         })
//
//         groupResult = Object.keys(grouped).map(key => [key, grouped[key]]);
//
//         return this;
//     }
// }
// };
//
// const persons = [
//     {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married' as const},
//     {name: 'Michael', profession: 'teacher', age: 50, maritalStatus: 'single' as const},
//     {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married' as const},
//     {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'married' as const},
//     {name: 'Rose', profession: 'scientific', age: 50, maritalStatus: 'married' as const},
//     {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'single' as const},
//     {name: 'Anna', profession: 'politician', age: 50, maritalStatus: 'married' as const}
// ];
//
// console.log(
//     query<Person>()
//         .frm(persons)
//         .select((item) => item[0])
//         // .where(person => person.profession === 'teacher')
//         .groupBy(person => person.profession)
//         .execute()
// );
//
//
//
// function isEven(num: number) {
//     return num % 2 === 0;
// }
//
// function parity(num: number) {
//     return isEven(num) ? 'even' : 'odd';
// }
//
// function isPrime(num: number) {
//     if (num < 2) {
//         return false;
//     }
//     var divisor = 2;
//     for(; num % divisor !== 0; divisor++);
//     return divisor === num;
// }
//
// function prime(num: number) {
//     return isPrime(num) ? 'prime' : 'divisible';
// }
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// console.log(
//     query<number>().select().frm(numbers).groupBy(parity, prime).execute()
// )
