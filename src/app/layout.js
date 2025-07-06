import { Geist, Geist_Mono ,Cairo} from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "./_Component/Navbar/page";
import Sidbar from "./_Component/Sidbar/page";
import Footer from "./_Component/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Telawa",
  description: "quran kareem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar/>
        
       <div className="grid grid-cols-12 gap-1 mt-20">
        <div className="md:col-span-3 bg-[rgb(18,18,18)] rounded">
           <Sidbar  />
        </div>
        <div className="md:col-span-9 col-span-12 p-2 min-h-screen  bg-black rounded  relative ">
          <div className="mb-[300px]">
            <StoreProvider>{children}</StoreProvider>
          </div>
          <Footer/>
        </div>
       </div>
      </body>
    </html>
  );
}
