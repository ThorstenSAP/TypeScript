import MessageBox from "sap/m/MessageBox";

export class Person {
	constructor(public age:number,public name:string) {}
	growOld = () => {
		this.age++;
	}
	sayHello = () => {
		MessageBox.show("Hello there")
	}
}
export class Lead extends Person{
	position: number
	constructor(public age:number, name:string, position: number) {
		super(age,name)
		this.position = position
	}
	incrementPosition = () => { this.position++ }
	getLead = () => { MessageBox.show(this.name) }
}