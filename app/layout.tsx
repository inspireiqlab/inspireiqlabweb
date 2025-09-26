import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import type { Viewport } from 'next';
import StickyNotice from './components/StickyNotice';
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};


export const metadata = {
  title: 'InspireIQ Lab | STEM, Robotics & AI for Kids – Through Play & Discovery',
  description: 'InspireIQ Lab introduces children to the future of learning with AI, Robotics, and STEM—through play, imagination, and hands-on exploration. Designed for curious minds. Backed by NEP 2020.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const noticeVisible = false;
  return (
    <html lang="en">
      <body>
        {noticeVisible && <StickyNotice/>}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
