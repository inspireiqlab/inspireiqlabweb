import Banner from './components/Banner/index';
import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import Mentor from './components/Mentor';
import DownMotion from './components/MotionWrapper/DownMotion';
import FAQSection from './components/FAQ';
import Link from 'next/link';
import ATLLabSection from './components/ATLLab';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <AboutUs/>
      <ATLLabSection/>
      <Mentor/>
      <CTA/>
      <FAQSection/>
      <div className='flex items-center justify-center'>
        <Link href="/contact-us" rel="noopener noreferrer">
              <button type="submit" className="text-white p-3 px-10 py-6 focus:outline-none focus:shadow-outline bg-Blueviolet hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                  Contact Us
              </button>
        </Link>
      </div>
    </main>
  )
}
