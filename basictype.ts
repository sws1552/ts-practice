
// Type Annotation----------------------------------------------------------------------------------------------------------------------------
// let a: boolean;

// a = true;

// a = false;

// // 이런식으로도 사용가능
// function hello(b: number) {

// }

// hello('39');

// TypeScript Types vs JavaScript Types----------------------------------------------------------------------------------------------------------------------------

// // JavaScript
// function add(n1, n2) {
//   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     throw new Error('Incorrect input!');
//   }
//   return n1 + n2;
// }

// const result = add(39, 28);

// // TypeScript
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const result = add(39, 28);


// TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
// 사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개집니다.
// JavaScript 기본 자료형을 포함 (superset)
// ECMAScript 표준에 따른 기본 자료형은 6가지
// Boolean
// Number
// String
// Null
// Undefined
// Symbol (ECMAScript 6 에 추가)
// Array : object 형
// 프로그래밍을 도울 몇가지 타입이 더 제공된다.
// Any, Void, Never, Unknown
// Enum
// Tuple : object 형



// Primitive Types----------------------------------------------------------------------------------------------------------------------------

// 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형입니다.
// 프리미티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분
// (ES2015 기준) 6가지
// boolean
// number
// string
// symbol (ES2015)
// null
// undefined

// literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
// true;
// 'hello';
// 3.14;
// null;
// undefined;

// 또는 래퍼 객체로 만들 수 있다.
// new Boolean(false); // typeof new Boolean(false) : 'object'
// new String('world'); // typeof new String('world') : 'object'
// new Number(42); // typeof new Number(42) : 'object'

// Type Casing
// TypeScript의 핵심 primitive types 은 모두 소문자입니다.
// Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고
// 생각하고 싶을 수 있습니다.
// 그러나 이러한 유형은 언어 primitives를 나타내지 않으며, 타입으로 사용해서는 안됩니다.

// function reverse(s: String): String {
//   return s.split("").reverse().join("");
// }
// reverse("hello world");

// 대신 number, string, boolean, object and symbol 타입을 사용하십시오.

// function reverse(s: string): string {
//   return s.split("").reverse().join("");
// }
// reverse("hello world");


// boolean----------------------------------------------------------------------------------------------------------------------------

// 가장 기본적인 데이터 타입
// 단순한 true 혹은 false 값 입니다.
// JavaScript / TypeScript 에서 'boolean' 이라고 부른다.

// let isDone: boolean = false;

// isDone = true;

// console.log(typeof isDone);

// let isOk: Boolean = true;


// number----------------------------------------------------------------------------------------------------------------------------

// JavaScript 와 같이, TypeScript 의 모든 숫자는 부동 소수점 값 입니다.
// TypeScript는 16진수 및 10진수 리터럴 외에도,
// ECMAScript 2015에 도입된 2진수 및 8진수를 지원합니다.
// NaN
// 1_000_000 과 같은 표기 가능


// let decimal: number = 6;

// let hex: number = 0xf00d;

// let binary: number = 0b1010;

// let octal: number = 0o744;

// let notaNumber: number = NaN;

// let underscoreNum: number = 1_000_000;

// console.log(decimal, hex, binary, octal, notaNumber, underscoreNum);



// string----------------------------------------------------------------------------------------------------------------------------

// 다른 언어에서와 마찬가지로이 텍스트 형식을 참조하기 위해 `string` 형식을 사용합니다.
// JavaScript 와 마찬가지로, TypeScript는
// 문자열 데이터를 둘러싸기 위해 큰 따옴표 ( " ) 나, 작은 따옴표 ( ' ) 를 사용합니다.

// let myName: string = "mark";

// myName = 'anna';

// Template String
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtick (= backquote) 기호에 둘러쌓여 있습니다.
// 포함된 표현식은 `${ expr }` 와 같은 형태로 사용합니다.

// let fullName: string = "Mark Lee";
// let age: number = 39;

// let sentence: string = `Hello, My name is ${fullName}.
// I'll be ${ age + 1 } years old next month.`;

// console.log(sentence);


// Symbol----------------------------------------------------------------------------------------------------------------------------


// ECMAScript 2015 의 Symbol 입니다.
// new Symbol 로 사용할 수 없습니다.
// Symbol 을 함수로 사용해서 symbol 타입을 만들어낼 수 있습니다.

// console.log(Symbol('foo') === Symbol('foo'));

// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정불가능한 값으로 만들어줍니다.
// 그래서 주로 접근을 제어하는데 쓰는 경우가 많았습니다.

// let sym = Symbol();

// let obj = {
  //     [sym]: "value"
  // };
  
  // console.log(obj[sym]); // "value"
  
  
// Undefined & Null----------------------------------------------------------------------------------------------------------------------------

// TypeScript 에서, undefined 와 null 은 실제로 각각 undefined 및 null 이라는 타입을 가집니다.
// void 와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
// 둘다 소문자만 존재합니다.

// 이 변수들에 할당할 수 있는 것들은 거의 없다.
// let u: undefined = undefined;
// let n: null = null;

// undefined & null are subtypes of all other types.
// 설정을 하지 않으면 그렇습니다.
// number 에 null 또는 undefined 를 할당할 수 있다는 의미입니다.
// 하지만, 컴파일 옵션에서 `--strictNullChecks`사용하면, null 과 undefined 는 void 나 자기 자신들에게만 할당할 수 있습니다.
// 이 경우, null 과 undefined 를 할당할 수 있게 하려면, union type 을 이용해야 합니다.

// let myname: string = null;

// let v: void = undefined; // (O)

// let union: string | null | undefined = 'str';

// union = "null";


