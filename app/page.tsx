import Banner from './components/Banner/index';
import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import Mentor from './components/Mentor';


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
