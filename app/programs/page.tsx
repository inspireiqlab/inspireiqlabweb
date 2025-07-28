import Image from "next/image";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Programs</h1>

      <div className="space-y-12">
        {/* Early Learners */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-green-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2"> Little Explorers (Ages 3–6)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> Develop curiosity, problem-solving skills, and basic computational thinking.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tools:</strong> LEGO Duplo, Bee-Bot, Cubetto, Scratch Jr., Tangible Coding Blocks
            </p>
            <p className="text-gray-700 mb-2"><strong>Topics & Activities:</strong></p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>STEM Foundations: Exploring shapes, colors, numbers; simple physics experiments; building basic structures with LEGO.</li>
              <li>Introduction to Robotics: Understanding how robots work; controlling simple robots; hands-on activities with robotic toys.</li>
              <li>Basic Coding Concepts: Drag-and-drop coding; storytelling with coding; fun unplugged coding activities.</li>
              <li>AI Awareness: Talking about smart devices; simple pattern recognition games; AI-based storytelling with interactive books.</li>
            </ul>
            <a className="my-2 underline" href="https://wa.me/919051155395" target="_blank">Want to know more? Contact Us at 9051155395</a>
          </div>
          <div>
            <Image className="w-full" src="/assets/programs/programs3-6.webp" alt="Kids playing with legos" objectFit="cover" width={500} height={0}/>
          </div>
        </div>

        {/* Junior Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-green-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Bright Builders (Ages 7–10)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> Build logical thinking, introduce hands-on robotics, and develop basic programming skills.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tools:</strong> LEGO WeDo, Dash & Dot, Scratch, Makey Makey, Tinkercad, Micro:bit
            </p>
            <p className="text-gray-700 mb-2"><strong>Topics & Activities:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>STEM & Engineering Basics: Introduction to simple machines; electricity and circuits; fun physics experiments.</li>
              <li>Robotics Fundamentals: Assembling and programming simple robots; motion and sensors; basic automation projects.</li>
              <li>Coding & Game Development: Drag-and-drop programming with Scratch; creating animations & interactive games; introduction to loops, conditions, and variables.</li>
              <li>AI & Machine Learning Basics: Understanding AI through play; smart devices and how they learn; AI-powered storytelling.</li>
            </ul>
          </div>
          <div>
            <Image className="w-full h-full" src="/assets/programs/programs7-10l.webp" alt="Kids playing with legos" objectFit="cover" width={500} height={0}/>
          </div>
        </div>

        {/* Middle Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-green-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Curious Innovators (Ages 11–13)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> Apply programming, build intelligent robots, and introduce AI concepts.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tools:</strong> LEGO Mindstorms, Arduino, Python, Raspberry Pi, VEX Robotics
            </p>
            <p className="text-gray-700 mb-2"><strong>Topics & Activities:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Advanced Robotics: Assembling complex robots; programming robots with sensors; designing and 3D printing robot parts.</li>
              <li>Coding with Python & JavaScript: Writing simple Python programs; game development using Pygame; web-based AI applications with JavaScript.</li>
              <li>Machine Learning & AI for Beginners: Understanding neural networks; AI-powered image and voice recognition projects; introduction to chatbots.</li>
              <li>IoT & Automation: Smart home automation projects; weather station with sensors; IoT-based security system.</li>
              <li>Competitions & Challenges: Participating in STEM Olympiads, robotics challenges, and hackathons; problem-solving with real-world applications.</li>
            </ul>
          </div>
          <div>
            <Image className="w-full h-full" src="/assets/programs/programs11-13.webp" alt="Kids playing with legos" objectFit="cover" width={500} height={0}/>
          </div>
        </div>

        {/* Advanced Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-green-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Future Pioneers (Ages 14–18)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> Build industry-level projects, work on real-world AI applications, and develop innovation skills.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tools:</strong> Raspberry Pi, TensorFlow, Arduino, Python, Fusion 360, VEX Robotics
            </p>
            <p className="text-gray-700 mb-2"><strong>Topics & Activities:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Advanced Robotics & Engineering: Building complex robots; integrating multiple sensors; designing custom robotic parts.</li>
              <li>AI & Machine Learning Projects: Developing AI models using TensorFlow; working on real-world AI applications; understanding deep learning concepts.</li>
              <li>IoT & Smart Systems: Creating IoT-based projects; implementing smart home systems; exploring cloud computing for IoT.</li>
              <li>Innovation & Entrepreneurship: Designing and prototyping innovative solutions; understanding product development lifecycle; pitching ideas and projects.</li>
            </ul>
          </div>
          <div>
            <Image className="w-full h-full" src="/assets/programs/program14-18l.webp" alt="Kids playing with legos" objectFit="cover" width={500} height={0}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsPage