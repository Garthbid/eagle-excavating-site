import React from 'react'

export default function CTA() {
  const phoneIntl = '+17803072815'
  return (
    <section className="section" aria-label="Call to action">
      <div className="container">
        <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
          <div>
            <div className="section-kicker">Get a quote</div>
            <h3 style={{fontFamily:'Oswald, Inter, sans-serif', fontSize:'clamp(24px,3.5vw,34px)', margin:'4px 0'}}>Bring us your scope—get a clear plan and price.</h3>
            <div className="small">We respond fast. If we miss you, expect a call back within the day.</div>
          </div>
          <div style={{display:'flex', gap:10}}>
            <a className="btn" href={`tel:${phoneIntl}`}>Call 780-307-2815</a>
            <a className="btn outline" href="#contact">Request a Site Visit</a>
          </div>
        </div>
      </div>
    </section>
  )
}
