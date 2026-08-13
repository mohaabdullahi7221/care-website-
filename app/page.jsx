"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const IMG = {
  hero: "/school/students-mixed.jpg",
  about: "/school/students-outdoor-girls.jpg",
  primary: "/school/students-indoor-1.jpg",
  secondary: "/school/students-boys-group.jpg",
};

const heroSlides = [
  "/school/students-outdoor-mixed.jpg",
  "/school/downloads/students-team-outdoor.jpeg",
  "/school/students-outdoor-girls.jpg",
  "/school/students-mixed.jpg",
  "/school/students-boys-group.jpg",
];

const nav = [
  ["/", "Bogga Hore"], ["/nagu-saabsan", "Nagu Saabsan"], ["/waxbarashada", "Waxbarashada"],
  ["/macallimiinta", "Macallimiinta"], ["/dhacdooyinka", "Dhacdooyinka"], ["/gallery", "Gallery"],
  ["/wararka", "Wararka"], ["/xiriir", "Nala Soo Xiriir"],
];

const teachers = [
  ["Macallin Cali Cumar Cali", "Kimistari iyo Bayooloji\nMadaxa Arrimaha Ardayda", "/teachers/cali.jpeg"],
  ["Macallin Maxamed Nuur Maxamed Cabdullaahi", "Xisaab\nMadaxa Macallimiinta", "/teachers/maxamed-nuur-maxamed-cabdullaahi.jpeg"],
  ["Macallin Xuseen Khadar Xuseen", "Af-Soomaali\nMadaxa Imtixaanaadka", "/teachers/xuseen.jpeg"],
  ["Macallin Maxamed Cabdullaahi Isxaaq", "Fiisigis\nMaamulka Gelinka Dambe", "/teachers/mohamed.jpeg"],
  ["Macallin Cabdullaahi Cumar Cali", "Xisaab", "/teachers/abdullahi.jpeg"],
  ["Macallin  Cali Maxamed Cabdullaahi", "Diinta Islaamka", "/teachers/sh-cali.jpeg"],
  ["Macallin Abshir Ibraahim Aadan", "cilmiga bulshada", "/teachers/abshir.jpeg"],
  ["Macallin Cabdinaasir maxamed  cumar ", "Cilmiga Bulshada", "/teachers/c-naasir.jpeg"],
  ["Macallin maxamed cumar cali", "tiknooloji", "/teachers/deeqow.jpeg"],
  ["Maxamed Cali Yaasiin", "Xisaabiye", "/administration/maxamed-cali-yaasiin.jpeg"],
  ["Macallin Maxmuud aadan cusmaaan", "Juqraafi iyo taariikh", "/teachers/maxamuud.jpeg"],
  ["Macallin Cali Abshir kheyre", "Af-Carabi iyo tarbiyo", "/teachers/c-abshir.jpeg"],
  ["Macallin Bashiir xareed xasan", "cilmiga bulshada , saynis iyo tiknooloji ", "/teachers/bashiir.jpeg"],
  ["Macallimad Maryama Shariif Cali", "Saynis iyo Tiknooloji", "/teachers/maryama-shariif-cali.jpeg"],
];

const events = [
  ["Macallimiinta CARE oo ka Qaybgalay Shirweynaha Waxbarashada", "Shir Waxbarasho", "Macallimiinta CARE waxay ka qaybgaleen shirweynaha waxbarashada dugsiyada Gobolka Banaadir.", "/school/downloads/education-forum-attendees.jpeg"],
  ["Abaalmarinta Ardayda Dadaalka Badan", "Abaalmarin Arday", "Ardayda dadaalka iyo natiijada wanaagsan muujisay ayaa lagu dhiirrigeliyey hadiyado iyo aqoonsi.", "/school/downloads/girls-awards.jpeg"],
  ["Ardayda STEM oo Booqday Xarunta Jaamacadda Jamhuriya", "Booqasho Waxbarasho", "Ardayda STEM ee Dugsiga CARE ayaa booqasho waxbarasho ku tagay xarunta Jaamacadda Jamhuriya.", "/school/downloads/stem-exhibition.jpeg"],
  ["Ardayda STEM oo Casharro Wax-ku-ool ah ku Qaatay Jamhuriya", "Saynis iyo Tiknoolaji", "Intii ay booqashada ku jireen, ardaydu waxay ka qaybqaateen casharro iyo tijaabooyin la xiriira sayniska iyo tiknoolajiyada.", "/school/downloads/stem-student-robotics.jpeg"],
  ["Ardayda STEM oo Khibrad ka Kororsaday Jaamacadda Jamhuriya", "STEM", "Ardaydu waxay xarunta Jaamacadda Jamhuriya ku kororsadeen aqoon iyo waayo-aragnimo ku saabsan injineernimada iyo hal-abuurka.", "/school/downloads/stem-engineering-team.jpeg"],
  ["Maalinta Calanka Soomaaliya", "Waddaniyad", "Ardayda CARE waxay si sharaf leh u muujiyeen jacaylka calanka iyo dalkooda Soomaaliya.", "/school/downloads/students-somali-flag-group.jpeg"],
  ["Xafladda Qalin-jabinta Ardayda", "Qalin-jabin", "Munaasabad lagu maamuusay dadaalka iyo guusha ardayda dhammaystay waxbarashadooda.", "/school/downloads/graduation-class.jpeg"],
  ["Guddoonsiinta Abaalmarinta Qalin-jabinta", "Abaalmarin", "Ardayda hormuudka ah ayaa lagu dhiirrigeliyey shahaadooyin iyo abaalmarinno sharaf leh.", "/school/downloads/graduation-award.jpeg"],
  ["Bandhigga Tiknoolajiyada Waxbarashada", "Tiknoolaji", "Ardaydu waxay ka qaybgaleen bandhig lagu soo bandhigay qalab iyo hal-abuur tiknoolajiyeed.", "/school/downloads/technology-launch.jpeg"],
  ["Heshiis Iskaashi oo Dhexmaray CARE iyo Nageyle", "Iskaashi Waxbarasho", "Dugsiga CARE iyo Dugsiga Nageyle ayaa kala saxiixday heshiis iskaashi waxbarasho oo lagu xoojinayo wada-shaqaynta iyo horumarinta fursadaha ardayda.", "/school/downloads/agreement-signing.jpeg"],
  ["Aqoonsi loo Guddoonsiiyey CARE", "Aqoonsi", "Dugsiga CARE ayaa lagu maamuusay kaalintiisa horumarinta waxbarashada iyo bulshada.", "/school/downloads/school-recognition.jpeg"],
  ["Tababarka Garsoorayaasha oo Dugsigu ka Qaybgalay", "Tababar Garsoorayaal", "Dugsiga CARE ayaa ka qaybgalay tababar lagu horumarinayey aqoonta iyo xirfadaha garsoorayaasha ciyaaraha.", "/school/downloads/football-certificate.jpeg"],
  ["Tartanka Aqoonta Ardayda", "Tartan Aqooneed", "Ardayda CARE waxay muujiyeen aqoon, kalsooni iyo wada-shaqayn.", "/school/event-student-speaker.jpg"],
  ["Bandhigga Kooxaha Aqoonta", "Hawl Arday", "Kooxaha ardaydu waxay si wadajir ah uga qaybgaleen hawl aqooneed xiiso leh.", "/school/event-knowledge-team.jpg"],
  ["Tartanka Ciyaaraha Fudud", "Maalinta Ciyaaraha", "Orod iyo tartamo kale oo kobcinaya caafimaadka, adkaysiga iyo tartanka wanaagsan.", "/school/event-track-race.jpg"],
  ["Kooxda CARE oo Billado Guddoontay", "Abaalmarin Ciyaareed", "Guulaha ciyaaraha waxaa lagu maamuusay koobab iyo billado sharaf leh.", "/school/event-sports-awards.jpg"],
  ["Tartanka Chess-ka", "Tartan Maskaxeed", "Ardaydu waxay ku tartameen qorshayn, dulqaad iyo fikir xeeldheer.", "/school/event-chess.jpg"],
  ["Tartanka Kubbadda Cagta", "Ciyaaraha Dugsiga", "Ciyaar xamaasad leh oo xoojisay wada-shaqaynta iyo anshaxa ciyaaraha.", "/school/event-football.jpg"],
  ["Tababarka Horumarinta Xirfadaha", "Tababar Macallimiin", "Tababar lagu kobcinayo aqoonta iyo xirfadaha kooxda waxbarashada.", "/school/event-training-certificate-1.jpg"],
  ["Guddoonsiinta Shahaadooyinka", "Aqoonsi iyo Shahaado", "Ka qaybgalayaasha tababarka ayaa lagu maamuusay shahaadooyin aqoonsi ah.", "/school/event-training-certificate-2.jpg"],
];

const homeEvents = [events[0], events[2], events[6]];

