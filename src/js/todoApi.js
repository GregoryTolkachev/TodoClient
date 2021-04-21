export default class {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async getTodos() {
		let raw = await fetch(this.baseUrl + 'TodoItem/', {
			mode: 'cors',
			cache: 'no-cache',
			method: 'GET',
		});
		
		let pdata = await raw.json();
		console.log(pdata);
		return pdata;
	}

	// {
	// 		"todoItemId": "2",
	// 		"isComplete": true
	// }


	async setComplete(id, complete = true) {
		let payload = {
			"todoItemId": id,
			"isComplete": complete
		};

		let req = await fetch(
			this.baseUrl + `TodoItem/${id}`,
			{
				method: 'PATCH',
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(payload)
			}
		);

		return;
	}

	async remove(id) {
		await fetch(
			this.baseUrl + `TodoItem/${id}`,
			{
				method: 'DELETE'
			}
		);
		return;
	}

	// {
	// 		"todoItemId": "2",
	// 		"isComplete": true
	// }

	async edit(id, complete = false) {
		let payload = {
			"todoItemId": id,
			"isComplete": complete
		};

		let req = await fetch(
			this.baseUrl + `TodoItem/${id}`,
			{
				method: 'PATCH',
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(payload)
			}
		);

		return;
	}



	async addTodo(todo) {
		let req = await fetch(
			this.baseUrl + 'TodoItem/', 
			{
				method: 'POST',
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json"
				},
				body:JSON.stringify(todo)
			}
		);
		let res = await req.json();

		return res;
	}
}