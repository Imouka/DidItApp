const API_TOKEN = "b41008c0247a653a1351cfa79312cf45";

export function getUserFromId (id) {
  console.log("appel API")
  const url = "https://did-it-server.herokuapp.com/users/"+id
  /*const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
  + '&language=fr&query=' + text*/
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
  conole.log(response)
}

export function getProjectFromUserId (id) {
  const url = "https://did-it-server.herokuapp.com/users/"+id+"/projects"
  /*const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
  + '&language=fr&query=' + text*/
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

export function getFilmDetailFromApi(id){
    console.log("appel API film")
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
   .then((response) => response.json())
   .catch((error) => console.error(error));
}

export function getFriendsFromUserId(id){
  const url = "https://did-it-server.herokuapp.com/users/"+id+"/friends"
  /*const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
  + '&language=fr&query=' + text*/
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

export function postHandleFriendship(id, friendid, action){
  const url = "http://did-it-server.herokuapp.com/users/"+id+"/friends/update"
  /*const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
  + '&language=fr&query=' + text*/
  console.log(url)
  console.log(friendid)
  console.log(action)
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       action: action,
       friendid: friendid,
     }),
})
    .then((response)=>response.json())
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}
