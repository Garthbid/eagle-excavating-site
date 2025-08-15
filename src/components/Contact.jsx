import React, { useState } from 'react'

export default function Contact() {
  const phoneIntl = '+17803072815'
  const [project, setProject] = useState('')
  const smsBody = encodeURIComponent(`Hi Eagle Excavating — I\'d like a quote. Project: ${project}`)

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Let’s talk about your site.</h2>
        <p className="section-subtitle">Westlock, AB • Serving Northern Alberta</p>

        <div className="grid cols-2" style={{marginTop:20}}>
          <div className="card">
            <div style={{display:'grid', gap:10}}>
              <label className="small" htmlFor="project">Project summary (address, scope, timeline)</label>
              <textarea id="project" rows={6} value={project} onChange={e=>setProject(e.target.value)} placeholder="e.g., Install new water/sewer services and final grade for a 10,000 sq ft commercial site..." style={{background:'transparent', color:'var(--text)', border:'1px solid var(--outline)', borderRadius:'10px', padding:'12px'}}/>
              <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
                <a className="btn" href={`sms:${phoneIntl}?&body=${smsBody}`}>Text Us This</a>
                <a className="btn outline" href={`tel:${phoneIntl}`}>Call 780-307-2815</a>
              </div>
              <div className="small">No forms, no waiting—your message opens straight in SMS so we can get moving.</div>
            </div>
          </div>

          <div className="card">
            <div style={{display:'grid', gap:12}}>
              <div style={{fontWeight:800}}>Direct</div>
              <div className="small">Phone: <a href={`tel:${phoneIntl}`}>780‑307‑2815</a></div>
              <div className="small">Location: Westlock, Alberta</div>
              <hr className="hr"/>
              <div style={{fontWeight:800}}>Bid Intake</div>
              <ul className="small" style={{lineHeight:1.7}}>
                <li>Site address</li>
                <li>Drawings or sketches (if available)</li>
                <li>Utilities & access constraints</li>
                <li>Target start window</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
