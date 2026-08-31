const API_BASE = '' // configure backend URL

const sampleUsers = [
  {email:'admin@gmail.com', username:'admin', password:'password', roles:['ADMIN']},
  {email:'employee@gmail.com', username:'empleado', password:'password', roles:['EMPLOYEE']},
  {email:'user@gmail.com', username:'cliente', password:'password', roles:['USER']}
]

const sampleBooks = [
  {id:1, title:'Cien años de soledad', author:'Gabriel G. Márquez', year:1967, lang:'ES', status:'Disponible', cover:'/assets/images/covers/book1.jpg'},
  {id:2, title:'Fundación', author:'Isaac Asimov', year:1951, lang:'EN', status:'Préstamo', cover:'/assets/images/covers/book2.jpg'},
  {id:3, title:'El nombre del viento', author:'Patrick Rothfuss', year:2007, lang:'EN', status:'Disponible', cover:'/assets/images/covers/book3.jpg'},
  {id:4, title:'Sapiens', author:'Yuval N. Harari', year:2011, lang:'ES', status:'Disponible', cover:'/assets/images/covers/book4.jpg'},
  {id:5, title:'Juego de tronos', author:'George R. R. Martin', year:1996, lang:'EN', status:'Préstamo', cover:'/assets/images/covers/book5.jpg'},
  {id:6, title:'El mundo y sus demonios', author:'Carl Sagan', year:1995, lang:'ES', status:'Disponible', cover:'/assets/images/covers/book6.jpg'}
]

export async function login(credentials){
  // simple local check against sample users
  const u = sampleUsers.find(x => x.email === credentials.username || x.username === credentials.username)
  if(u && credentials.password === u.password){
    return { user: { username: u.username, email: u.email, roles: u.roles }, token: 'fake-token' }
  }
  // accept any username with 'user' fallback to Guest
  return { user: { username: credentials.username || 'guest', roles: ['USER'] }, token: 'fake-token' }
}

export async function fetchBooks(){
  return sampleBooks
}

export async function getUsers(){
  return sampleUsers
}

export default { login, fetchBooks, getUsers }
