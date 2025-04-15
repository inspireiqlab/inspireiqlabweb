import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'InspireIQ Lab | STEM, Robotics & AI Learning for Kids in India',
  description: 'Ignite young minds with InspireIQ Lab—India’s premier STEM, Robotics & AI learning center for kids. Hands-on, NEP 2020-aligned education through play and discovery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
