import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}