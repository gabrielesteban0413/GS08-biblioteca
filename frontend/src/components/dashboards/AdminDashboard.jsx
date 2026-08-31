import React from 'react'
import Card from '../ui/Card'
import { BarChart, LineChart } from '../ui/Chart'
import Button from '../ui/Button'

export default function AdminDashboard(){
  const booksData = [
    {label:'Ene', value:120}, {label:'Feb', value:90}, {label:'Mar', value:140}, {label:'Abr', value:110}, {label:'May', value:160}
  ]
  const usersData = [
    {label:'Sem1', value:40},{label:'Sem2', value:60},{label:'Sem3', value:80},{label:'Sem4', value:70}
  ]

  return (
    <div className="container content-wrap">
      <h1>Panel de administración</h1>
      <p className="lead">Acciones administrativas: gestión de libros, usuarios y contenido. Vista rápida de métricas clave.</p>

      <div className="dashboard-grid" style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:18,alignItems:'start',marginTop:18}}>
        <div>
          <Card title="Ventas / Préstamos (últimos meses)">
            <BarChart data={booksData} width={680} height={200} />
            <div style={{marginTop:12,display:'flex',gap:8}}>
              <strong>Ventas totales:</strong><span>1,240</span>
              <strong style={{marginLeft:12}}>Ingresos:</strong><span>$12,400</span>
            </div>
          </Card>

          <Card title="Usuarios activos (semana)" style={{marginTop:12}}>
            <LineChart data={usersData} width={680} height={180} />
          </Card>

          <Card title="Gestión de libros" style={{marginTop:12}}>
            <p style={{marginBottom:8}}>Lista rápida de libros (mock). Usa los botones para editar o ver ventas.</p>
            <div style={{display:'grid',gap:8}}>
              {[{id:1,title:'Cien años',sales:120},{id:2,title:'1984',sales:90}].map(b=> (
                <div key={b.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div><strong>{b.title}</strong><div style={{fontSize:12,color:'#6a7a92'}}>Ventas: {b.sales}</div></div>
                  <div style={{display:'flex',gap:8}}>
                    <button className="btn-outline" onClick={()=>alert('Editar libro: '+b.title)}>Editar</button>
                    <button className="btn-outline" onClick={()=>alert('Ver ventas: '+b.sales)}>Ventas</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <aside>
          <Card title="Resumen">
            <ul style={{marginTop:8}}>
              <li><strong>Libros totales:</strong> 12,430</li>
              <li><strong>Usuarios activos:</strong> 4,212</li>
              <li><strong>Reservas pendientes:</strong> 34</li>
            </ul>
          </Card>
          <Card title="Acciones rápidas" style={{marginTop:12}}>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <button className="btn-primary" onClick={()=>alert('Abrir formulario: agregar libro')}>Agregar libro</button>
              <button className="btn-outline" onClick={()=>alert('Iniciar importación')}>Importar catálogo</button>
              <button className="btn-outline" onClick={()=>alert('Exportar reportes')}>Exportar reportes</button>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  )
}
