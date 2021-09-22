
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

console.log(Symbol('foo') === Symbol('foo'));

// 프리미티브 타입의 값을 담아서 사용합니다.
// 고유하고 수정불가능한 값으로 만들어줍니다.
// 그래서 주로 접근을 제어하는데 쓰는 경우가 많았습니다.































































































































































