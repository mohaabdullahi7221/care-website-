import "./globals.css";

export const metadata = {
  title: "CARE Primary and Secondary School | Muqdisho",
  description: "Waxbarasho tayo leh, tarbiyad wanaagsan iyo mustaqbal iftiimaya � CARE School, Wadajir, Muqdisho.",
  icons: { icon: "/images/care-school-logo.png", shortcut: "/images/care-school-logo.png" },
  openGraph: {
    title: "CARE Primary and Secondary School",
    description: "Aqoon. Anshax. Mustaqbal.",
    images: [{ url: "/images/care-school-logo.png", width: 1024, height: 1024 }],
  },
  twitter: { card: "summary", images: ["/images/care-school-logo.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="so" className="scroll-smooth">
      <body className="bg-white font-sans text-care-text antialiased">
        {children}
      </body>
    </html>
  );
}
