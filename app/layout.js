import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata = {
  title: "Simeon Mwangi — Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Simeon Mwangi, a full-stack developer and software engineer in Nairobi, Kenya. 25+ shipped projects with React.js, Next.js, Django and React Native.",
  keywords:
    "Simeon Mwangi, full-stack developer Kenya, software engineer Nairobi, React developer, Django developer, backend developer, Next.js, hire developer Kenya",
  openGraph: {
    title: "Simeon Mwangi — Full-Stack Developer & Software Engineer",
    description:
      "25+ shipped projects across fintech, e-commerce, hospitality and more. React.js · Next.js · Django · React Native.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