// null in JavaScript 
// null 이라는 값으로 할당된 것을 null 이라고 합니다.
// 무언가가 있는데, 사용할 준비가 덜 된 상태.
// null 이라는 타입은 null 이라는 값만 가질 수 있습니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, object 입니다.

// let n: null = null;

// console.log(n); // null
// console.log(typeof n); // object

// undefined in JavaScript 
// 값을 할당하지 않은 변수는 undefined 라는 값을 가집니다.
// 무언가가 아예 준비가 안된 상태
// object 의 property 가 없을 때도 undefined 입니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.

// let u: undefined = undefined;

// console.log(u); // undefined
// console.log(typeof u); // undefined


// object----------------------------------------------------------------------------------------------------------------------------

// "primitive type 이 아닌 것" 을 나타내고 싶을 때 사용하는 타입

// non-primitive type
// not number, string, boolean, bigint, symbol, null, or undefined.

// create by object literal
// const person1 = {name: 'Mark', age: 39};
// // person1 is not "object" type.
// // person1 is "{name: string, age: number}" type.

// // create by Object.create
// const person2 = Object.create({name: 'Mark', age: 39});

// let obj: object = {};
// obj = {name: 'Mark'};
// obj = [{name: 'Mark'}];
// obj = 39; // Error
// obj = 'Mark'; // Error
// obj = true; // Error
// obj = 100n; // Error
// obj = Symbol(); // Error
// obj = null; // Error
// obj = undefined; // Error

// declare function create(o: object | null): void;
// create({ prop: 0 });
// create(null);
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// // Object.create
// Object.create(0); // Error


// Array----------------------------------------------------------------------------------------------------------------------------

// 원래 자바스크립트에서 array 는 객체입니다.
// 사용방법
// Array<타입>
// 타입[]

// 이 형식을 권장한다.
// let list: (number | string)[] = [1, 2, 3, "4"];
// let list: Array<number> = [1, 2, 3];


// Tuple----------------------------------------------------------------------------------------------------------------------------
// 배열인데 타입이 한가지가 아닌 경우
// 마찬가지로 객체입니다.
// 꺼내 사용할때 주의가 필요합니다.
// 배열을 Destructuting 하면 타입이 제대로 얻어집니다.
// 길이가 정해져 있다.

// let x: [string, number];

// x = ["hello", 39];
// x = [39, "hello"];

// x[3] = "world"; // Type '"world"' is not assignable to type 'undefined'.

// const person: [string, number] = ["mark", 35];

// const [first, second, third] = person;


// any----------------------------------------------------------------------------------------------------------------------------

// 어떤 타입이어도 상관없는 타입입니다.
// 이걸 최대한 쓰지 않는게 핵심입니다.
// 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문입니다.
// 그래서 컴파일 옵션 중에는 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있습니다.
// noImplicitAny

// function returnAny(message: any): any {
  //   console.log(message);
  // }
  
  // const any1 = returnAny('리턴은 아무거나');
  
  // any 는 계속해서 개체를 통해 전파됩니다.
  // 결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하십시오.
  // 타입 안전성은 TypeScript 를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any 를 사용하지 않도록 해야합니다.
  
  // let looselyTyped: any = {};
  
  // let d = looselyTyped.a.b.c.d;
  //  ^ = let d: any
  
  // any 는 존재할 수 밖에 없다.
  // any 로 지정된 값을 이용해서 새로운 값으로 만들어 사용하는 지점에서
  // 누수를 막아주도록 노력이 필요하다.
  
  // function leakingAny(obj: any) {
    //   const a = obj.num; // const a: number = obj.num;
    //   const b = a + 1;
    //   return b;
    // }
    
    // const c = leakingAny({num: 0});
    // const d: string = c.indexOf('0');
    
    
// unknown----------------------------------------------------------------------------------------------------------------------------

// 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있습니다.
// 이러한 값은 동적 콘텐츠 (예 : 사용자로부터, 또는 우리 API 의 모든 값을 의도적으로 수락하기를 원할 수 있습니다.
// 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가
// 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공합니다.

// Typescript 3.0 버전부터 지원
// any와 짝으로 any 보다 Type-safe한 타입
// any와 같이 아무거나 할당할 수 있다.
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
// 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.

// declare const maybe: unknown;

// const aNumber: number = maybe;

// if(maybe === true){
  //   const aBoolean: boolean = maybe;
  
  //   // const aString: string = maybe;
  // }
  
  // if(typeof maybe === "string"){
    //   const aString: string = maybe;
    
//   // const aBoolean: boolean = maybe;
// }




// never----------------------------------------------------------------------------------------------------------------------------

// 리턴에 사용됩니다.
// 리턴에 사용되는 경우, 아래 3가지 정도의 경우가 대부분입니다.

// function error(message: string): never {
  //   throw new Error(message);
  
  // }
  
  // function fail() {
    //   return error("failed");
// }

// function infiniteLoop(): never {
  //   while(true) {
    
    //   }
    // }    
    
    // // never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당 할 수 있습니다.
    // // 하지만, never 에는 그 어떤 것도 할당할 수 없습니다.
    // // any 조차도 never 에게 할당 할 수 없습니다.
    // // 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다.
    
    // let a: string = 'hello';
    
    // if (typeof a !== 'string') {
      //     let b: never = a;
      // }
      
      // type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
      
      
// void----------------------------------------------------------------------------------------------------------------------------

// 어떤 타입도 가지지 않는 빈 상태를 의미합니다.
// 값은 없고 타입만 있습니다.
// 소문자입니다.
// 일반적으로 값을 반환하지 않는 함수의 리턴 타입으로 사용합니다.
// 그 외에는 사용할 일이 거의 없습니다.
// 할당이 가능한 값은 undefined 입니다.

// function returnVoid(message: string) {
//   console.log(message);
// }

// const r = returnVoid("리턴이 없다.");






















































































