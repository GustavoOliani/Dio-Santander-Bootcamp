const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-form/';

const getPokemon = async () => {
	try {
        let id = Math.floor(Math.random() * 151) + 1;
		const data = await fetch(BASE_URL + `${id}`);
		const json = await data.json();
        return json.sprites.front_default;
	} catch (error) {
		console.log(error);
	}
};

const loadImage = async () => {
	const image = document.getElementById('pokemon');
	image.src = await getPokemon();
};

loadImage();

const btn = document.getElementById('change-pokemon');
btn.addEventListener('click', loadImage);