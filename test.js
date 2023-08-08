const trackCurrentLocation = () => {
	const promise = new Promise((resolve, reject) => {
		// reject('Error in here..')
		resolve({ film: 'Avanger' })
		setTimeout(() => {
			console.log('Hello now is 8:00PM')
			resolve({ data: 'Data Example' })
		}, 2000)
	})
	navigator.geolocation.getCurrentPosition((data) => {})

	return promise
}

const getLocation = () => {
	const result = trackCurrentLocation()
		.then((result) => {
			console.log('result', result)
		})

		.then((data) => {
			console.log('data', data)
		})
		.catch((err) => {
			console.log('err', err)
		})
		.finally(() => {
			console.log(1212)
		})

	console.log('result', result)
}

const buttonElm = document.getElementById('track')

console.log('hell there..')

class Film {
	constructor(name, views) {
		console.log(`hello i'm constructor`)
		this.name = name
		this.views = views
	}

	getName() {
		return this.name
	}

	getViews() {
		return this.views
	}

	static notice() {
		alert(`Phim chieu rap vao thu 7 tuan sau!!!!`)
	}
}

const film1 = new Film('Song o day song', 2000)
const film2 = new Film('Kungfu Panda', 1000000000)

console.log(typeof Film)

buttonElm.addEventListener('click', () => {
	console.log(film1.getName())
	console.log(film1.getViews())
	console.log(film2.getName())
	console.log(film2.getViews())
})

class ActionFilm extends Film {
	constructor(name, views) {
		super(name, views)
		this.type = 'Action'
		this.chapter = ['Chapter1', '']
	}
}

const actionFim1 = new ActionFilm('John Wick', 3000)

actionFim1.getName()
actionFim1.getViews()
console.log(actionFim1.type)

