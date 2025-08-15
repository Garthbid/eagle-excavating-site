import React from 'react'

export default function Hero() {
  const phoneIntl = '+17803072815'
  const smsBody = encodeURIComponent("Hi Eagle Excavating — I'd like a quote. Project: ")


  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="copy">
          <div className="kicker">Westlock, Alberta</div>
          <h1>Earthworks built to last.<br/>Execution you can bank on.</h1>
          <p className="lead">
            From tight urban sites to full greenfield development, Eagle Excavating delivers precision earthworks, trenching, and underground utilities across Westlock and Northern Alberta. 
            We plan hard, execute clean, and finish with grades that pass inspection the first time.
          </p>
          <div className="actions">
            <a className="btn" href={`tel:${phoneIntl}`}>Call 780-307-2815</a>
            <a className="btn outline" href={`sms:${phoneIntl}?&body=${smsBody}`}>Text for a Quote</a>
            <a className="btn outline" href="#contact">Request a Site Visit</a>
          </div>
          <div className="trust">
            <div className="pill">Decades of combined experience</div>
            <div className="pill">Ticketed operators</div>
            <div className="pill">Inspection‑ready finishes</div>
          </div>
        </div>
        <div className="art">
          <div className="art-card">
            <img src="/logo.jpg" alt="Eagle graphic" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 80px 0 40px;
          background:
            radial-gradient(1200px 400px at 80% -10%, rgba(227,30,36,.25), transparent 60%),
            linear-gradient(180deg, rgba(227,30,36,.06), transparent 35%);
        }
        .hero-inner {
          display:grid; grid-template-columns: 1.1fr .9fr; gap: 28px; align-items:center;
        }
        .kicker { color: var(--brand); font-weight:800; letter-spacing:1.6px; text-transform:uppercase; font-size:12px; margin-bottom:10px; }
        h1 { font-family: Oswald, Inter, sans-serif; font-size: clamp(34px, 6vw, 60px); line-height: 1.03; margin: 8px 0 12px; }
        .lead { color: var(--muted); font-size: 18px; max-width: 740px; }
        .actions { margin-top: 18px; display:flex; flex-wrap:wrap; gap: 12px; }
        .trust { margin-top: 16px; display:flex; flex-wrap:wrap; gap: 10px; }
        .pill { border:1px solid var(--outline); background: var(--surface); padding: 8px 12px; border-radius: 999px; font-size: 13px; color: var(--muted); }
        .art { display:flex; justify-content:center; }
        .art-card { width: 100%; max-width: 440px; aspect-ratio: 1/1; background: radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,.04), rgba(0,0,0,.1)); border-radius: 24px; border:1px solid var(--outline); overflow:hidden; box-shadow: var(--shadow); }
        .art-card img { width: 100%; height: 100%; object-fit: cover; }
        @media (max-width: 980px) {
          .hero-inner { grid-template-columns: 1fr; }
          .art-card { max-width: 360px; margin: 10px auto 0; }
        }
      `}</style>
    </section>
  )
}
