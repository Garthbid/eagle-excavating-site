import React from 'react'

const steps = [
  { n: '1', t: 'Plan', d: 'Meet on site, review drawings, clarify scope, and prepare a no‑surprises budget and schedule.' },
  { n: '2', t: 'Build', d: 'Ticketed operators, tidy sites, daily updates, and clean passes. We coordinate and keep the schedule honest.' },
  { n: '3', t: 'Deliver', d: 'Final grade, compaction results, and first‑try inspections. Closeout done right.' },
]

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-kicker">Working together</div>
        <h2 className="section-title">A disciplined, end‑to‑end experience.</h2>
        <p className="section-subtitle">
          Seamless communication, transparent budgeting, tidy on‑site organization, and quality handiwork every time.
        </p>

        <div className="grid cols-3" style={{marginTop: 20}}>
          {steps.map(s => (
            <div className="card" key={s.n}>
              <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:8}}>
                <div style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', background:'rgba(227,30,36,.1)', color:'var(--brand)', fontWeight:800, border:'1px solid var(--outline)'}}>{s.n}</div>
                <div style={{fontFamily:'Oswald, Inter, sans-serif', fontSize:22}}>{s.t}</div>
              </div>
              <div className="small" style={{lineHeight:1.6}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
