const API_TOKEN = "b41008c0247a653a1351cfa79312cf45";

export function getFilmsFromApiWithSearchedText (text) {
  const url = "https://did-it-server.herokuapp.com/user/"+text
  /*const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
  + '&language=fr&query=' + text*/


  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}
