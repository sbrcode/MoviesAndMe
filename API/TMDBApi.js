const API_TOKEN = "3adf5e9966654ea0241823f8f784e677"; // récupéré avec le compte tmdb 'lineho' via mail lineho446@gmail.com (mdp avec '!' supp.)

export function getFilmsFromApiWithSearchedText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.log(error))
}

export function getimageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
  .then((response) => response.json())
  .catch((error) => console.log(error))
}
