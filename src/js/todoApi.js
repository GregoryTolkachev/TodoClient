export default class {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async getTodos() {
		let raw = await fetch(this.baseUrl + 'todoitems/', {
			mode: 'cors',
			cache: 'no-cache',
			method: 'GET',
		});

		let pdata = await raw.json();
		//console.log(pdata);
		return pdata;
	}
}
