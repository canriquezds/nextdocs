import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import News from "./components/news";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fulcrum Documentation News",
  description: "Share what is good..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div>
            <Sidebar />
          </div>
          <div>
            {children}
          </div>
          <div>
            <News/>
          </div>
        </div>
      </body>
    </html>
  );
}
