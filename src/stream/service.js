import { Subject } from 'rxjs/Subject';

// class Service {
// 	subject = new Subject();


// 	publish(value){
// 		this.subject.next(value);
// 	}

// 	subscribe(fn){
// 		this.subject.asObservable().subscribe(fn)
// 	}
// }

class Service {
	constructor() {
	    this.subject = new Subject();
	    this.state = {};
	}

	emit(value){

		if(typeof value === "object" && !Array.isArray(value)){

			this.state = {
				...this.state,
				...value
			}

		}else{
			throw new Error("publish args must to receive object type");
		}



		return this.subject.next(this.state)
	}

	subscribe(callback){

		return this.subject.asObservable().subscribe(callback);
	}

	setState(){

	}
}

export default class UserService extends Service{
	// constructor() {
	//     this.subject = new Subject();
	// }

	name = "user"

	state = {
		user: "",
		age: ""
	}


	// emit(value) {
	// 	this.subject.next(value);
	// }

	// user() {
	// 	return this.subject.asObservable();
	// }
}