import React, { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phoneIntl = '+17803072815'

  return (
    <header style={{position:'sticky', top:0, zIndex:40}}>
      <div className={
        'container'
      }>
        <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
          <div className="left">
            <a href="#" className="brand" aria-label="Eagle Excavating home">
              <img src="/logo.jpg" alt="Eagle Excavating logo" />
              <span>Eagle Excavating</span>
            </a>
          </div>
          <button className="menu" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
            <span/><span/><span/>
          </button>
          <div className={'links ' + (open ? 'open' : '')}>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#safety">Safety</a>
            <a href="#contact">Contact</a>
            <a className="btn" href={`tel:${phoneIntl}`}>Call 780-307-2815</a>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .nav {
          margin: 10px auto;
          padding: 10px 16px;
          border-radius: 12px;
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: space-between;
          border: 1px solid var(--outline);
          background: rgba(17,20,24, .70);
          transition: background .2s ease, border-color .2s ease;
        }
        .nav.scrolled { background: rgba(17,20,24, .92); border-color: #2b313a; }
        .brand { display:flex; align-items:center; gap:12px; font-weight:800; letter-spacing:.4px; }
        .brand img { width:44px; height:44px; object-fit:cover; border-radius:8px; border:1px solid var(--outline); }
        .links { display:flex; align-items:center; gap:18px; }
        .links a { color: var(--text); font-weight:600; }
        .menu { display:none; background:transparent; border:none; width:44px; height:44px; align-items:center; justify-content:center; gap:5px; }
        .menu span { display:block; width:22px; height:2px; background: var(--text); }
        @media (max-width: 900px) {
          .menu { display:flex; flex-direction:column; }
          .links { position: fixed; top: 72px; right: 18px; left: 18px; background: var(--surface); border:1px solid var(--outline); border-radius: 12px; padding: 16px; display:none; flex-direction:column; gap:12px; box-shadow: var(--shadow); }
          .links.open { display:flex; }
        }
      `}</style>
    </header>
  )
}
