import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";
import {Lead, Person} from "../classes/Person"

/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class Detail extends Controller {


	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
	}

	public sayHello() : void {
		const person = new Lead(1, 'Thomas', 0)
		const person1 = new Person(2, 'Max')
		person1.sayHello()
		person.getLead()
	}
}