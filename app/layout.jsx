import "./globals.css";

export const metadata = {
  title: "CARE Primary and Secondary School | Muqdisho",
  description: "Waxbarasho tayo leh, tarbiyad wanaagsan iyo mustaqbal iftiimaya — CARE School, Wadajir, Muqdisho.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "CARE Primary and Secondary School",
    description: "Aqoon. Anshax. Mustaqbal.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }) {
  return <html lang="so"><body>{children}</body></html>;
}
