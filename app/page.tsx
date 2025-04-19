import Banner from './components/Banner/index';
import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import Mentor from './components/Mentor';
import DownMotion from './components/MotionWrapper/DownMotion';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <AboutUs/>
      <Mentor/>
      <CTA/>
    </main>
  )
}
