import React from 'react'

export default function Footer() {
  return (
    <footer style={{padding:'40px 0 60px', borderTop:'1px solid var(--outline)', background:'linear-gradient(180deg, transparent, rgba(255,255,255,.02))'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, flexWrap:'wrap'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <img src="/logo.jpg" alt="Eagle logo small" style={{width:36, height:36, borderRadius:8, border:'1px solid var(--outline)'}}/>
          <div>
            <div style={{fontWeight:800}}>Eagle Excavating</div>
            <div className="small">Westlock, AB • 780‑307‑2815</div>
          </div>
        </div>
        <div className="small">© <span id="year"></span> Eagle Excavating. All rights reserved.</div>
      </div>
      <script dangerouslySetInnerHTML={{__html: "document.getElementById('year').textContent = new Date().getFullYear()"}} />
    </footer>
  )
}
