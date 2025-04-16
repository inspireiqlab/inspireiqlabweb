// import { FaRobot, FaMicroscope, FaLightbulb } from "react-icons/fa";
// import { LightBulbIcon } from "@heroicons/react/24/solid";

const index = () => {
  return (
    <section id="about">
      <div className='mx-auto max-w-7xl py-8 px-4 lg:px-8 '>
          <div className="flex flex-col sm:flex mb-6">
              <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">About InspireIQ Lab</h3>
              <p>
              As per the NEP 2020, early exposure to STEM, Robotics, and AI is crucial to preparing children for the future. At InspireIQ Lab, we believe every child is born an innovator—they just need the right environment.
              Our playful lab is packed with child-safe robots, coding puzzles, and hands-on science experiments. We don’t just teach—we spark imagination.
              </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-6">
          
          <div>
            {/* <LightBulbIcon className="mx-auto text-yellow-500 mb-4" width={40} /> */}
            <h3 className="text-xl font-semibold mb-2">Play-Based Learning</h3>
            <p>Kids explore STEM by tinkering, building, and experimenting hands-on.</p>
          </div>
          <div>
            {/* <FaRobot className="text-5xl mx-auto text-purple-500 mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">AI & Robotics</h3>
            <p>From age 3 to 18, every child gets a taste of the future—today.</p>
          </div>
          <div>
            {/* <FaMicroscope className="text-5xl mx-auto text-green-500 mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Aligned with NEP 2020</h3>
            <p>A learning system, not a course—designed around the new education vision.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default index