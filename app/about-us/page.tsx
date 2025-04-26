import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl py-12 px-4 lg:px-8">
      <h1 className="text-5xl font-bold text-green-700 mb-6">About Us</h1>
      <p className="text-base text-gray-700 mb-4 text-justify">
        At InspireIQ Lab, we believe that curiosity is the spark that powers a child’s brightest ideas. We&apos;re building a hands-on education space where children explore <strong>STEM, Robotics, AI, and IoT</strong> through joyful play and creative problem-solving.
      </p>
      <p className="text-base text-gray-700 mb-4 text-justify">
        InspireIQ Lab is not a course-selling platform — it’s an <strong>interactive learning ecosystem</strong>. Our programs nurture inventiveness, collaboration, and critical thinking.
      </p>
      <p className="text-base text-gray-700 text-justify">
        Whether it’s building a robot, designing a simple AI model, or experimenting with sensors, kids get to <strong>play with the future</strong> — guided by mentors who care more about how children think than what they memorize.
      </p>
      
      <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl mb-12'>
        <div className='p-10'>
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-base text-gray-700 mb-4">
          At InspireIQ Lab, we believe learning should be joyful, curious, and deeply meaningful. Our journey began with a simple idea — what if children could explore science, robotics, and future technologies not through textbooks, but through play? <br/><br/>
          Born from the vision of educators, engineers, and parents, InspireIQ Lab is not a course—it’s a living, breathing education ecosystem. A space where kids of all ages can experiment, build, and bring their ideas to life.<br/><br/>
          We are building labs where imagination meets innovation—and the spark of curiosity is just the beginning.
          </p>
        </div>
        <div className='p-10 flex items-center justify-center'>
          <Image 
            src="/assets/about-us/pexels-vanessa-loring-7868892.jpg" 
            alt="kids building a toy robot car"
            className='object-cover w-full h-full rounded-2xl'
            width={500} height={0} />
        </div>
      </section>

      <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl mb-12'>
        <div className='p-10 flex items-center justify-center'>
          <Image 
            src="/assets/about-us/dai-Qe14AI31ngE-unsplash.jpg" 
            alt="a kid showing a led display circuit"
            className='object-cover w-full h-full rounded-2xl'
            width={500} height={0} />
        </div>
        <div className='p-10'>
          <h1 className="text-4xl font-bold mb-4">Education Philosophy</h1>
          <p className="text-base text-gray-700 mb-4">
            Children learn best when they do. At InspireIQ Lab, our learning philosophy centers around experience-first education—where play, discovery, and real-world building are the foundation.<br/><br/>
            We focus on hands-on engagement with tools of the future—like robotics kits, AI-driven challenges, and IoT devices—because the world children will step into is changing fast. Our role is not just to prepare them, but to help them shape that world.<br/><br/>
            We don’t teach to test. We guide to explore.
          </p>
        </div>
      </section>

      <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl'>
        <div className='p-10'>
          <h1 className="text-4xl font-bold mb-4">Built by Innovators</h1>
          <p className="text-base text-gray-700 mb-4">
          InspireIQ Lab is founded by thinkers and makers—engineers, educators, and passionate creators—who care deeply about shaping a more meaningful education experience for the next generation.<br/><br/>
          We’re parents too. We’ve seen the gaps in the traditional system, and we’ve designed InspireIQ Lab to go beyond it—to let children create, collaborate, and think like real-world problem solvers from a young age.
          </p>
        </div>
        <div className='p-10 flex items-center justify-center'>
          <Image 
            src="/assets/about-us/pexels-vladimirsrajber-17260648.jpg" 
            alt="students are building robots and showing it"
            className='object-cover w-full h-full rounded-2xl'
            width={500} height={0} />
        </div>
      </section>

    </div>
  )
}

export default page