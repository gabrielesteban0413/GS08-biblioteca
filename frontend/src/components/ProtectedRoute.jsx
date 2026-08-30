import React from 'react'
import { Navigate } from 'react-router-dom'

// Simple protected route: checks `auth` object with roles
export default function ProtectedRoute({ children, auth, requiredRoles }){
  if(!auth || !auth.user) return <Navigate to="/login" replace />
  if(requiredRoles && !requiredRoles.some(r => auth.user.roles.includes(r))) return <Navigate to="/" replace />
  return children
}
