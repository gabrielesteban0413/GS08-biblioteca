import React from 'react'

export function BarChart({data=[], width=420, height=160, color='#394eff'}){
  const max = Math.max(...data.map(d=>d.value), 1)
  const barWidth = Math.floor(width / data.length) - 8
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      {data.map((d,i)=>{
        const h = (d.value / max) * (height - 30)
        const x = i * (barWidth + 8) + 16
        const y = height - h - 20
        return (
          <g key={i}>
            <rect x={x} y={y} width={barWidth} height={h} rx={6} fill={color} opacity={0.95}></rect>
            <text x={x + barWidth/2} y={height - 6} fontSize={10} textAnchor="middle" fill="#223251">{d.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function LineChart({data=[], width=420, height=160, color='#22a6ff'}){
  if(!data.length) return null
  const max = Math.max(...data.map(d=>d.value))
  const step = (width - 40) / (data.length - 1)
  const points = data.map((d,i)=> `${20 + i*step},${height - 20 - (d.value/max)*(height-40)}`)
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <polyline points={points.join(' ')} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d,i)=>{
        const x = 20 + i*step
        const y = height - 20 - (d.value/max)*(height-40)
        return <circle cx={x} cy={y} r={3.5} fill={color} key={i} />
      })}
    </svg>
  )
}

export default null
