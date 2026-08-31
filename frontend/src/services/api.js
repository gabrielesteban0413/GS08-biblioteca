const API_BASE = '' // configure backend URL

export async function login(credentials){
  // placeholder: implement API call
  return {user:{username:credentials.username,roles:['USER']}, token:'fake-token'}
}

export async function fetchBooks(){
  return []
}

export default {login,fetchBooks}
