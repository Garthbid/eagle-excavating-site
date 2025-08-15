import React from 'react'

const services = [
  {
    title: 'Site Development',
    desc: 'Clearing to final grade for commercial and residential sites.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 20h18M5 16h14l-2-6H7l-2 6Z" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="7" cy="20" r="2" fill="currentColor"/><circle cx="17" cy="20" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Earthworks & Excavation',
    desc: 'Cuts/fills, trenching, backfill, compaction, basements & foundations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h6l3 3h9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M6 14v6m12-6v6" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Water & Sewer',
    desc: 'Service installs, replacements, repairs, and tie‑ins.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3s5 5 5 9a5 5 0 1 1-10 0c0-4 5-9 5-9Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Aggregates & Hauling',
    desc: 'Supply, delivery, placement; road base, gravel, sand.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 13h8l4-5 6 5v6H3v-6Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Demolition',
    desc: 'Selective demo, haul‑off, and tidy sites.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20l16-16M7 7l10 10" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Landscaping & Final Grade',
    desc: 'Inspection‑ready finishes that drain right.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18h16M6 14h12M8 10h8" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Basement Waterproofing',
    desc: 'Weeping tile, membrane, drainage, sump connections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M8 21V3m8 18V3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    title: 'Much More — Ask',
    desc: 'If it moves dirt or pipe, we do it.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7v6m0 4h.01" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-kicker">What we do</div>
        <h2 className="section-title">Heavy civil done right.</h2>
        <p className="section-subtitle">
          From small driveways to full site development, commercial or residential—we handle the scope, schedule, and coordination end‑to‑end so you don’t wear the risk.
        </p>

        <div className="grid cols-3" style={{marginTop: 20}}>
          {services.map((s) => (
            <div className="card" key={s.title} style={{display:'flex', gap:14}}>
              <div style={{width:44, height:44, borderRadius:10, display:'grid', placeItems:'center', background:'rgba(227,30,36,.1)', color:'var(--brand)', border:'1px solid var(--outline)'}}>
                {s.icon}
              </div>
              <div>
                <div style={{fontWeight:800, letterSpacing:.3, marginBottom:6}}>{s.title}</div>
                <div className="small" style={{lineHeight:1.5}}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
