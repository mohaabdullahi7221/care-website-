"use client";

import { Navbar, Footer } from "./components/SiteComponents";
import { useSiteNavigation } from "./hooks/useSiteNavigation";
import { About, Academics, Contact, Events, GalleryPage, Home, News, Teachers } from "./pages/SitePages";

export default function App() {
  const { path, go, showToTop } = useSiteNavigation();
  const pages = {
    "/": <Home go={go} />,
    "/nagu-saabsan": <About go={go} />,
    "/waxbarashada": <Academics go={go} />,
    "/macallimiinta": <Teachers />,
    "/dhacdooyinka": <Events />,
    "/gallery": <GalleryPage />,
    "/wararka": <News />,
    "/xiriir": <Contact />,
  };
  const page = pages[path] ?? <Home go={go} />;

  return (
    <>
      <Navbar path={path} go={go} />
      <main key={path}>{page}</main>
      <Footer go={go} />
      <a className="whatsapp" href="https://wa.me/252616460649" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3A13 13 0 0 0 4.7 22.4L3 29l6.8-1.8A13 13 0 1 0 16 3Zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-4 1 1.1-3.8-.3-.4a10.7 10.7 0 1 1 9 4.9Zm5.9-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.4-3.9c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.7-.3Z" /></svg>
        <span>Nala hadal WhatsApp</span>
      </a>
      {showToTop && <button className="to-top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Kor ugu noqo">↑</button>}
    </>
  );
}
