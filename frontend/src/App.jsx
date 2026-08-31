import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Books from './pages/Books'
import Login from './pages/Login'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Roles from './pages/Roles'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Discover from './pages/Discover'
import Collections from './pages/Collections'
import BookDetail from './pages/BookDetail'
import Author from './pages/Author'
import Shelf from './pages/Shelf'
import Events from './pages/Events'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Employee from './pages/Employee'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="discover" element={<Discover/>} />
        <Route path="collections" element={<Collections/>} />
        <Route path="book/:id" element={<BookDetail/>} />
        <Route path="author/:id" element={<Author/>} />
        <Route path="shelf" element={<Shelf/>} />
        <Route path="events" element={<Events/>} />
        <Route path="favorites" element={<Favorites/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="admin" element={<ProtectedRoute auth={useAuth().auth} requiredRoles={["ADMIN"]}><Admin/></ProtectedRoute>} />
        <Route path="employee" element={<ProtectedRoute auth={useAuth().auth} requiredRoles={["EMPLOYEE"]}><Employee/></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="roles" element={<Roles />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
