const API_TOKEN = "b41008c0247a653a1351cfa79312cf45";

export function getUserFromId (id) {
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
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

export function postHandleFriendship(id, friendid, action){
  const url = "http://did-it-server.herokuapp.com/users/"+id+"/friends/update"
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

export function postCreateNewProject(id, title,description,start_date,end_date, target_value, step_size,date){
  const url ="https://did-it-server.herokuapp.com/users/"+id+"/projects/new"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       title:title,
       description:description,
       start_date:start_date,
       end_date:end_date,
       target_value:target_value,
       step_size:step_size,
       date:date,
     }),
})
    .then((response)=>response.json())
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}

export function postDeleteProject(id){
  const url ="https://did-it-server.herokuapp.com/projects/"+id+"/delete"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     }})
    .then((response)=>response.json())
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}

export function postModifyProject(id,title,description,end_date){
  const url ="https://did-it-server.herokuapp.com/projects/"+id+"/modify"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       title:title,
       description:description,
       end_date:end_date,
     })
   })
    .then((response)=>response.json())
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}

export function postUpdateProject(project_id,user_id,date,progression,message){
  const url ="https://did-it-server.herokuapp.com/projects/"+project_id+"/addUpdate"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            user_id : user_id,
            date: date,
            progression : progression,
            message :message
          })
   })
    .then((response)=>response.json())
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}


export function postLogin(fbId,first_name,last_name, date){
  const url ="https://did-it-server.herokuapp.com/users/"+fbId+"/login"
  console.log(first_name)
  console.log(last_name)
  console.log(fbId)
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            first_name : first_name,
            last_name: last_name,
            date : date,
          })
   })
    .then((response)=> {
    console.log("APITest postLogin => response") ;

    return response.json();
  })
    .catch((error)=>{
      console.log(error);
      throw error;
  })
}

export function getUserInfoById(user_id, friend_id){
  const url = "https://did-it-server.herokuapp.com/users/"+user_id+"/friend/"+friend_id
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))

}

export function getFeedByuserId(user_id){
  const url ="https://did-it-server.herokuapp.com/users/"+user_id+"/feed"
  return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))

}

export function sendSupport(project_id, sender_id, date){
  const url ="https://did-it-server.herokuapp.com/projects/"+project_id+"/support"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            user_id : sender_id,
            date: date,
          })
   })
   .then((response)=>response.json())
   .catch((error)=>{
     console.log("API TEST -> sendSupport " +error);
     throw error;
 })
}

export function sendComment(project_id, sender_id, date, message){
  const url ="https://did-it-server.herokuapp.com/projects/"+project_id+"/comment"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            user_id : sender_id,
            date: date,
            message :message
          })
   })
   .then((response)=>response.json())
   .catch((error)=>{
     console.log("API TEST -> sendComment " +error);
     throw error;
 })
}

export function searchInAllDB(user_id, search_entry){
  const url ="https://did-it-server.herokuapp.com/users/"+user_id+"/search"
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            search_entry : search_entry,
          })
   })
   .then((response)=>response.json())
   .catch((error)=>{
     console.log("API TEST -> searchInAllDB " +error);
     throw error;
 })
}

export function searchInFriend_FriendList(user_id, search_entry, friend_id){
  const url ="https://did-it-server.herokuapp.com/users/"+user_id+"/search"
  console.log("APITEST -> user_id"+user_id)
  console.log("APITEST -> search_entry"+search_entry)
  console.log("APITEST -> friend_id"+friend_id)
  return fetch(url, {
     method: 'POST',
     redirect:'follow',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
            search_entry : search_entry,
            friend_id:friend_id
          })
   })
   .then((response)=>response.json())
   .catch((error)=>{
     console.log("API TEST -> searchInAllDB " +error);
     throw error;
 })
}
