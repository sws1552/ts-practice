"use strict";
// tsconfig schema----------------------------------------------------------------------------------------------------------------------------------------------------
// 최상위 프로퍼티
// compileOnSave
// extends
// compileOptions
// files
// include
// exclude
// references
// compileOnSave----------------------------------------------------------------------------------------------------------------------------------------------------
// {
//   ...,
//   "compileOnSaveDefinition": {
//     "properties": {
//       "compileOnSave": {
//         "description": "Enable Compile-on-Save for this project.",
//         "type": "boolean"
//       }
//     }
//   },
//   ...,
// }
// compileOnSave
// true / false (default false)
// 누가 ??
// Visual Studio 2015 with TypeScript 1.8.4 이상
// atom-typescript 플러그인
// https://github.com/TypeStrong/atom-typescript#compile-on-save
// extends----------------------------------------------------------------------------------------------------------------------------------------------------
// {
//   ...,
//   "extendsDefinition": {
//     "properties": {
//       "extends": {
//         "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
//         "type": "string"
//       }
//     }
//   },
//   ...,
// }
// extends
// 파일 (상대) 경로명: string
// TypeScript 2.1 New Spec
// in PROJECT/base.json
// files, include, exclude----------------------------------------------------------------------------------------------------------------------------------------------------
// {
//   ...,
//   "filesDefinition": {
//     "properties": {
//       "files": {
//         "description": "If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
//         "type": "array",
//         "uniqueItems": true,
//         "items": {
//           "type": "string"
//         }
//       }
//     }
//   },
//   "excludeDefinition": {
//     "properties": {
//       "exclude": {
//         "description": "Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
//         "type": "array",
//         "uniqueItems": true,
//         "items": {
//           "type": "string"
//         }
//       }
//     }
//   },
//   "includeDefinition": {
//     "properties": {
//       "include": {
//         "description": "Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
//         "type": "array",
//         "uniqueItems": true,
//         "items": {
//           "type": "string"
//         }
//       }
//     }
//   },
//   ...,
// }
// files, include, exclude
// 셋다 설정이 없으면, 전부다 컴파일
// files
// 상대 혹은 절대 경로의 리스트 배열입니다.
// exclude 보다 쎕니다.
// include, exclude
// glob 패턴 (마치 .gitignore)
// include
// exclude 보다 약합니다.
// * 같은걸 사용하면, .ts / .tsx / .d.ts 만 include (allowJS)
// exclude
// 설정 안하면 4가지(node_modules, bower_components, jspm_packages, <outDir>)를 default 로 제외합니다.
// <outDir> 은 항상 제외합니다. (include 에 있어도)
// compileoptions - typeRoots, types----------------------------------------------------------------------------------------------------------------------------------------------------
// compileOptions : type
// {
//   ...,
//   "typeRoots": {
//     "description": "Specify multiple folders that act like `./node_modules/@types`.",
//     "type": "array",
//     "uniqueItems": true,
//     "items": {
//       "type": "string"
//     },
//     "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
//   },
//   "types": {
//     "description": "Specify type package names to be included without being referenced in a source file.",
//     "type": "array",
//     "uniqueItems": true,
//     "items": {
//       "type": "string"
//     },
//     "markdownDescription": "Specify type package names to be included without being referenced in a source file.\n\nSee more: https://www.typescriptlang.org/tsconfig#types"
//   },
//   ...,
// }
// import React from "react";
// npm i react
// npm i --save-dev @types/react
// @types
// TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
// 아무 설정을 안하면 ?
// node_modules/@types 라는 모든 경로를 찾아서 사용
// typeRoots 를 사용하면 ?
// 배열 안에 들어있는 경로들 아래서만 가져옵니다.
// types 를 사용하면 ?
// 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아옵니다.
// [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것입니다.
// typeRoots 와 types 를 같이 사용하지 않습니다.
// compileOptions - target 과 lib----------------------------------------------------------------------------------------------------------------------------------------------------
// compileOptions : target
// {
//   "target": {
//     "description": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.",
//     "type": "string",
//     "default": "ES3",
//     "anyOf": [
//       {
//         "enum": [
//           "ES3",
//           "ES5",
//           "ES6",
//           "ES2015",
//           "ES2016",
//           "ES2017",
//           "ES2018",
//           "ES2019",
//           "ES2020",
//           "ESNext"
//         ]
//       },
//       {
//         "pattern": "^([Ee][Ss]([356]|(20(1[56789]|20))|[Nn][Ee][Xx][Tt]))$"
//       }
//     ],
//     "markdownDescription": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.\n\nSee more: https://www.typescriptlang.org/tsconfig#target"
//   },
// }
// compileOptions : lib
// {
//   "lib": {
//     "description": "Specify a set of bundled library declaration files that describe the target runtime environment.",
//     "type": "array",
//     "uniqueItems": true,
//     "items": {
//       "type": "string",
//       "anyOf": [
//         {
//           "enum": [
//             "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", "ES2015.Symbol.WellKnown", "ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object", "ES2017.SharedMemory", "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator", "ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", "ES2019", "ES2019.Array", "ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise", "ES2020.String", "ES2020.Symbol.WellKnown", "ESNext", "ESNext.Array", "ESNext.AsyncIterable", "ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", "ESNext.Symbol", "DOM", "DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts"
//           ]
//         },
//         {
//           "pattern": "^[Ee][Ss]5|[Ee][Ss]6|[Ee][Ss]7$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2015(\\.([Cc][Oo][Ll][Ll][Ee][Cc][Tt][Ii][Oo][Nn]|[Cc][Oo][Rr][Ee]|[Gg][Ee][Nn][Ee][Rr][Aa][Tt][Oo][Rr]|[Ii][Tt][Ee][Rr][Aa][Bb][Ll][Ee]|[Pp][Rr][Oo][Mm][Ii][Ss][Ee]|[Pp][Rr][Oo][Xx][Yy]|[Rr][Ee][Ff][Ll][Ee][Cc][Tt]|[Ss][Yy][Mm][Bb][Oo][Ll].[Ww][Ee][Ll][Ll][Kk][Nn][Oo][Ww][Nn]|[Ss][Yy][Mm][Bb][Oo][Ll]))?$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2016(\\.[Aa][Rr][Rr][Aa][Yy].[Ii][Nn][Cc][Ll][Uu][Dd][Ee])?$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2017(\\.([Ii][Nn][Tt][Ll]|[Oo][Bb][Jj][Ee][Cc][Tt]|[Ss][Hh][Aa][Rr][Ee][Dd][Mm][Ee][Mm][Oo][Rr][Yy]|[Ss][Tt][Rr][Ii][Nn][Gg]|[Tt][Yy][Pp][Ee][Dd][Aa][Rr][Rr][Aa][Yy][Ss]))?$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2018(\\.([Aa][Ss][Yy][Nn][Cc][Ii][Tt][Ee][Rr][Aa][Bb][Ll][Ee]|[Ii][Nn][Tt][Ll]|[Pp][Rr][Oo][Mm][Ii][Ss][Ee]|[Rr][Ee][Gg][Ee][Xx][Pp]))?$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2019(\\.([Aa][Rr][Rr][Aa][Yy]|[Oo][Bb][Jj][Ee][Cc][Tt]|[Ss][Tt][Rr][Ii][Nn][Gg]|[Ss][Yy][Mm][Bb][Oo][Ll]))?$"
//         },
//         {
//           "pattern": "^[Ee][Ss]2020(\\.([Bb][Ii][Gg][Ii][Nn][Tt]|[Pp][Rr][Oo][Mm][Ii][Ss][Ee]|[Ss][Tt][Rr][Ii][Nn][Gg]|[Ss][Yy][Mm][Bb][Oo][Ll].[Ww][Ee][Ll][Ll][Kk][Nn][Oo][Ww][Nn]))?$"
//         },
//         {
//           "pattern": "^[Ee][Ss][Nn][Ee][Xx][Tt](\\.([Aa][Rr][Rr][Aa][Yy]|[Aa][Ss][Yy][Nn][Cc][Ii][Tt][Ee][Rr][Aa][Bb][Ll][Ee]|[Bb][Ii][Gg][Ii][Nn][Tt]|[Ii][Nn][Tt][Ll]|[Ss][Yy][Mm][Bb][Oo][Ll]))?$"
//         },
//         {
//           "pattern": "^[Dd][Oo][Mm](\\.[Ii][Tt][Ee][Rr][Aa][Bb][Ll][Ee])?$"
//         },
//         {
//           "pattern": "^[Ss][Cc][Rr][Ii][Pp][Tt][Hh][Oo][Ss][Tt]$"
//         },
//         {
//           "pattern": "^[Ww][Ee][Bb][Ww][Oo][Rr][Kk][Ee][Rr](\\.[Ii][Mm][Pp][Oo][Rr][Tt][Ss][Cc][Rr][Ii][Pp][Tt][Ss])?$"
//         }
//       ]
//     },
//     "markdownDescription": "Specify a set of bundled library declaration files that describe the target runtime environment.\n\nSee more: https://www.typescriptlang.org/tsconfig#lib"
//   }
// }
// target 과 lib
// target
// 빌드의 결과물을 어떤 버전으로 할 것이냐
// 지정을 안하면 es3 입니다.
// lib
// 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
// lib 를 지정하지 않을 때,
// target 이 'es3' 이고, 디폴트로 lib.d.ts 를 사용합니다.
// target 이 'es5' 이면, 디폴트로 dom, es5, scripthost 를 사용합니다.
// target 이 'es6' 이면, 디폴트로 dom, es6, dom.iterable, scripthost 를 사용합니다.
// ​lib 를 지정하면 그 lib 배열로만 라이브러리를 사용하니다.
// ​빈 [] => 'no definition found 어쩌구'
// compileOptions - outDir, outFile, rootDir----------------------------------------------------------------------------------------------------------------------------------------------------
// compileOptions : outDir, outFile, rootDir
// {
//   "outFile": {
//     "description": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.",
//     "type": "string",
//     "markdownDescription": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.\n\nSee more: https://www.typescriptlang.org/tsconfig#outFile"
//   },
//   "outDir": {
//     "description": "Specify an output folder for all emitted files.",
//     "type": "string",
//     "markdownDescription": "Specify an output folder for all emitted files.\n\nSee more: https://www.typescriptlang.org/tsconfig#outDir"
//   },
//   "rootDir": {
//     "description": "Specify the root folder within your source files.",
//     "type": "string",
//     "markdownDescription": "Specify the root folder within your source files.\n\nSee more: https://www.typescriptlang.org/tsconfig#rootDir"
//   }
// }
// compileOptions - strict----------------------------------------------------------------------------------------------------------------------------------------------------
// compileOptions : strict
// {
//   "strict": {
//     "description": "Enable all strict type checking options.",
//     "type": "boolean",
//     "default": false,
//     "markdownDescription": "Enable all strict type checking options.\n\nSee more: https://www.typescriptlang.org/tsconfig#strict"
//   }
// }
// Enable all strict type checking options.
// --noImplicitAny
// 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생.
//  - 타입스크립트가 추론을 실패한 경우, any가 맞으면, any라고 지정하라.
//  - 아무것도 쓰지 않으면, 에러를 발생
//  - 이 오류를 해결하면, any라고 지정되어 있지 않은 경우는 any 가 아닌 것이다.(타입 추론이 되었으므로)
// --noImplicitThis
// 명시적이지 않게 any타입을 사용하여, this 표현식에 사용하면, 에러를 발생합니다.
// - 첫번째 매개변수 자리에 this 를 놓고, this 에 대한 타입을 어떤 것이라도 표현하지 않으면, noImplicitAny가 오류를 발생시킨다.
// - JavaScript 에서는 매개변수에 this 를 넣으면, 이미 예약된 키워드라 SyntaxError를 발생시킨다.
// call / apply / bind 와 같이 this 를 대체하여 함수 콜을 하는 용도로도 쓰인다.
// 그래서 this를 any로 명시적으로 지정하는 것은 합리적입니다. (물론 구체적인 사용처가 있는 경우 타입을 표현하기도 합니다.)
// Class 에서는 this 를 사용하면서, noImplicitThis와 관련된 에러가 나지 않습니다. (당연)
// Class 에서 constructor를 제외한 멤버 함수의 첫번째 매개변수도 일반 함수와 마찬가지로 this를 사용할 수 있습니다.
// --strictNullChecks
// - strintNullchecks 모드에서는, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나,any일 겨웅에만 할당이 가능하다.
// - 한가지 예외는 undefined에 void 할당 가능
// - strictNullChecks를 적용하지 않으면,
// 모든 타입은 null, undefined값을 가질 수 있다.
// string 으로 타입을 지정해도, null 혹은 undefined 값을 할당할 수 있다는 것이다.
// - strictNullChecks를 적용하면,
// 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시 해야 한다.
// any 타입은 null과 undefined를 가진다. 예외적으로 void 타입의 경우 undefined를 가진다.
// --strictFunctionTypes
// --strictPropertyInitialization
// --strictBindCallApply
// --alwaysStrict
