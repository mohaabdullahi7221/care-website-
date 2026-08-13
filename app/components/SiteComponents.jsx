"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "../data/siteData";

export function Logo({ light = false }) {
  return <div className={`logo ${light ? "light" : ""}`}><img className="logo-img" src="/images/care-school-logo.png" alt="CARE School"/><span><b>CARE</b><small>Primary &amp; Secondary School</small></span></div>;
}

export function Link({ to, children, className = "", onGo }) {
  return <a href={to} className={className} onClick={(e) => { e.preventDefault(); onGo(to); }}>{children}</a>;
}

export function Navbar({ path, go }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="wrap topbar-in"><span>📍 Jidka Afgooye, Wadajir, Muqdisho</span><span>Midowga Dugsiyada Gobolka Banaadir &nbsp; • &nbsp;</span></div></div>
    <header className="navbar"><div className="wrap nav-in"><Link to="/" onGo={go}><Logo /></Link>
      <button className="menu" aria-label="Fur liiska" onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
      <nav className={open ? "open" : ""}>{nav.map(([to, label]) => <Link key={to} to={to} onGo={(x) => { go(x); setOpen(false); }} className={path === to ? "active" : ""}>{label}</Link>)}</nav>
    </div></header>
  </>;
}

export function SectionTitle({ eyebrow, title, text, light = false }) {
  return <div className={`section-title ${light ? "light" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="orb one"></div><div className="orb two"></div><div className="wrap"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

export function Stats() {
  const ref = useRef(null); const [run, setRun] = useState(false); const [values, setValues] = useState([0,0,0,0]);
  useEffect(() => { const o = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: .3 }); if(ref.current)o.observe(ref.current); return () => o.disconnect(); }, []);
  useEffect(() => { if(!run)return; const targets=[2010,350,17,15], start=performance.now(), duration=1800; let frame; const count=(now)=>{const progress=Math.min((now-start)/duration,1); const eased=1-Math.pow(1-progress,3); setValues(targets.map(n=>Math.round(n*eased))); if(progress<1)frame=requestAnimationFrame(count)}; frame=requestAnimationFrame(count); return()=>cancelAnimationFrame(frame)}, [run]);
  const stats=[[values[0],"Sanadkii La Aasaasay",false],[values[1],"Arday Firfircoon",true],[values[2],"Macallimiin",true],[values[3],"Sano oo Khibrad ah",true]];
  return <section className="stats" ref={ref}><div className="wrap stats-grid">{stats.map(([n,l,plus],i)=><div className={`stat ${run ? "seen" : ""}`} style={{"--d":`${i*.1}s`}} key={l}><strong>{n}{plus&&"+"}</strong><span>{l}</span></div>)}</div></section>
}

export function CardGrid({data,type}) { return <div className="card-grid">{data.map(([t,d,x,img])=><article className="content-card" key={t}><div className="card-img"><img loading="lazy" decoding="async" src={img} alt={t}/><span>{type === "news" ? "WAR CUSUB" : d.split(" ")[0]}</span></div><div className="card-body"><small>◷ {d}</small><h3>{t}</h3><p>{x}</p><button>{type === "news" ? "Akhri wax dheeraad ah" : "Faahfaahin"} <b>→</b></button></div></article>)}</div> }

export function Testimonials(){return <section className="section testimonials"><div className="wrap"><SectionTitle eyebrow="BULSHADEENNA" title="Waxay Naga Yiraahdeen" light/><div className="quote-grid">{[["Hodan Warsame","Waalid","Dugsigu ma bixiyo aqoon keliya; waxaan si cad uga arkaa ilmahayga kalsooni iyo akhlaaq wanaagsan."],["xuseen maxamed ","Arday","Macallimiintu waxay naga dhigaan inaan su'aalo weydiinno, fikradno oo aan rumaysanno kartideenna."],["cabdinajiib xirsi","Arday Hore","Aasaaskii aan CARE ka helay ayaa ii fududeeyey jaamacadda. Weli waxaan dareemaa inaan qoyska dugsiga ka tirsanahay."]].map(([n,r,q])=><blockquote><span>“</span><p>{q}</p><footer><b>{n}</b><small>{r}</small></footer></blockquote>)}</div></div></section>}

export function CTA({go}){return <section className="cta"><div className="wrap cta-in"><div><span>DIWAANGELINTA WAY FURAN TAHAY</span><h2>Ma Doonaysaa Inaad Ilmahaaga Ka Mid Dhigto CARE School?</h2></div><Link to="/xiriir" onGo={go} className="btn white">Nala Soo Xiriir <b>→</b></Link></div></section>}

export function Footer({go}){return <footer className="footer"><section className="oversight"><div className="wrap"><span>DUGSIGU WUXUU HOOS TAGAA</span><h2>Hay’adaha Waxbarashada</h2><div className="oversight-grid"><article><img src="/images/wasaaradda-waxbarashada.jpg" alt="Astaanta Wasaaradda Waxbarashada, Hiddaha iyo Tacliinta Sare"/><b>Wasaaradda Waxbarashada, Hiddaha iyo Tacliinta Sare</b></article><article><img src="/images/agaasinka-waxbarashada-banaadir.jpg" alt="Astaanta Agaasinka Waxbarashada Gobolka Banaadir"/><b>Agaasinka Waxbarashada Gobolka Banaadir</b></article><article><img src="/images/midowga-dugsiyada-banaadir.png" alt="Astaanta Midowga Dugsiyada Gobolka Banaadir"/><b>Midowga Dugsiyada Gobolka Banaadir</b></article></div></div></section><div className="wrap footer-grid"><div><Logo light/><p>Waxaan dhisnaa jiil aqoon leh, anshax leh, una diyaarsan inuu bulshada wax ku biiriyo.</p><div className="footer-social"><a href="https://www.facebook.com/CarePrimaryAndSecondarySchool" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">f</a><a href="https://www.tiktok.com/@care_school?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">♪</a><a href="https://www.youtube.com/@careprimaryandsecondaryschool" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">▶</a></div></div><div><h3>Xiriirro Degdeg ah</h3>{nav.slice(0,4).map(([t,l])=><Link to={t} onGo={go}>{l}</Link>)}</div><div><h3>Waxbarashada</h3><Link to="/waxbarashada" onGo={go}>Dugsiga Hoose</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Dhexe</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Sare</Link><Link to="/dhacdooyinka" onGo={go}>Dhacdooyinka</Link></div><div><h3>Nala Soo Xiriir</h3><p>📍 Jidka Afgooye, Wadajir, Muqdisho</p><p>☎ 0616460649</p><p>⌂ Midowga Dugsiyada Gobolka Banaadir</p></div></div><div className="copyright"><div className="wrap">© 2026 CARE Primary and Secondary School. Xuquuqda oo dhan way dhowran tahay.<span>Sawirrada waxbarashada: CARE Soomaaliya</span></div></div></footer>}
