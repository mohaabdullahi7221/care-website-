"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const IMG = {
  hero: "/school/students-mixed.jpg",
  about: "/school/students-outdoor-girls.jpg",
  primary: "/school/students-indoor-1.jpg",
  secondary: "/school/students-boys-group.jpg",
};

const nav = [
  ["/", "Bogga Hore"], ["/nagu-saabsan", "Nagu Saabsan"], ["/waxbarashada", "Waxbarashada"],
  ["/macallimiinta", "Macallimiinta"], ["/dhacdooyinka", "Dhacdooyinka"], ["/gallery", "Gallery"],
  ["/wararka", "Wararka"], ["/xiriir", "Nala Soo Xiriir"],
];

const teachers = [
  ["Kooxda Maamulka", "Hoggaanka Dugsiga", "/school/students-boys-group.jpg"],
  ["Macallimiinta Sare", "Hagidda Ardayda", "/school/students-indoor-2.jpg"],
  ["Ardayda Gabdhaha", "Waxbarasho iyo Horumar", "/school/students-outdoor-girls.jpg"],
  ["Ardayda Wiilasha", "Waxbarasho iyo Horumar", "/school/students-boys-group.jpg"],
  ["Bulshada CARE", "Iskaashi iyo Wadajir", "/school/students-outdoor-mixed.jpg"],
  ["Hawlaha Dugsiga", "Barasho ka baxsan Fasalka", "/school/care-school-event.jpg"],
];

const events = [
  ["Tartanka Aqoonta Ardayda", "Tartan Aqooneed", "Ardayda CARE waxay muujiyeen aqoon, kalsooni iyo wada-shaqayn.", "/school/event-student-speaker.jpg"],
  ["Bandhigga Kooxaha Aqoonta", "Hawl Arday", "Kooxaha ardaydu waxay si wadajir ah uga qaybgaleen hawl aqooneed xiiso leh.", "/school/event-knowledge-team.jpg"],
  ["Tartanka Ciyaaraha Fudud", "Maalinta Ciyaaraha", "Orod iyo tartamo kale oo kobcinaya caafimaadka, adkaysiga iyo tartanka wanaagsan.", "/school/event-track-race.jpg"],
  ["Kooxda CARE oo Billado Guddoontay", "Abaalmarin Ciyaareed", "Guulaha ciyaaraha waxaa lagu maamuusay koobab iyo billado sharaf leh.", "/school/event-sports-awards.jpg"],
  ["Tartanka Chess-ka", "Tartan Maskaxeed", "Ardaydu waxay ku tartameen qorshayn, dulqaad iyo fikir xeeldheer.", "/school/event-chess.jpg"],
  ["Tartanka Kubbadda Cagta", "Ciyaaraha Dugsiga", "Ciyaar xamaasad leh oo xoojisay wada-shaqaynta iyo anshaxa ciyaaraha.", "/school/event-football.jpg"],
  ["Tababarka Horumarinta Xirfadaha", "Tababar Macallimiin", "Tababar lagu kobcinayo aqoonta iyo xirfadaha kooxda waxbarashada.", "/school/event-training-certificate-1.jpg"],
  ["Guddoonsiinta Shahaadooyinka", "Aqoonsi iyo Shahaado", "Ka qaybgalayaasha tababarka ayaa lagu maamuusay shahaadooyin aqoonsi ah.", "/school/event-training-certificate-2.jpg"],
];

const news = [
  ["Ardayda CARE oo ka qaybgashay tartan dugsiyeed", "2 Agoosto 2026", "Ardayda dugsigeennu waxay si sharaf leh uga qaybgaleen munaasabad ay isugu yimaadeen dugsiyada gobolka Banaadir.", "/school/care-school-event.jpg"],
  ["Hawl waxbarasho oo ardayda loo qabtay", "28 Luulyo 2026", "Ardayda CARE waxay ka qaybqaateen hawl kobcinaysa aqoontooda iyo wada-shaqayntooda.", "/school/students-indoor-3.jpg"],
  ["Ardayda CARE oo booqasho waxbarasho tegay", "15 Luulyo 2026", "Booqashada waxbarashadu waxay ardayda siisay waayo-aragnimo cusub iyo aqoon dheeraad ah.", "/school/students-outdoor-mixed.jpg"],
];

