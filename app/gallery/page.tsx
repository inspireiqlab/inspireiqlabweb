import Image from 'next/image';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white mx-auto max-w-7xl py-12 px-4 lg:px-8">
      <h1 className="text-5xl font-bold text-green-700 mb-6">Gallery</h1>
      <p className="text-base text-gray-700 mb-4 text-justify">
        At InspireIQ Lab, our mission is simple: <strong>help children become thoughtful creators of the future</strong>.
      </p>
      <p className="text-base text-gray-700 mb-4 text-justify">
        We imagine a world where every child, regardless of background, can experiment with robotics and AI, where learning is joyful, and innovation grows from simplicity and sustainability.
      </p>
      <p className="text-base text-gray-700 text-justify">
        We’re not here to rush childhood — we’re here to <strong>enrich it</strong> with curiosity, creativity, and compassion.
      </p>

      <section className='grid mt-6 md:grid-cols-2 w-full border border-black rounded-3xl mb-12'>
        <div className='p-10'>
          <h1 className="text-4xl font-bold mb-4">The Big Picture</h1>
          <p className="text-base text-gray-700 mb-4">
            We envision a future where children don’t just consume technology—they build it.<br /><br />
            A world where classrooms extend beyond walls, and learning is driven by curiosity, experimentation, and purposeful play.<br /><br />
            At InspireIQ Lab, we’re creating a system that empowers kids to become confident explorers of science, AI, robotics, and innovation.<br /><br />
            Not someday—<b>today</b>.
          </p>
        </div>
        <div className='p-10 flex items-center justify-center'>
          <Image
            src="/assets/our-vision/pexels-cottonbro-3662667.jpg"
            alt="kids are playing with legos"
            className='object-cover w-full h-full rounded-2xl'
            width={500} height={0} />
        </div>
      </section>

    </div>

  )
}

export default GalleryPage