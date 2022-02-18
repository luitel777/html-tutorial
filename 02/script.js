const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeBtn')
const config = {
	headers: {
		'Accept': 'application/json'
	}
}

jokeButton.addEventListener('click', generateJoke)

generateJoke()

// async await
async function generateJoke() {
	const res = await fetch('https://icanhazdadjoke.com/', config)
	const data = await res.json()

	jokeElement.innerHTML = data.joke
}

// not async
//function generateJoke() {
	// fetch('https://icanhazdadjoke.com/', config)
	// .then(response => response.json())
	// .then(data => {
	// 	jokeElement.innerHTML = data.joke
	// })
//}