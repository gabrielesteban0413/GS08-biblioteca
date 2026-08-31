import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { BarChart } from '../ui/Chart'

export default function EmployeeDashboard(){
  const loansData = [
    {label:'Lun', value:12},{label:'Mar', value:18},{label:'Mie', value:9},{label:'Jue', value:22},{label:'Vie', value:14}
  ]

  return (
    <div className="container content-wrap">
      <h1>Panel de empleado</h1>
      <p className="lead">Tareas del personal: gestionar préstamos, reservas y atención al usuario.</p>

      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:18,alignItems:'start',marginTop:18}}>
        <div>
          <Card title="Préstamos procesados (esta semana)">
            <BarChart data={loansData} width={680} height={160} color="#22a6ff" />
            <div style={{marginTop:10}}>
              <small>Préstamos totales: <strong>75</strong></small>
            </div>
          </Card>

          <Card title="Reservas pendientes" style={{marginTop:12}}>
            <p>Lista corta de reservas recientes y acciones rápidas para procesarlas.</p>
            <div style={{display:'flex',gap:8,marginTop:10}}>
              <button className="btn-primary" onClick={()=>alert('Procesar reservas')}>Procesar</button>
              <button className="btn-outline" onClick={()=>alert('Ver lista completa')}>Ver todas</button>
            </div>
            <div style={{marginTop:12}}>
              {[{id:1,user:'María',book:'Cien años',due:'2026-09-01'}].map(r=> (
                <div key={r.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
                  <div><div style={{fontWeight:600}}>{r.book}</div><div style={{fontSize:12,color:'#6a7a92'}}>{r.user} • {r.due}</div></div>
                  <div style={{display:'flex',gap:8}}>
                    <button className="btn-outline" onClick={()=>alert('Marcar como procesada')}>Procesada</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <aside>
          <Card title="Atajos">
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Button>Buscar usuario</Button>
              <Button variant="outline">Registrar devolución</Button>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  )
}
