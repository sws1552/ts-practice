"use strict";
// 타입시스템----------------------------------------------------------------------------------------------------------------------------------------
// 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
// 컴파일러가 자동으로 타입을 추론하는 시스템
// 타입스크립트의 타입 시스템
// 타입을 명시적으로 지정할 수 있다.
// 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론
// 자신의 코드에서 해당 함수를 사용하는 사용자
// 형태를 정해둔 함수
// 해당 함수를 구현하는 구현자
// 타입이란 해당 변수가 할 수 있는 일을 결정합니다.
// JavaScript
// f1 이라는 함수의 body 에서는 a 를 사용할 것 입니다.
// a 가 할 수 있는 일은 a 의 타입이 결정합니다.
// function f1(a) {
//   return a;
// }
// 함수 사용법에 대한 오해를 야기하는 자바스크립트
// JavaScript
// (f2 실행의 결과가 NaN 을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a 가 number 타입이라는 가정으로 함수를 작성했습니다.
// function f2(a) {
//   return a * 38;
// }
// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행했습니다.
// console.log(f2(10)); // 380
// console.log(f2('Mark')); // NaN
// 타입스크립트의 추론에 의지하는 경우
// 타입스크립트 코드지만,
// a 의 타입을 명시적으로 지정하지 않은 경우이가 때문에 a 는 any 로 추론됩니다.
// 함수의 리턴 타입은 number 로 추론됩니다. (NaN 도 number 의 하나입니다.)
// function f3(a) {
//   return a * 38;
// }
// // 사용자는 a 가 any 이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했습니다.
// console.log(f3(10)); // 380
// console.log(f3('Mark') + 5); // NaN
// noImplicitAny 옵션을 켜면
// 타입을 명시적으로 지정하지 않은 경우,
// 타입스크립트가 추론 중 `any` 라고 판단하게 되면,
// 컴파일 에러를 발생시켜
// 명시적으로 지정하도록 유도한다.
// noImplicitAny 에 의한 방어
// error TS7006: Parameter 'a' implicitly has an 'any' type.
// function f3(a) {
//   return a * 38;
// }
// // 사용자의 코드를 실행할 수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 합니다.
// console.log(f3(10));
// console.log(f3('Mark') + 5);
// number 타입으로 추론된 리턴 타입
// 매개변수의 타입은 명시적으로 지정했습니다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number 로 추론됩니다.
// function f4(a: number) {
//   if (a > 0) {
//     return a * 38;
//   }
// }
// // 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
// // 해당 함수의 리턴 타입은 number 이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있습니다.
// // 하지만 실제 undefined + 5 가 실행되어 NaN 이 출력됩니다.
// console.log(f4(5)); // 190
// console.log(f4(-5) + 5); // NaN
// strictNullChecks 옵션을 켜면
// 모든 타입에 자동으로 포함되어 있는
// `null` 과 `undefined` 를
// 제거해줍니다.
// number | undefined 타입으로 추론된 리턴 타입
// 매개변수의 타입은 명시적으로 지정했습니다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined 로 추론됩니다.
// function f4(a: number) {
//   if (a > 0) {
//     return a * 38;
//   }
// }
// // 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
// // 해당 함수의 리턴 타입은 number | undefined 이기 때문에,
// // 타입에 따르면 이어진 연산을 바로 할 수 없습니다.
// // 컴파일 에러를 고쳐야하기 하기 때문에 사용자와 작성자가 의논을 해야합니다.
// console.log(f4(5));
// console.log(f4(-5) + 5); // error TS2532: Object is possibly 'undefined'.
// 명시적으로 리턴 타입을 지정해야할까?
// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했습니다.
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생합니다.
// error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
// function f5(a: number): number {
//   if (a > 0) {
//     return a * 38;
//   }
// }
// noImplicitReturns 옵션을 켜면
// 함수 내에서 모든 코드가 값을 리턴하지 않으면,
// 컴파일 에러를 발생시킨다.
// 모든 코드에서 리턴을 직접해야한다.
// if 가 아닌 경우 return 을 직접 하지 않고 코드가 종료된다.
// error TS7030: Not all code paths return a value.
// function f5(a: number) {
//   if (a > 0) {
//     return a * 38;
//   }
// }
// 매개변수에 object 가 들어오는 경우
// JavaScript
// function f6(a) {
//   return `이름은 ${a.name} 이고, 연령대는 ${
//     Math.floor(a.age / 10) * 10
//   }대 입니다.`;
// }
// console.log(f6({ name: 'Mark', age: 38 })); // 이름은 Mark 이고, 연령대는 30대 입니다.
// console.log(f6('Mark')); // 이름은 undefined 이고, 연령대는 NaN대 입니다.
// object literal type
// function f7(a: { name: string; age: number }): string {
//   return `이름은 ${a.name} 이고, 연령대는 ${
//     Math.floor(a.age / 10) * 10
//   }대 입니다.`;
// }
// console.log(f7({ name: 'Mark', age: 38 })); // 이름은 Mark 이고, 연령대는 30대 입니다.
// console.log(f7('Mark')); 
// error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number; }'.
// 나만의 타입을 만드는 방법
// interface PersonInterface {
//   name: string;
//   age: number;
// }
// type PersonTypeAlias = {
//   name: string;
//   age: number;
// };
// function f8(a: PersonInterface): string {
//   return `이름은 ${a.name} 이고, 연령대는 ${
//     Math.floor(a.age / 10) * 10
//   }대 입니다.`;
// }
// console.log(f8({ name: 'Mark', age: 38 })); // 이름은 Mark 이고, 연령대는 30대 입니다.
// console.log(f8('Mark')); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
// Structural Type System vs Nominal Type System----------------------------------------------------------------------------------------------------------------------------------------
// typescript 해당
// structural type system - 구조가 같으면, 같은 타입이다.
// interface IPerson {
//   name: string;
//   age: number;
//   speak(): string;
// }
// type PersonType = {
//   name: string;
//   age: number;
//   speak(): string;
// };
// let personInterface: IPerson = {} as any;
// let personType: PersonType = {} as any;
// personInterface = personType;
// personType = personInterface;
// nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.
// type PersonID = string & { readonly brand: unique symbol };
// function PersonID(id: string): PersonID {
//   return id as PersonID;
// }
// function getPersonById(id: PersonID) {}
// getPersonById(PersonID('id-aaaaaa'));
// getPersonById('id-aaaaaa'); 
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.
// duck typing
// 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면
// 나는 그 새를 오리라고 부를 것이다.
// class Duck:
//    def sound(self):
//       print u"꽥꽥"
// class Dog:
//    def sound(self):
//       print u"멍멍"
// def get_sound(animal):
//    animal.sound()
// def main():
//    bird = Duck()
//    dog = Dog()
//    get_sound(bird)
//    get_sound(dog)
// 타입 호환성(Type Compatibilty)----------------------------------------------------------------------------------------------------------------------------------------
// 서브 타입 (1)
// // sub1 타입은 sup1 타입의 서브 타입이다.
// let sub1: 1 = 1;
// let sup1: number = sub1;
// sub1 = sup1; // error! Type 'number' is not assignable to type '1'.
// // sub2 타입은 sup2 타입의 서브 타입이다.
// let sub2: number[] = [1];
// let sup2: object = sub2;
// sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more.
// // sub3 타입은 sup3 타입의 서브 타입이다.
// let sub3: [number, number] = [1, 2];
// let sup3: number[] = sub3;
// sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.      
// 서브 타입 (2)
// // sub4 타입은 sup4 타입의 서브 타입이다.
// let sub4: number = 1;
// let sup4: any = sub4;
// sub4 = sup4;
// // sub5 타입은 sup5 타입의 서브 타입이다.
// let sub5: never = 0 as never;
// let sup5: number = sub5;
// sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.
// class Animal {}
// class Dog extends Animal {
//   eat() {}
// }
// // sub6 타입은 sup6 타입의 서브 타입이다.
// let sub6: Dog = new Dog();
// let sup6: Animal = sub6;
// sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
// 1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
// // primitive type
// let sub7: string = '';
// let sup7: string | number = sub7;
// // object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
// let sub8: { a: string; b: number } = { a: '', b: 1 };
// let sup8: { a: string | number; b: number } = sub8;
// // array - object 와 마찬가지
// let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
// let sup9: Array<{ a: string | number; b: number }> = sub8;      
// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
// class Person {}
// class Developer extends Person {
//   coding() {}
// }
// class StartupDeveloper extends Developer {
//   burning() {}
// }
// function tellme(f: (d: Developer) => Developer) {}
// console.log(function tellme(f: (d: Developer) => Developer) {});
// // Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
// tellme(function dToD(d: Developer): Developer {
//   return new Developer();
// });
// // Developer => Developer 에다가 Person => Developer 를 할당하는 경우
// tellme(function pToD(d: Person): Developer {
//   return new Developer();
// });
// // Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
// tellme(function sToD(d: StartupDeveloper): Developer {
//   return new Developer();
// });      
// strictFunctionTypes 옵션을 켜면
// 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우,
// 에러를 통해 경고한다.
// 타입 별칭(Type Alias)----------------------------------------------------------------------------------------------------------------------------------------
// 타입 별칭 (별명)
// Interface 랑 비슷해 보입니다.
// Primitive, Union Type, Tuple, Function
// 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있습니다.
// 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는것은 아닙니다.
// Aliasing Primitive
// type MyStringType = string;
// const str = 'world';
// let myStr: MyStringType = 'hello';
// myStr = str;
// 별 의미가 없다..
// Aliasing Union Type
// let person: string | number = 0;
// person = 'Mark';
// type StringOrNumber = string | number;
// let another: StringOrNumber = 0;
// another = 'Anna';
// 1. 유니온 타입은 A 도 가능하고 B 도 가능한 타입
// 2. 길게 쓰는걸 짧게
// Aliasing Tuple
// let person: [string, number] = ['Mark', 35];
// type PersonTuple = [string, number];
// let another: PersonTuple = ['Anna', 24];
// 1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
// Aliasing Function
// type EatType = (food: string) => void;
