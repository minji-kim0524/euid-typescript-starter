// --------------------------------------------------------------------------
// ✅ TypeScript에서 구조적 타입과 명목적 타입
// --------------------------------------------------------------------------

// 질문 1
// 아래의 logPersonName 함수를 `Employee` 인스턴스로 호출해 보세요.
// Employee가 person과 호환되는 구조를 가지고 있기 때문에 문제없이 작동합니다.

interface Person {
  name: string
  age: number
}

interface Employee {
  name: string
  // age: number
  employeeId: number
}

function logPersonName(employee: Employee): void {
  return console.log(employee.name)
}

// const person: Person = {name: '진우', age: 23}
// const employee: Employee = person

const employee: Employee = {name: '진우', employeeId: 2453}
const person: Person = employee

// 질문 2
// Employee에서 age 속성을 주석 처리하면 어떻게 될까요?
// 구조가 호환되기 때문에 age 속성을 주석처리하더라도 오류가 발생하지는 않으나, 할당할때 문제가 발생할 수 있다.
// person 상수에 Employee 인터페이스를 할당하려고하면 age 속성이 없기때문에 오류가 발생한다.
// 반대의 경우에는 Person 인터페이스가 범위를 더 포용하고 있기 때문에 오류가 발생되지 않는다.