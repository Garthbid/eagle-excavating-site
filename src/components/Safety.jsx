import React from 'react'

const tickets = [
  'First Aid',
  'Ground Disturbance',
  'Confined Space',
  'CSTS',
  'Asbestos Awareness',
  'H2S',
  'WHMIS',
  'Line Locating'
]

export default function Safety() {
  return (
    <section id="safety" className="section">
      <div className="container">
        <div className="section-kicker">Safety</div>
        <h2 className="section-title">The standard is zero incidents.</h2>
        <p className="section-subtitle">Our team takes safety seriously. Tickets are current and verified. Daily tailgates, tidy sites, lockout/tagout, and utility locates before the first scoop.</p>

        <div className="grid cols-2" style={{marginTop: 20}}>
          <div className="card">
            <div style={{fontWeight:800, marginBottom:10}}>Current Tickets</div>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'8px 14px'}}>
              {tickets.map(t => (
                <li key={t} className="small" style={{display:'flex', alignItems:'center', gap:8}}>
                  <span style={{width:8, height:8, borderRadius:999, background:'var(--brand)'}}/>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div style={{fontWeight:800, marginBottom:10}}>Our Safety Approach</div>
            <ul className="small" style={{lineHeight:1.7}}>
              <li>Pre‑task plans and hazard IDs</li>
              <li>Utility locates and ground disturbance protocols</li>
              <li>Competent operators & spotters</li>
              <li>Traffic control and secure perimeters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