const news = [
  ["Ardayda CARE oo Booqday Muqdisho Stadium", "2 Agoosto 2026", "Ardayda dugsiga CARE waxay booqasho waxbarasho iyo dalxiis ku tageen Muqdisho Stadium, iyagoo wax badan ka bartay ciyaaraha iyo muhiimadda caafimaadka jirka.", "/school/care-school-event.jpg"],
  ["Ardayda CARE oo Booqday Isbitaalka Somali Sudanese", "28 Luulyo 2026", "Ardayda CARE waxay booqdeen Isbitaalka Somali Sudanese si ay aqoon dheeraad ah uga helaan adeegyada caafimaadka iyo shaqada xirfadlayaasha caafimaadka.", "/school/students-outdoor-mixed.jpg"],
  ["Baaritaan Caafimaad oo loo Sameeyey Ardayda", "15 Luulyo 2026", "Ardayda dugsiga waxaa loo sameeyey baaritaan caafimaad oo lagu hubinayey xaaladdooda guud, laguna dhiirrigelinayey nadaafadda iyo daryeelka caafimaadka.", "/school/students-indoor-3.jpg"],
];

const gallery = [
  ["Macallimiinta", "/school/downloads/forum-teacher.jpeg"],
  ["Macallimiinta", "/school/downloads/forum-teachers.jpeg"],
  ["Xafladaha", "/school/downloads/graduation-guest.jpeg"],
  ["Xafladaha", "/school/downloads/graduation-honoree.jpeg"],
  ["Xafladaha", "/school/downloads/graduate-girl.jpeg"],
  ["Xafladaha", "/school/downloads/graduate-boy.jpeg"],
  ["Xafladaha", "/school/downloads/graduates-audience.jpeg"],
  ["Xafladaha", "/school/downloads/parents-ceremony.jpeg"],
  ["Ardayda", "/school/downloads/students-ceremony.jpeg"],
  ["Fasallada", "/school/downloads/students-classroom-group.jpeg"],
  ["Tartamada", "/school/downloads/sports-award.jpeg"],
  ["Tartamada", "/school/downloads/athletes-medals.jpeg"],
  ["Tartamada", "/school/downloads/sports-team-celebration.jpeg"],
  ["Xafladaha", "/school/downloads/school-event-audience.jpeg"],
  ["Ardayda", "/school/downloads/students-team-outdoor.jpeg"],
  ["Fasallada", "/school/downloads/students-classroom-exam.jpeg"],
  ["Macallimiinta", "/school/downloads/education-forum-attendee-1.jpeg"],
  ["Macallimiinta", "/school/downloads/education-forum-attendee-2.jpeg"],
  ["Macallimiinta", "/school/downloads/education-forum-attendees.jpeg"],
  ["Xafladaha", "/school/downloads/student-award.jpeg"],
  ["Xafladaha", "/school/downloads/girls-awards.jpeg"],
  ["Xafladaha", "/school/downloads/girls-admission-awards.jpeg"],
  ["Ardayda", "/school/downloads/students-somali-flag-girls.jpeg"],
  ["Ardayda", "/school/downloads/students-somali-flag-group.jpeg"],
  ["Ardayda", "/school/downloads/students-somali-flag-blue.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-boys-workshop.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-engineering-team.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-girls-electronics.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-girls-mentoring.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-student-robotics.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-girls-building.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/stem-exhibition.jpeg"],
  ["Xafladaha", "/school/downloads/graduation-class.jpeg"],
  ["Xafladaha", "/school/downloads/graduation-award.jpeg"],
  ["Xafladaha", "/school/downloads/graduate-speaker.jpeg"],
  ["Ardayda", "/school/downloads/graduates-group.jpeg"],
  ["Xafladaha", "/school/downloads/ceremony-speaker.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/technology-launch.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/student-seedlings.jpeg"],
  ["Macallimiinta", "/school/downloads/agreement-signing.jpeg"],
  ["Ardayda", "/school/downloads/student-writing.jpeg"],
  ["Hawlaha Dugsiga", "/school/downloads/computer-lab.jpeg"],
  ["Tartamada", "/school/downloads/track-race.jpeg"],
  ["Tartamada", "/school/downloads/football-certificate.jpeg"],
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
  return <div className={`logo ${light ? "light" : ""}`}><img className="logo-img" src="/care-school-logo.png" alt="CARE School"/><span><b>CARE</b><small>Primary &amp; Secondary School</small></span></div>;
}

function Link({ to, children, className = "", onGo }) {
  return <a href={to} className={className} onClick={(e) => { e.preventDefault(); onGo(to); }}>{children}</a>;
}

