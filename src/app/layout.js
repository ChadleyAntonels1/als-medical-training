import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/UntitledCA LOGO (1).png " />
      </head>

      <body className={inter.className}>
        <div className="w-full h-max bg-black text-white">
          <div className="h-20 ">
          <Navbar />
          </div>
          <div className="w-[calc{100vh-6rem}]  ">
          {children}
          
          </div>
          <div >
          <Footer/>
          </div>
      </div>
      </body>
    </html>
  );
}