const gallery = [
  ["Ardayda", "/school/students-indoor-1.jpg"],
  ["Ardayda", "/school/students-outdoor-girls.jpg"],
  ["Hawlaha Dugsiga", "/school/students-indoor-2.jpg"],
  ["Ardayda", "/school/students-mixed.jpg"],
  ["Hawlaha Dugsiga", "/school/students-indoor-3.jpg"],
  ["Booqashooyinka", "/school/students-outdoor-mixed.jpg"],
  ["Ardayda", "/school/students-boys-group.jpg"],
  ["Tartamada", "/school/care-school-event.jpg"],
  ["Tartamada", "/school/event-student-speaker.jpg"],
  ["Tartamada", "/school/event-knowledge-team.jpg"],
  ["Tartamada", "/school/event-knowledge-girls.jpg"],
  ["Xafladaha", "/school/event-sports-awards.jpg"],
  ["Tartamada", "/school/event-athletics-team.jpg"],
  ["Tartamada", "/school/event-track-race.jpg"],
  ["Tartamada", "/school/event-track-finish.jpg"],
  ["Macallimiinta", "/school/event-training-certificate-1.jpg"],
  ["Macallimiinta", "/school/event-training-certificate-2.jpg"],
  ["Hawlaha Dugsiga", "/school/event-knowledge-supervisor.jpg"],
  ["Tartamada", "/school/event-chess.jpg"],
  ["Tartamada", "/school/event-football.jpg"],
];

function Logo({ light = false }) {
  return <div className={`logo ${light ? "light" : ""}`}><img className="logo-img" src="/care-school-logo.png" alt="CARE School"/><span><b>CARE SCHOOL</b><small>PRIMARY & SECONDARY • WADAJIR</small></span></div>;
}

function Link({ to, children, className = "", onGo }) {
  return <a href={to} className={className} onClick={(e) => { e.preventDefault(); onGo(to); }}>{children}</a>;
}