function Navbar({ path, go }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="wrap topbar-in"><span>📍 Jidka Afgooye, Wadajir, Muqdisho</span><span>Midowga Dugsiyada Gobolka Banaadir &nbsp; • &nbsp;</span></div></div>
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
  const ref = useRef(null); const [run, setRun] = useState(false); const [values, setValues] = useState([0,0,0,0]);
  useEffect(() => { const o = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: .3 }); if(ref.current)o.observe(ref.current); return () => o.disconnect(); }, []);
  useEffect(() => { if(!run)return; const targets=[2010,350,17,15], start=performance.now(), duration=1800; let frame; const count=(now)=>{const progress=Math.min((now-start)/duration,1); const eased=1-Math.pow(1-progress,3); setValues(targets.map(n=>Math.round(n*eased))); if(progress<1)frame=requestAnimationFrame(count)}; frame=requestAnimationFrame(count); return()=>cancelAnimationFrame(frame)}, [run]);
  const stats=[[values[0],"Sanadkii La Aasaasay",false],[values[1],"Arday Firfircoon",true],[values[2],"Macallimiin",true],[values[3],"Sano oo Khibrad ah",true]];
  return <section className="stats" ref={ref}><div className="wrap stats-grid">{stats.map(([n,l,plus],i)=><div className={`stat ${run ? "seen" : ""}`} style={{"--d":`${i*.1}s`}} key={l}><strong>{n}{plus&&"+"}</strong><span>{l}</span></div>)}</div></section>
}

