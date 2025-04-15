import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid gap-4 grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</h3>
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Igniting Young Minds Through Playful STEM, Robotics & AI Learning</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Where Curiosity Grows into Creation—Inspiring Tomorrow's Innovators Today</h3>

                        {/* <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
                            <input type="Email address" name="q" className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black" placeholder="search courses..." autoComplete="off" /> */}
                            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                                <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                    <Image src={'/assets/banner/search.svg'} alt="inputicon" width={30} height={30} />
                                </button>
                                
                            </div> */}
                        {/* </div> */}
                            <button type="submit" className="w-48 p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                <h1 className='text-xl text-white'>Enroll Now</h1>
                            </button>

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

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/banner1.jpeg" alt="nothing" className='rounded-lg'  width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