function Navbar({ path, go }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="wrap topbar-in"><span>📍 Jidka Afgooye, Wadajir, Muqdisho</span><span>Dalladda SAFE &nbsp; • &nbsp; ☎️ 0615 486 189</span></div></div>
    <header className="navbar"><div className="wrap nav-in"><Link to="/" onGo={go}><Logo /></Link>
      <button className="menu" aria-label="Fur liiska" onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
      <nav className={open ? "open" : ""}>{nav.map(([to, label]) => <Link key={to} to={to} onGo={(x) => { go(x); setOpen(false); }} className={path === to ? "active" : ""}>{label}</Link>)}</nav>
    </div></header>
  </>;
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return <div className={`section-title ${light ? "light" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="orb one"></div><div className="orb two"></div><div className="wrap"><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function Stats() {
  const ref = useRef(null); const [run, setRun] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: .3 }); if(ref.current)o.observe(ref.current); return () => o.disconnect(); }, []);
  return <section className="stats" ref={ref}><div className="wrap stats-grid">{[[2010,"Sanadkii La Aasaasay"],["1000+","Arday Firfircoon"],["40+","Macallimiin"],["15+","Sano oo Khibrad ah"]].map(([n,l],i)=><div className={`stat ${run ? "seen" : ""}`} style={{"--d":`${i*.1}s`}} key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>
}

function Home({ go }) {
  const features = [["✦","Waxbarasho Tayo Leh"],["♟","Macallimiin Khibrad Leh"],["♡","Tarbiyad Wanaagsan"],["⌂","Deegaan Casri ah"],["↗","Horumarinta Kartida"],["★","Natiijooyin Wanaagsan"]];
  return <>
    <section className="hero"><div className="hero-bg" style={{backgroundImage:`linear-gradient(90deg,rgba(4,30,65,.95) 0%,rgba(4,30,65,.74) 48%,rgba(4,30,65,.12) 100%),url('${IMG.hero}')`}}></div><div className="wrap hero-in"><div className="hero-copy"><div className="pill">Tan iyo 2010 • Wadajir, Muqdisho</div><h1>Ku Soo Dhawoow <em>CARE</em> Primary and Secondary School</h1><p>Waxbarasho Tayo Leh, Tarbiyad Wanaagsan iyo Mustaqbal Iftiimaya</p><div className="actions"><Link to="/nagu-saabsan" onGo={go} className="btn gold">Wax Badan Ka Ogow <b>→</b></Link><Link to="/xiriir" onGo={go} className="btn ghost">Nala Soo Xiriir</Link></div></div><div className="hero-note"><span>Jiilka Berri</span><strong>Halkan ayuu ka bilaabmaa.</strong></div></div></section>
    <Stats />
    <section className="section"><div className="wrap split"><div className="image-stack"><img src={IMG.about} alt="Ardayda CARE School"/><div className="year"><b>15+</b><span>Sano oo adeeg waxbarasho ah</span></div></div><div><SectionTitle eyebrow="NAGU SAABSAN" title="Aqoonta iyo anshaxa ayaan si wadajir ah u dhisnaa."/><p className="lead">CARE Primary and Secondary School waa dugsi u taagan bixinta waxbarasho tayo leh iyo tarbiyad wanaagsan. Dugsigu wuxuu dadaal weyn geliyaa horumarinta aqoonta, anshaxa iyo kartida ardayda.</p><div className="ticks"><span>✓ Manhaj dhammaystiran</span><span>✓ Daryeel arday oo joogto ah</span><span>✓ Iskaashi waalid iyo dugsi</span><span>✓ Deegaan ammaan ah</span></div><Link to="/nagu-saabsan" onGo={go} className="text-link">Baro sheekadeenna <b>→</b></Link></div></div></section>
    <section className="section soft"><div className="wrap"><SectionTitle eyebrow="MAXAA NALOO DOORTAA?" title="Meel uu arday walba ku kobco" text="Waxaan isku darnaa aqoon, tarbiyad iyo daryeel si aan ardayda ugu diyaarinno mustaqbalka."/><div className="feature-grid">{features.map(([i,t],x)=><article className="feature" key={t}><span>{i}</span><div><small>0{x+1}</small><h3>{t}</h3><p>Hab waxbarasho oo ardayga dhiirrigeliya, kartidiisana si buuxda u kobciya.</p></div></article>)}</div></div></section>
    <section className="section"><div className="wrap"><SectionTitle eyebrow="WARARKA DUGSIGA" title="Wararkii Ugu Dambeeyay"/><CardGrid data={news} type="news"/><div className="center"><Link to="/wararka" onGo={go} className="btn navy">Dhammaan Wararka →</Link></div></div></section>
    <Testimonials />
    <CTA go={go}/>
  </>;
}

function About({go}) { const values=[["A","Aqoon","Waxbarasho qoto dheer oo fure u ah horumarka."],["A","Anshax","Akhlaaqda wanaagsan waa udub-dhexaadka bulshada."],["M","Mas'uuliyad","Qof walba wuxuu leeyahay door iyo waajib cad."],["H","Hal-abuur","Fikir cusub iyo xal-abuur ayaan dhiirrigelinnaa."],["I","Iskaashi","Waalid, arday iyo macallin oo isku duuban."],["H","Horumar","Maalin kasta tallaabo cusub oo hore loo qaado."]]; return <><PageHero eyebrow="CARE SCHOOL" title="Nagu Saabsan" text="Sheekada dugsi ku dhisan aqoon, anshax iyo himilo fog."/><section className="section"><div className="wrap split"><div><SectionTitle eyebrow="TAARIIKHDEENNA" title="Safar waxbarasho oo billowday 2010"/><p className="lead">CARE Primary and Secondary School waxaa la aasaasay sanadkii 2010, iyadoo ujeeddadu ahayd in carruurta Soomaaliyeed loo abuuro fursad waxbarasho oo tayo leh, la awoodi karo, kuna salaysan dhaqankeenna wanaagsan.</p><p>Sanadihii la soo dhaafay, dugsigu wuxuu noqday xarun waxbarasho oo lagu kalsoon yahay. Waxaan maalin kasta horumarinaynaa manhajka, xirfadda macallimiinta iyo deegaanka waxbarasho si ardaygu u helo meel uu ku fekero, ku tijaabiyo, kuna guulaysto.</p></div><div className="image-stack"><img src={IMG.primary} alt="Arday wax baranaya"/><div className="year"><b>2010</b><span>Bilowgii safarkeenna</span></div></div></div></section><section className="section navy-block"><div className="wrap mission-grid"><article><span>01</span><h2>Himiladeenna</h2><p>Inaan bixinno waxbarasho tayo sare leh oo dhisaysa aqoonta, akhlaaqda, kalsoonida iyo kartida arday kasta.</p></article><article><span>02</span><h2>Aragtideenna</h2><p>Inaan noqonno dugsi hormuud u ah tayada waxbarashada Soomaaliya, soona saara jiil mas'uul ah oo hal-abuur leh.</p></article></div></section><section className="section soft"><div className="wrap"><SectionTitle eyebrow="WAXAAN AAMINSANAHAY" title="Qiimaha nagu hagaya"/><div className="value-grid">{values.map(([l,t,d])=><article><span>{l}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section><CTA go={go}/></> }

function Academics({go}) { const subjects=[["∑","Xisaab"],["S","Af-Soomaali"],["E","Af-Ingiriisi"],["ع","Af-Carabi"],["⚗","Saynis"],["◎","Cilmiga Bulshada"],["☾","Diinta Islaamka"],["⌘","Kombiyuutar"]]; return <><PageHero eyebrow="BARNAAMIJYADA" title="Waxbarashada" text="Manhaj dhammaystiran oo ardayda u diyaariya nolosha, jaamacadda iyo mustaqbalka."/><section className="section"><div className="wrap academic-grid"><article className="academic-card"><img src={IMG.primary} alt="Waxbarashada hoose"/><div><small>FASALLADA 1–8</small><h2>Dugsiga Hoose & Dhexe</h2><p>Waxaan dhisnaa aasaas adag oo akhris, qoraal, xisaab iyo faham ah; iyadoo ciyaar, su'aalo iyo hawlo wadajir ahi ka dhigayaan waxbarashada mid xiiso leh.</p><ul><li>Aasaas aqooneed oo adag</li><li>Tarbiyad iyo anshax</li><li>Kormeerka horumarka ardayga</li></ul></div></article><article className="academic-card"><img src={IMG.secondary} alt="Waxbarashada sare"/><div><small>FASALLADA 9–12</small><h2>Dugsiga Sare</h2><p>Ardayda waxaan siinnaa aqoon qoto dheer, xirfado fikir iyo diyaargarow imtixaan oo u sahlaya jaamacad iyo nolol shaqo oo guul leh.</p><ul><li>Diyaargarow imtixaan qaran</li><li>Hagid waxbarasho iyo xirfadeed</li><li>Shaybaar iyo tiknoolajiyad</li></ul></div></article></div></section><section className="section soft"><div className="wrap"><SectionTitle eyebrow="MAADOOYINKA" title="Aqoon ballaaran, xirfado waara" text="Maaddo kasta waxaa dhigaya macallimiin khibrad leh, iyadoo casharradu isku daraan aragti iyo ku-dhaqan."/><div className="subjects">{subjects.map(([i,s])=><div><span>{i}</span><b>{s}</b></div>)}</div></div></section><CTA go={go}/></> }

function Teachers() { return <><PageHero eyebrow="KOOXDEENNA" title="Macallimiinta" text="Baro dadka aqoonta, daryeelka iyo dhiirrigelinta maalin kasta la garab taagan ardaydeenna."/><section className="section"><div className="wrap"><SectionTitle eyebrow="HOGGAAN & MACALLIMIIN" title="Khubaro qalbi waxbarid leh"/><div className="teacher-grid">{teachers.map(([n,r,img])=><article className="teacher"><div className="teacher-img"><img src={img} alt={n}/><div className="socials"><span>f</span><span>in</span></div></div><small>{r}</small><h3>{n}</h3></article>)}</div></div></section></> }

function CardGrid({data,type}) { return <div className="card-grid">{data.map(([t,d,x,img])=><article className="content-card" key={t}><div className="card-img"><img src={img} alt={t}/><span>{type === "news" ? "WAR CUSUB" : d.split(" ")[0]}</span></div><div className="card-body"><small>◷ {d}</small><h3>{t}</h3><p>{x}</p><button>{type === "news" ? "Akhri wax dheeraad ah" : "Faahfaahin"} <b>→</b></button></div></article>)}</div> }
function Events(){return <><PageHero eyebrow="JADWALKA DUGSIGA" title="Dhacdooyinka Dugsiga" text="La soco munaasabadaha, tartamada iyo kulamada muhiimka ah ee bulshadeenna waxbarasho."/><section className="section"><div className="wrap"><CardGrid data={events} type="event"/></div></section></>}

function GalleryPage(){const [filter,setFilter]=useState("Dhammaan"); const [modal,setModal]=useState(null); const cats=["Dhammaan","Ardayda","Macallimiinta","Xafladaha","Fasallada","Tartamada","Hawlaha Dugsiga"]; const shown=filter==="Dhammaan"?gallery:gallery.filter(x=>x[0]===filter); useEffect(()=>{const f=e=>e.key==="Escape"&&setModal(null);addEventListener("keydown",f);return()=>removeEventListener("keydown",f)},[]);return <><PageHero eyebrow="XUSUUSAHEENNA" title="Sawirrada Dugsiga" text="Muuqaallo ka tarjumaya waxbarashada, farxadda iyo wadajirka CARE School."/><section className="section"><div className="wrap"><div className="filters">{cats.map(c=><button className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="gallery-grid">{shown.map(([c,img],i)=><button onClick={()=>setModal([c,img])} className={`gallery-item g${i%5}`}><img src={img} alt={c}/><span><b>{c}</b><i>+ Daawo</i></span></button>)}</div></div></section>{modal&&<div className="lightbox" onClick={()=>setModal(null)} role="dialog" aria-modal="true"><button aria-label="Xir">×</button><img src={modal[1]} alt={modal[0]}/><span>{modal[0]}</span></div>}</>}

function News(){return <><PageHero eyebrow="WARGELINTA" title="Wararkii Ugu Dambeeyay" text="Akhri guulaha ardayda, horumarka dugsiga iyo wararka cusub ee CARE School."/><section className="section"><div className="wrap"><CardGrid data={[...news,...events.slice(0,3)]} type="news"/></div></section></>}

function Testimonials(){return <section className="section testimonials"><div className="wrap"><SectionTitle eyebrow="BULSHADEENNA" title="Waxay Naga Yiraahdeen" light/><div className="quote-grid">{[["Hodan Warsame","Waalid","Dugsigu ma bixiyo aqoon keliya; waxaan si cad uga arkaa ilmahayga kalsooni iyo akhlaaq wanaagsan."],["Yuusuf Cabdi","Arday","Macallimiintu waxay naga dhigaan inaan su'aalo weydiinno, fikradno oo aan rumaysanno kartideenna."],["Sahra Maxamed","Arday Hore","Aasaaskii aan CARE ka helay ayaa ii fududeeyey jaamacadda. Weli waxaan dareemaa inaan qoyska dugsiga ka tirsanahay."]].map(([n,r,q])=><blockquote><span>“</span><p>{q}</p><footer><b>{n}</b><small>{r}</small></footer></blockquote>)}</div></div></section>}

function Contact(){const [sent,setSent]=useState(false);function submit(e){e.preventDefault();if(e.currentTarget.reportValidity()){setSent(true);e.currentTarget.reset();}}return <><PageHero eyebrow="WADA HADAL" title="Nala Soo Xiriir" text="Su'aal ma qabtaa? Kooxdayadu waxay diyaar u tahay inay ku caawiso."/><section className="section"><div className="wrap contact-grid"><div><SectionTitle eyebrow="XOGTA XIRIIRKA" title="Waxaan jeclaan lahayn inaan kaa maqalno."/><p className="lead">Nagu soo booqo Jidka Afgooye, Wadajir ama naga soo wac lambarka dugsiga. Waxaan ku siin doonnaa macluumaadka diiwaangelinta iyo waxbarashada.</p><div className="contact-list"><div><span>📍</span><p><b>Goobta</b>27PW+HJG, Jidka Afgooye, Wadajir, Muqdisho</p></div><div><span>☎</span><p><b>Telefoonka</b>0615 486 189</p></div><div><span>⌂</span><p><b>Dalladda Waxbarashada</b>SAFE</p></div></div></div><form onSubmit={submit}><div className="form-head"><span>FARIIN NOO SOO DIR</span><h2>Sideen kuu caawin karnaa?</h2></div><div className="form-row"><label>Magaca<input required name="name" placeholder="Magaca oo buuxa"/></label><label>Telefoonka<input required name="phone" type="tel" placeholder="0615 486 189"/></label></div><label>Iimaylka<input required name="email" type="email" placeholder="magac@tusaale.com"/></label><label>Mawduuca<input required name="subject" placeholder="Maxay fariintu ku saabsan tahay?"/></label><label>Fariinta<textarea required name="message" rows="5" placeholder="Halkan ku qor fariintaada..."></textarea></label><button className="btn gold" type="submit">Dir Fariinta →</button>{sent&&<p className="success">Mahadsanid! Fariintaada waa la diyaariyey.</p>}</form></div></section><section className="map"><div><span>📍</span><b>CARE Primary and Secondary School</b><small>Jidka Afgooye, Wadajir, Muqdisho</small></div></section></>}

function CTA({go}){return <section className="cta"><div className="wrap cta-in"><div><span>DIWAANGELINTA WAY FURAN TAHAY</span><h2>Ma Doonaysaa Inaad Ilmahaaga Ka Mid Dhigto CARE School?</h2></div><Link to="/xiriir" onGo={go} className="btn white">Nala Soo Xiriir <b>→</b></Link></div></section>}

function Footer({go}){return <footer className="footer"><div className="wrap footer-grid"><div><Logo light/><p>Waxaan dhisnaa jiil aqoon leh, anshax leh, una diyaarsan inuu bulshada wax ku biiriyo.</p><div className="footer-social"><span>f</span><span>◉</span><span>▶</span></div></div><div><h3>Xiriirro Degdeg ah</h3>{nav.slice(0,4).map(([t,l])=><Link to={t} onGo={go}>{l}</Link>)}</div><div><h3>Waxbarashada</h3><Link to="/waxbarashada" onGo={go}>Dugsiga Hoose</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Dhexe</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Sare</Link><Link to="/dhacdooyinka" onGo={go}>Dhacdooyinka</Link></div><div><h3>Nala Soo Xiriir</h3><p>📍 Jidka Afgooye, Wadajir, Muqdisho</p><p>☎ 0615 486 189</p><p>⌂ Dalladda SAFE</p></div></div><div className="copyright"><div className="wrap">© 2026 CARE Primary and Secondary School. Xuquuqda oo dhan way dhowran tahay.<span>Sawirrada waxbarashada: CARE Soomaaliya</span></div></div></footer>}

export default function App(){const [path,setPath]=useState("/"); const [top,setTop]=useState(false); useEffect(()=>{setPath(location.pathname); const pop=()=>setPath(location.pathname); const scroll=()=>setTop(scrollY>500); addEventListener("popstate",pop);addEventListener("scroll",scroll);return()=>{removeEventListener("popstate",pop);removeEventListener("scroll",scroll)}},[]); function go(to){history.pushState({},"",to);setPath(to);scrollTo({top:0,behavior:"smooth"})} const page=useMemo(()=>({"/":<Home go={go}/>,"/nagu-saabsan":<About go={go}/>,"/waxbarashada":<Academics go={go}/>,"/macallimiinta":<Teachers/>,"/dhacdooyinka":<Events/>,"/gallery":<GalleryPage/>,"/wararka":<News/>,"/xiriir":<Contact/>})[path]||<Home go={go}/>,[path]);return <><Navbar path={path} go={go}/><main key={path}>{page}</main><Footer go={go}/><a className="whatsapp" href="https://wa.me/252612345678" target="_blank" aria-label="WhatsApp">☏<span>Nala hadal</span></a>{top&&<button className="to-top" onClick={()=>scrollTo({top:0,behavior:"smooth"})} aria-label="Kor ugu noqo">↑</button>}</>}
