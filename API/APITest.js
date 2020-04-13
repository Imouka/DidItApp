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

export function postCreateNewProject(id, title,description,start_date,end_date, target_value, step_size){
  const url ="https://did-it-server.herokuapp.com/users/"+id+"/projects/new"
  console.log(start_date)
  console.log(end_date)
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
  console.log(id)
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
  console.log(id)
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
  console.log(project_id)
  console.log(user_id)
  console.log(date)
  console.log(progression)
  console.log(message)
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


export function postLogin(fbId,first_name,last_name){
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
