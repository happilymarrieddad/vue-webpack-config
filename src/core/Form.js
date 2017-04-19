class Form {

	constructor(data) {

		this.originalData = data

		for (let field in data) {
			this[field] = data[field]
		}

	}

	reset() {
		for (let field in this) {
			this[field] = null
		}
	}

	data() {
		let data = {}
		for (let property in this.originalData) {
			data[property] = this[property]
		}

		return data
	}

	submit(path) {

	}

	onSuccess() {

	}

	onFail() {

	}

}

export default Form;