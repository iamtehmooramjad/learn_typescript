let username: string = "iamtehmooramjad"
let age: number = 26
let isMarried: boolean = false

let isDeveloper: boolean | number

isDeveloper = false
isDeveloper = 1

/** Array */

let names = ["tehmoor", "hassan", "mohsin"]

// names.push(1)
names.push("ali")

let numbers = [1, 22, 3]
numbers.push(4)

let students: string[]
students = ["a", "b", "c"]
students.push("d")
students.push("e")

let stringOrNumbersArray: (string | number)[]
stringOrNumbersArray = [175, "Tehmoor Amjad", 26]

/** Objects */
let user = {
    username: 'Tehmoor',
    age: 26,
    isAdmin: false
}

user.username = "iamtehmooramjad"
user.age = 25
user.isAdmin = true
// user.phone = "+02"


let userObj: {
    name: string
    age: number
    isAdmin: boolean
}

userObj = {
    name: 'tehmoor',
    age: 26,
    isAdmin: true
}

let userObj2: {
    name: string
    age: number
    isAdmin: boolean,
    phone?: string
}

userObj2 = {
    name: 'tehmoor',
    age: 26,
    isAdmin: true,
    phone: '0309123123'
}


//Any
let testAny: any;

testAny = 1
testAny = 'tehmoor'
testAny = false

let testAnyArray: any[]
testAnyArray = [1, "one", true, []]


//Functions

let sayHi = () => {
    console.log('Hi, welcome')
}

let getName = (): string => {
    console.log('Hi')
    return 'tehmoor amjad'
}

let multiple = (num: number): number => {
    return num * 2
}


let sum = (num1: number, num2: number, another?: number): void => {
    console.log(num1 + num2)
}

let difference = (num1: number, num2: number): number => {
    return num1 - num2
}

sum(1, 3)


//Type Aliases

let func = (user: { username: string, age: number, phone?: string }) => {
    console.log(user.username)
}

type UserType = {
    username: string;
    age: number;
    phone?: string
}

let func2 = (user: UserType) => {
    console.log(user.username)
}

type myFunc = (a: number, b: string) => void

let write: myFunc = (num, str) => {
    console.log(num + ' times ' + str)
}

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light"
}

const userWithTheme: UserType2 = {
    username: "tehmoor",
    age: 26,
    theme: "dark"
}

/** Interfaces */
interface IUser {
    username: string;
    email: string;
    age: number
}

interface IEmployee extends IUser {
    employeeId: number
}

const employee: IEmployee = {
    username: "tehmoor",
    email: "tehmoo@gmail.com",
    age: 32,
    employeeId: 175
}

const client: IUser = {
    age: 26,
    email: "tehmoor@gmail.com",
    username: "tehmooramjad"

}

/** Generics */
interface IAuthor {
    id: number;
    username: string
}

interface ICategory {
    id: number;
    title: string
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    extras: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extras: T[]
}

const testMe: IPostBetter<string> = {
    id: 1,
    title: 'as',
    desc: 'lorem ipsum',
    extras: ["a", "b", "c"]
}

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extras: T[]
}


const testMe2: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: 'as',
    desc: 'lorem ipsum',
    extras: [{id: 175, username: "tehmoor"}]
}


const testMe3: IPostEvenBetter<ICategory> = {
    id: 1,
    title: 'as',
    desc: 'lorem ipsum',
    extras: [{id: 175, title: "tehmoor"}]
}