function Home({ go }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);
  const features = [
    ["✦","Waxbarasho Tayo Leh","Manhaj dhammaystiran iyo hab waxbarid casri ah oo ardayga siiya saldhig aqooneed adag."],
    ["♟","Macallimiin Khibrad Leh","Macallimiin aqoon iyo waayo-aragnimo leh oo arday kasta si dhow u hagaya."],
    ["♡","Tarbiyad Wanaagsan","Waxaan kobcinnaa akhlaaqda, ixtiraamka iyo masuuliyadda ardayga."],
    ["⌂","Deegaan Casri ah","Goob waxbarasho oo ammaan ah, nadiif ah, kuna habboon barashada iyo hal-abuurka."],
    ["↗","Horumarinta Kartida","Arday kasta waxaan ka caawinnaa inuu ogaado oo kobciyo hibadiisa gaarka ah."],
    ["★","Natiijooyin Wanaagsan","Diyaargarow joogto ah iyo dabagal dhow oo horseeda guulo waxbarasho oo muuqda."],
  ];
  return <>
    <section className="hero">{heroSlides.map((image, index)=><div key={image} className={`hero-bg ${slide===index?"active":""}`} style={{backgroundImage:`linear-gradient(90deg,rgba(4,30,65,.82) 0%,rgba(4,30,65,.52) 48%,rgba(4,30,65,.08) 100%),url('${image}')`}}></div>)}<div className="wrap hero-in"><div className="hero-copy"><div className="pill">Tan iyo 2010 • Wadajir, Muqdisho</div><h1>Ku Soo Dhawoow <em>CARE</em> Primary and Secondary School</h1><p>Waxbarasho Tayo Leh, Tarbiyad Wanaagsan iyo Mustaqbal Iftiimaya</p><div className="actions"><Link to="/nagu-saabsan" onGo={go} className="btn gold">Wax Badan Ka Ogow <b>→</b></Link><Link to="/xiriir" onGo={go} className="btn ghost">Nala Soo Xiriir</Link></div></div><div className="hero-note"><span>Jiilka Berri</span><strong>Halkan ayuu ka bilaabmaa.</strong></div><div className="hero-dots" aria-label="Dooro sawirka weyn">{heroSlides.map((_,index)=><button key={index} className={slide===index?"active":""} onClick={()=>setSlide(index)} aria-label={`Sawirka ${index+1}`} aria-current={slide===index?"true":undefined}></button>)}</div></div></section>
    <Stats />
    <section className="section home-reveal"><div className="wrap split"><div className="image-stack"><img src={IMG.about} alt="Ardayda CARE School"/><div className="year"><b>15+</b><span>Sano oo adeeg waxbarasho ah</span></div></div><div><SectionTitle eyebrow="NAGU SAABSAN" title="Aqoonta iyo anshaxa ayaan si wadajir ah u dhisnaa."/><p className="lead">CARE Primary and Secondary School waa dugsi u taagan bixinta waxbarasho tayo leh iyo tarbiyad wanaagsan. Dugsigu wuxuu dadaal weyn geliyaa horumarinta aqoonta, anshaxa iyo kartida ardayda.</p><div className="ticks"><span>✓ Manhaj dhammaystiran</span><span>✓ Daryeel arday oo joogto ah</span><span>✓ Iskaashi waalid iyo dugsi</span><span>✓ Deegaan ammaan ah</span></div><Link to="/nagu-saabsan" onGo={go} className="text-link">Baro sheekadeenna <b>→</b></Link></div></div></section>
    <section className="section soft home-reveal"><div className="wrap"><SectionTitle eyebrow="MAXAA NALOO DOORTAA?" title="Meel uu arday walba ku kobco" text="Waxaan isku darnaa aqoon, tarbiyad iyo daryeel si aan ardayda ugu diyaarinno mustaqbalka."/><div className="feature-grid">{features.map(([i,t,d],x)=><article className="feature" style={{"--delay":`${x*.07}s`}} key={t}><span>{i}</span><div><small>0{x+1}</small><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>
    <section className="section home-reveal"><div className="wrap"><SectionTitle eyebrow="DHACDOOYINKA DUGSIGA" title="Dhacdooyinka Ugu Muhiimsan" text="Daawo hawlaha waxbarasho, munaasabadaha iyo guulaha ardayda CARE."/><CardGrid data={homeEvents} type="event"/><div className="center"><Link to="/dhacdooyinka" onGo={go} className="btn navy">Dhammaan Dhacdooyinka →</Link></div></div></section>
    <Testimonials />
    <CTA go={go}/>
  </>;
}

function About({go}) { const values=[["A","Aqoon","Waxbarasho qoto dheer oo fure u ah horumarka."],["A","Anshax","Akhlaaqda wanaagsan waa udub-dhexaadka bulshada."],["M","Mas'uuliyad","Qof walba wuxuu leeyahay door iyo waajib cad."],["H","Hal-abuur","Fikir cusub iyo xal-abuur ayaan dhiirrigelinnaa."],["I","Iskaashi","Waalid, arday iyo macallin oo isku duuban."],["H","Horumar","Maalin kasta tallaabo cusub oo hore loo qaado."]]; return <><PageHero eyebrow="CARE SCHOOL" title="Nagu Saabsan" text="Sheekada dugsi ku dhisan aqoon, anshax iyo himilo fog."/><section className="section"><div className="wrap split"><div><SectionTitle eyebrow="TAARIIKHDEENNA" title="Safar waxbarasho oo billowday 2010"/><p className="lead">CARE Primary and Secondary School waxaa la aasaasay sanadkii 2010, iyadoo ujeeddadu ahayd in carruurta Soomaaliyeed loo abuuro fursad waxbarasho oo tayo leh, la awoodi karo, kuna salaysan dhaqankeenna wanaagsan.</p><p>Sanadihii la soo dhaafay, dugsigu wuxuu noqday xarun waxbarasho oo lagu kalsoon yahay. Waxaan maalin kasta horumarinaynaa manhajka, xirfadda macallimiinta iyo deegaanka waxbarasho si ardaygu u helo meel uu ku fekero, ku tijaabiyo, kuna guulaysto.</p></div><div className="image-stack"><img src={IMG.primary} alt="Arday wax baranaya"/><div className="year"><b>2010</b><span>Bilowgii safarkeenna</span></div></div></div></section><section className="section navy-block"><div className="wrap mission-grid"><article><span>01</span><h2>Himiladeenna</h2><p>Inaan bixinno waxbarasho tayo sare leh oo dhisaysa aqoonta, akhlaaqda, kalsoonida iyo kartida arday kasta.</p></article><article><span>02</span><h2>Aragtideenna</h2><p>Inaan noqonno dugsi hormuud u ah tayada waxbarashada Soomaaliya, soona saara jiil mas'uul ah oo hal-abuur leh.</p></article></div></section><section className="section soft"><div className="wrap"><SectionTitle eyebrow="WAXAAN AAMINSANAHAY" title="Qiimaha nagu hagaya"/><div className="value-grid">{values.map(([l,t,d])=><article><span>{l}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section><CTA go={go}/></> }

function Academics({go}) { const subjects=[["∑","Xisaab"],["S","Af-Soomaali"],["E","Af-Ingiriisi"],["ع","Af-Carabi"],["⚗","Saynis"],["◎","Cilmiga Bulshada"],["☾","Diinta Islaamka"],["⌘","Kombiyuutar"]]; return <><PageHero eyebrow="BARNAAMIJYADA" title="Waxbarashada" text="Manhaj dhammaystiran oo ardayda u diyaariya nolosha, jaamacadda iyo mustaqbalka."/><section className="section"><div className="wrap academic-grid"><article className="academic-card"><img src={IMG.primary} alt="Waxbarashada hoose"/><div><small>FASALLADA 1–8</small><h2>Dugsiga Hoose & Dhexe</h2><p>Waxaan dhisnaa aasaas adag oo akhris, qoraal, xisaab iyo faham ah; iyadoo ciyaar, su'aalo iyo hawlo wadajir ahi ka dhigayaan waxbarashada mid xiiso leh.</p><ul><li>Aasaas aqooneed oo adag</li><li>Tarbiyad iyo anshax</li><li>Kormeerka horumarka ardayga</li></ul></div></article><article className="academic-card"><img src={IMG.secondary} alt="Waxbarashada sare"/><div><small>FASALLADA 9–12</small><h2>Dugsiga Sare</h2><p>Ardayda waxaan siinnaa aqoon qoto dheer, xirfado fikir iyo diyaargarow imtixaan oo u sahlaya jaamacad iyo nolol shaqo oo guul leh.</p><ul><li>Diyaargarow imtixaan qaran</li><li>Hagid waxbarasho iyo xirfadeed</li><li>Shaybaar iyo tiknoolajiyad</li></ul></div></article></div></section><section className="section soft"><div className="wrap"><SectionTitle eyebrow="MAADOOYINKA" title="Aqoon ballaaran, xirfado waara" text="Maaddo kasta waxaa dhigaya macallimiin khibrad leh, iyadoo casharradu isku daraan aragti iyo ku-dhaqan."/><div className="subjects">{subjects.map(([i,s])=><div><span>{i}</span><b>{s}</b></div>)}</div></div></section><CTA go={go}/></> }

function Teachers() { return <><PageHero eyebrow="KOOXDEENNA" title="Macallimiinta" text="Baro dadka aqoonta, daryeelka iyo dhiirrigelinta maalin kasta la garab taagan ardaydeenna."/><section className="section leadership-section"><div className="wrap"><div className="leadership"><div className="leadership-photo"><img src="/teachers/mohamed-omar.jpeg" alt="Mohamed Omar, maamulka CARE School"/><span>MAAMULKA DUGSIGA</span></div><div className="leadership-message"><span className="quote-mark">“</span><SectionTitle eyebrow="FARIINTA MAAMULKA" title="Waxbarashadu waa saldhigga mustaqbal ifaya"/><p className="lead">Ku soo dhowaada CARE Primary and Secondary School. Waxaan aaminsanahay in arday kasta uu leeyahay karti u gaar ah oo u baahan hagid, dhiirrigelin iyo deegaan waxbarasho oo ammaan ah.</p><p>Hadafkeennu waa inaan dhisno jiil aqoon leh, anshax wanaagsan leh, kuna kalsoon awooddiisa. Waxaan si dhow ula shaqaynaa macallimiinta, waalidiinta iyo ardayda si aan u xaqiijinno waxbarasho tayo leh iyo horumar joogto ah.</p><div className="leadership-signature"><b>Mohamed Omar</b><small>Maamulka CARE School</small></div></div></div><div className="admin-team"><article className="admin-card"><img src="/administration/aweys-abshir-cabdi.png" alt="Aweys Abshir Cabdi, Admin and Finance"/><div><small>ADMIN AND FINANCE</small><h3>Aweys Abshir Cabdi</h3></div></article><article className="admin-card"><img src="/administration/abuukar-maxamed-xasan.jpeg" alt="Abuukar Maxamed Xasan, President of School"/><div><small>PRESIDENT OF SCHOOL</small><h3>Abuukar Maxamed Xasan</h3></div></article></div></div></section><section className="section soft"><div className="wrap"><SectionTitle eyebrow="MACALLIMIINTA CARE" title="Khubaro qalbi waxbarid leh" text="Macallin kasta wuxuu ardayda ku hagaa aqoon, anshax iyo karti ay mustaqbalkooda ku dhistaan."/><div className="teacher-grid">{teachers.map(([n,r,img])=><article className="teacher" key={n}><div className="teacher-img"><img src={img} alt={`${n}, ${r}`}/></div><small>{r==="Xisaabiye"?"XISAABIYE":`MACALLINKA ${r}`}</small><h3>{n}</h3></article>)}</div></div></section></> }

function CardGrid({data,type}) { return <div className="card-grid">{data.map(([t,d,x,img])=><article className="content-card" key={t}><div className="card-img"><img src={img} alt={t}/><span>{type === "news" ? "WAR CUSUB" : d.split(" ")[0]}</span></div><div className="card-body"><small>◷ {d}</small><h3>{t}</h3><p>{x}</p><button>{type === "news" ? "Akhri wax dheeraad ah" : "Faahfaahin"} <b>→</b></button></div></article>)}</div> }
function Events(){return <><PageHero eyebrow="JADWALKA DUGSIGA" title="Dhacdooyinka Dugsiga" text="La soco munaasabadaha, tartamada iyo kulamada muhiimka ah ee bulshadeenna waxbarasho."/><section className="section"><div className="wrap"><CardGrid data={events} type="event"/></div></section></>}

function GalleryPage(){const [filter,setFilter]=useState("Dhammaan"); const [modal,setModal]=useState(null); const cats=["Dhammaan","Ardayda","Macallimiinta","Xafladaha","Fasallada","Tartamada","Hawlaha Dugsiga"]; const shown=filter==="Dhammaan"?gallery:gallery.filter(x=>x[0]===filter); useEffect(()=>{const f=e=>e.key==="Escape"&&setModal(null);addEventListener("keydown",f);return()=>removeEventListener("keydown",f)},[]);return <><PageHero eyebrow="XUSUUSAHEENNA" title="Sawirrada Dugsiga" text="Muuqaallo ka tarjumaya waxbarashada, farxadda iyo wadajirka CARE School."/><section className="section"><div className="wrap"><div className="filters">{cats.map(c=><button className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="gallery-grid">{shown.map(([c,img],i)=><button onClick={()=>setModal([c,img])} className={`gallery-item g${i%5}`}><img src={img} alt={c}/><span><b>{c}</b><i>+ Daawo</i></span></button>)}</div></div></section>{modal&&<div className="lightbox" onClick={()=>setModal(null)} role="dialog" aria-modal="true"><button aria-label="Xir">×</button><img src={modal[1]} alt={modal[0]}/><span>{modal[0]}</span></div>}</>}

function News(){return <><PageHero eyebrow="WARGELINTA" title="Wararkii Ugu Dambeeyay" text="Akhri guulaha ardayda, horumarka dugsiga iyo wararka cusub ee CARE School."/><section className="section"><div className="wrap"><CardGrid data={[...news,...events.slice(0,3)]} type="news"/></div></section></>}

function Testimonials(){return <section className="section testimonials"><div className="wrap"><SectionTitle eyebrow="BULSHADEENNA" title="Waxay Naga Yiraahdeen" light/><div className="quote-grid">{[["Hodan Warsame","Waalid","Dugsigu ma bixiyo aqoon keliya; waxaan si cad uga arkaa ilmahayga kalsooni iyo akhlaaq wanaagsan."],["xuseen maxamed ","Arday","Macallimiintu waxay naga dhigaan inaan su'aalo weydiinno, fikradno oo aan rumaysanno kartideenna."],["cabdinajiib xirsi","Arday Hore","Aasaaskii aan CARE ka helay ayaa ii fududeeyey jaamacadda. Weli waxaan dareemaa inaan qoyska dugsiga ka tirsanahay."]].map(([n,r,q])=><blockquote><span>“</span><p>{q}</p><footer><b>{n}</b><small>{r}</small></footer></blockquote>)}</div></div></section>}

function Contact(){function submit(e){e.preventDefault();if(!e.currentTarget.reportValidity())return;const data=new FormData(e.currentTarget);const message=`Fariin cusub oo ka timid website-ka CARE School\n\nMagaca: ${data.get("name")}\nTelefoonka: ${data.get("phone")}\nIimaylka: ${data.get("email")}\nMawduuca: ${data.get("subject")}\n\nFariinta:\n${data.get("message")}`;window.open(`https://wa.me/252616460649?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");}return <><PageHero eyebrow="WADA HADAL" title="Nala Soo Xiriir" text="Su'aal ma qabtaa? Kooxdayadu waxay diyaar u tahay inay ku caawiso."/><section className="section"><div className="wrap contact-grid"><div><SectionTitle eyebrow="XOGTA XIRIIRKA" title="Waxaan jeclaan lahayn inaan kaa maqalno."/><p className="lead">Nagu soo booqo Jidka Afgooye, Wadajir ama naga soo wac lambarka dugsiga. Waxaan ku siin doonnaa macluumaadka diiwaangelinta iyo waxbarashada.</p><div className="contact-list"><div><span>📍</span><p><b>Goobta</b>27PW+HJG, Jidka Afgooye, Wadajir, Muqdisho</p></div><div><span>☎</span><p><b>Telefoonka</b>0616460649</p></div><div><span>⌂</span><p><b>Ururka Waxbarashada</b>Midowga Dugsiyada Gobolka Banaadir</p></div></div></div><form onSubmit={submit}><div className="form-head"><span>FARIIN NOO SOO DIR</span><h2>Sideen kuu caawin karnaa?</h2></div><div className="form-row"><label>Magaca<input required name="name" placeholder="Magaca oo buuxa"/></label><label>Telefoonka<input required name="phone" type="tel" placeholder="0616460649"/></label></div><label>Iimaylka<input required name="email" type="email" placeholder="magac@tusaale.com"/></label><label>Mawduuca<input required name="subject" placeholder="Maxay fariintu ku saabsan tahay?"/></label><label>Fariinta<textarea required name="message" rows="5" placeholder="Halkan ku qor fariintaada..."></textarea></label><button className="btn gold" type="submit">WhatsApp ku Dir →</button></form></div></section><section className="map"><div><span>📍</span><b>CARE Primary and Secondary School</b><small>Jidka Afgooye, Wadajir, Muqdisho</small></div></section></>}

function CTA({go}){return <section className="cta"><div className="wrap cta-in"><div><span>DIWAANGELINTA WAY FURAN TAHAY</span><h2>Ma Doonaysaa Inaad Ilmahaaga Ka Mid Dhigto CARE School?</h2></div><Link to="/xiriir" onGo={go} className="btn white">Nala Soo Xiriir <b>→</b></Link></div></section>}

function Footer({go}){return <footer className="footer"><section className="oversight"><div className="wrap"><span>DUGSIGU WUXUU HOOS TAGAA</span><h2>Hay’adaha Waxbarashada</h2><div className="oversight-grid"><article><img src="/partners/wasaaradda-waxbarashada.jpg" alt="Astaanta Wasaaradda Waxbarashada, Hiddaha iyo Tacliinta Sare"/><b>Wasaaradda Waxbarashada, Hiddaha iyo Tacliinta Sare</b></article><article><img src="/partners/agaasinka-waxbarashada-banaadir.jpg" alt="Astaanta Agaasinka Waxbarashada Gobolka Banaadir"/><b>Agaasinka Waxbarashada Gobolka Banaadir</b></article><article><img src="/partners/midowga-dugsiyada-banaadir.png" alt="Astaanta Midowga Dugsiyada Gobolka Banaadir"/><b>Midowga Dugsiyada Gobolka Banaadir</b></article></div></div></section><div className="wrap footer-grid"><div><Logo light/><p>Waxaan dhisnaa jiil aqoon leh, anshax leh, una diyaarsan inuu bulshada wax ku biiriyo.</p><div className="footer-social"><a href="https://www.facebook.com/CarePrimaryAndSecondarySchool" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">f</a><a href="https://www.tiktok.com/@care_school?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">♪</a><a href="https://www.youtube.com/@careprimaryandsecondaryschool" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">▶</a></div></div><div><h3>Xiriirro Degdeg ah</h3>{nav.slice(0,4).map(([t,l])=><Link to={t} onGo={go}>{l}</Link>)}</div><div><h3>Waxbarashada</h3><Link to="/waxbarashada" onGo={go}>Dugsiga Hoose</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Dhexe</Link><Link to="/waxbarashada" onGo={go}>Dugsiga Sare</Link><Link to="/dhacdooyinka" onGo={go}>Dhacdooyinka</Link></div><div><h3>Nala Soo Xiriir</h3><p>📍 Jidka Afgooye, Wadajir, Muqdisho</p><p>☎ 0616460649</p><p>⌂ Midowga Dugsiyada Gobolka Banaadir</p></div></div><div className="copyright"><div className="wrap">© 2026 CARE Primary and Secondary School. Xuquuqda oo dhan way dhowran tahay.<span>Sawirrada waxbarashada: CARE Soomaaliya</span></div></div></footer>}

export default function App(){const [path,setPath]=useState("/"); const [top,setTop]=useState(false); useEffect(()=>{setPath(location.pathname); const pop=()=>setPath(location.pathname); const scroll=()=>setTop(scrollY>500); addEventListener("popstate",pop);addEventListener("scroll",scroll);return()=>{removeEventListener("popstate",pop);removeEventListener("scroll",scroll)}},[]); function go(to){history.pushState({},"",to);setPath(to);scrollTo({top:0,behavior:"smooth"})} const page=useMemo(()=>({"/":<Home go={go}/>,"/nagu-saabsan":<About go={go}/>,"/waxbarashada":<Academics go={go}/>,"/macallimiinta":<Teachers/>,"/dhacdooyinka":<Events/>,"/gallery":<GalleryPage/>,"/wararka":<News/>,"/xiriir":<Contact/>})[path]||<Home go={go}/>,[path]);return <><Navbar path={path} go={go}/><main key={path}>{page}</main><Footer go={go}/><a className="whatsapp" href="https://wa.me/252616460649" target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3A13 13 0 0 0 4.7 22.4L3 29l6.8-1.8A13 13 0 1 0 16 3Zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-4 1 1.1-3.8-.3-.4a10.7 10.7 0 1 1 9 4.9Zm5.9-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.4-3.9c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.7-.3Z"/></svg><span>Nala hadal WhatsApp</span></a>{top&&<button className="to-top" onClick={()=>scrollTo({top:0,behavior:"smooth"})} aria-label="Kor ugu noqo">↑</button>}</>}

