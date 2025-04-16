import Image from 'next/image';
import Carrousels from './Carrousels';

const Banner = () => {

    return (
        <section id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-6 lg:pt-20 sm:pb-24 px-6">

                <div className='grid gap-4 grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly gap-4'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Igniting Young Minds Through Playful STEM, Robotics & AI Learning</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Where Curiosity Grows into Creation—Inspiring Tomorrow&apos;s Innovators Today</h3>
                            
                        {/* Enroll Now Button CTA Button  */}
                        <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-Blueviolet hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                            <h1 className='text-base text-white'>Share Your Thoughts & Pre-Enroll</h1>
                        </button>
                        <div className='flex justify-center gap-2 mx-auto lg:mx-0'>
                            <h3 className='text-slategray text-sm font-semibold text-center lg:text-start'>🚀 Lab Opening in August 2025</h3>
                        </div>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[260px] md:h-[400px] col-span-6 flex justify-center mb-6'>
                        <Carrousels/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
