"use strict";
exports.__esModule = true;
var VisoBank = /** @class */ (function () {
    function VisoBank(numberOfBranches, location, employeers) {
        this.numberOfBranches = numberOfBranches;
        this.location = location;
        this.employeers = employeers;
    }
    VisoBank.prototype.aboutUs = function () {
        console.log("Our bank ".concat(this.numberOfBranches, " of branches on ").concat(this.location, " locations and ").concat(this.employeers, " employeers"));
    };
    VisoBank.prototype.numberOf = function () {
        return this.numberOfBranches;
    };
    return VisoBank;
}());
var vb = new VisoBank(41, '13 location', 500);
console.log(vb);
var brench;
brench = new VisoBank(4, '3 location', 25);
/*
class Invioce{
    constructor(readonly client:string,private details:string,public amount:number){ }

    format():string{
        return `${this.client} with ${this.details} has ${this.amount}`
    }
}

const invoic1 = new Invioce('Viso','Albanian 28 years old',3000)
const invoic2 = new Invioce('Visi','Albanian 25 years old',30000)

let invoices:Invioce[] = [];

invoices.push(invoic1);
invoices.push(invoic2);


let arr1 = ['Cimi',4,45,false];


let arr:(number|string)[] = [];
arr.push(1);
arr.push('Cimi')


let studenti:object; // let student:{}
studenti = {
    id:12,
    name:'Lewis',
    age:35
}

type StrOrNum = string | number;

const getInf = (client:StrOrNum,item:string) => {
    console.log(`Our first client is ${client} and he bought ${item}`)
}

const OurClient = (client:StrOrNum,item:string) => {
    console.log(`Our best client is ${client} and he bought ${item}`)
}

//Function Signature
let maxWinning:Function;

maxWinning = (am:number,tax:number) => {
    return am - tax;
}

maxWinning();

let avarage: (grad1:number,grad2:number,grad3:number) => number;
avarage = (g1:number,g2:number,g3:number) => {
    return (g1 + g2 + g3 ) / 3;
}


//const b =  document.querySelector('.bosi')!;
const b =  document.querySelector('.bosi') as HTMLAnchorElement;
const skills = document.querySelector('.skills') as HTMLInputElement;


//Interface
interface Client{
    id: number,
    name: string,
    surname:string,
    accountNumber:(number | string),
    amount: (a:number) => number
}

const cl1:Client = {
    id: 12045,
    name:'Viso',
    surname:'Veza',
    accountNumber:'1246a46s34a',
    amount: (am:number) => {
        return am;
    }
}

const ourClient = (cl:Client) => {
    console.log('first',cl.name)
}

ourClient(cl1)

*/ 
