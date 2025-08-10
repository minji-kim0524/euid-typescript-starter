// --------------------------------------------------------------------------
// ✅ TypeScript의 `unknown` 타입
// --------------------------------------------------------------------------

// 1. `unknown` 타입의 변수를 선언하고 값을 할당하세요.

let time: unknown = 31
// 2. `unknown` 타입의 인자를 받아서, 그 인자가 문자열이면
//    true를 반환하는 `isString` 함수를 작성하세요.

function isString(value: unknown) {
    if(typeof value === 'string') return true
}
// 3. 위에서 선언한 `unknownValue`가 문자열인지 
//    `isString` 함수를 통해 확인하고 만약 문자열이라면, 
//    그 길이를 콘솔에 출력하세요.

console.log(isString('unknwonValue'))

function confirmLengthString(value: unknown) {
    if(typeof value === 'string') return value.length
}

console.log(confirmLengthString('unknwonValue'))
