'use client';
import { useState, useEffect } from 'react';

// Import Swiper Core and required modules
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// Data

interface PhotoData {
  id: number,
  src: string[],
  alt: string,
  title: string,
  description: string
};

const photosData = [
  {
    id: 1,
    src: [
      // 'https://placehold.co/600x400/313D5A/FFFFFF?text=Robotics+Club',
      '/assets/gallery/Robotics_Age-7 to 11/img1.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img2.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img3.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img4.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img5.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img6.webp',
      '/assets/gallery/Robotics_Age-7 to 11/img7.jpg',
      '/assets/gallery/Robotics_Age-7 to 11/img8.jpg',
      '/assets/gallery/Robotics_Age-7 to 11/img9.jpg',
      '/assets/gallery/Robotics_Age-7 to 11/img10.jpg',
      '/assets/gallery/Robotics_Age-7 to 11/img11.jpg',
      '/assets/gallery/Robotics_Age-7 to 11/img12.jpg',
    ],
    alt: 'Students building a robot',
    title: 'Hands-On Robotics for Young Innovators',
    description: 'Kids from Class 4–7 not only build robotic cars and models but also develop logical thinking, problem-solving skills, and teamwork—qualities every parent values for their child’s growth.'
  },
  {
    id: 2,
    src: [
      // 'https://placehold.co/600x400/5A314B/FFFFFF?text=STEM+3+to+6',
      '/assets/gallery/STEM_Age-3 to 6/img1.jpg',
      '/assets/gallery/STEM_Age-3 to 6/img2.jpg',
      '/assets/gallery/STEM_Age-3 to 6/img3.jpg',
    ],
    alt: 'Children making crafts',
    title: 'Small Hands, Big Ideas',
    description: 'Kids in UKG to Class 2 enjoy building with magnetic toys while strengthening problem-solving, imagination, and spatial awareness.'
  },
  {
    id: 3,
    src: [
      // 'https://placehold.co/600x400/315A4C/FFFFFF?text=STEM+8+to+11',
      '/assets/gallery/Coding-computer/img1.jpg',
      '/assets/gallery/Coding-computer/img2.jpg',
      '/assets/gallery/Coding-computer/img3.jpg',
    ],
    alt: 'Student coding on a laptop for an AI project',
    title: 'Coding',
    description: 'Students get their first taste of AI. Here, they are using generative AI to ask questions. It\'s a great introduction to the concepts that power the future of technology.'
  },
  {
    id: 4,
    src: [
      // 'https://placehold.co/600x400/5A4B31/FFFFFF?text=3D+Pen',
      '/assets/gallery/3D-Pen-fun/img1.jpg',
      '/assets/gallery/3D-Pen-fun/img2.jpg',
    ],
    alt: 'Students are learning to use 3d-pens',
    title: '3D Pen Fun',
    description: 'Students are learning to use 3D-pens to design as per their wish and boost their creativity'
  },
  {
    id: 5,
    src: [
      // 'https://placehold.co/600x400/51315A/FFFFFF?text=Circuit+Building',
      '/assets/gallery/group/IMG_20250831_171627.jpg'
    ],
    alt: 'A Space for Every Child',
    title: 'A Space for Every Child',
    description: 'From curious preschoolers to aspiring young innovators, InspireIQ Lab brings children of all ages together to explore, create, and grow.'
  },
  {
    id: 6,
    src: [
      // 'https://placehold.co/600x400/31475A/FFFFFF?text=Space+Exploration',
      '/assets/gallery/STEM_Age-8 to11/img1.jpg',
      '/assets/gallery/STEM_Age-8 to11/img3.jpg',
    ],
    alt: 'Exploring Science with Magnets',
    title: 'Exploring Science with Magnets',
    description: 'Children discover the magic of magnetism through fun hands-on experiments, building curiosity and a deeper understanding of physics.'
  },
];


interface VideoData {
  id: number,
  youtubeId: string,
  title: string,
  description: string
};

const videosData: VideoData[] = [
  {
    id: 1,
    youtubeId: 'x2kgG77EKCc',
    title: 'Kids are busy making robot cars',
    description: 'See the amazing robots our students built and the incredible teamwork on display.'
  },
  {
    id: 2,
    youtubeId: 'vVCOWltusKg',
    title: 'A Day in the Life at the Lab',
    description: 'Ever wondered what a typical day looks like for our young scientists? This video gives you a sneak peek into the fun, learning, and discovery that happens every day.'
  },
  {
    id: 3,
    youtubeId: 'LNgtzu3Nqac',
    title: 'Students Feedback: What they feel',
    description: 'See how students think about our programs, how fun it is, how they learn about various science concepts using playful things'
  },
  {
    id: 4,
    youtubeId: 'JMo111alJ9o',
    title: 'Kids first robotic Car!',
    description: 'Hear the ecstacy from building the first robot car in their life, they are enjoying every bit of it'
  },
  {
    id: 5,
    youtubeId: 'r_huxY-3hHM',
    title: 'Kids are Collaborating',
    description: 'Sometimes there are some tasks which is difficult, and can not be solved by individual, there comes the teamwork'
  },
];


// Photo Card Component
const PhotoCard = ({ photo, onImageClick } : {
  photo: PhotoData,
  onImageClick: (photo: PhotoData) => void
}) => (
  <div 
    className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg hover:shadow-[#4F46E5]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
    onClick={() => onImageClick(photo)}
  >
    <Image width={1000} height={0} className="w-full h-56 object-cover" src={photo.src[0]} alt={photo.alt} />
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{photo.title}</h3>
      <p className="text-gray-600 text-sm">{photo.description.substring(0, 100)}...</p>
    </div>
  </div>
);

// Video Card Component
const VideoCard = ({ video }: {video: VideoData}) => (
  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg hover:shadow-[#14B8A6]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{video.title}</h3>
      <p className="text-gray-600 text-sm">{video.description}</p>
    </div>
  </div>
);

// Modal Component
const Modal = ({ photo, onClose }: {
  photo: PhotoData,
  onClose: () => void
}) => {
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-full overflow-y-auto flex flex-col md:flex-row animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className='relative w-full md:w-1/2 flex-shrink-0 h-auto md:rounded-l-2xl bg-black'>
          <Swiper
            className='w-full h-[400px]'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination = {{ clickable: true }}
          >
            {photo.src.map((path) => {
              return (
              <SwiperSlide key='path'>
                <Image width={1000} height={0} src={path} alt="nothing" className='w-full h-full object-contain'/>
              </SwiperSlide>
              )})}
          </Swiper>
          
          {/* TODO: Implement the maximize and minize */}
          {/* <img 
              src='./assets/icons/maximize.svg' 
              alt='maximize icon'
              height={20}
              width={20}
              className='absolute right-4 bottom-4 cursor-pointer z-50'
          /> */}

        </div>

        <div className="p-8 flex flex-col">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{photo.title}</h2>
          <p className="text-gray-700 flex-grow">{photo.description}</p>
          <button
            onClick={onClose}
            className="mt-6 self-start bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          >
            Close
          </button>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  );
};

// --- Gallery Page ---
export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);
  
  const handleImageClick = (photo: PhotoData) => {
    setSelectedPhoto(photo);
  };
  
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const TabButton = ({ tabName, label }: {tabName: string, label: string}) => {
    const isActive = activeTab === tabName;
    return (
      <button
        onClick={() => setActiveTab(tabName)}
        className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition-all duration-300 relative focus:outline-none ${
          isActive
            ? 'text-slate-900'
            : 'text-gray-500 hover:text-slate-900'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
        )}
      </button>
    );
  };

  return (
    <div className="md:mx-40 bg-gray-50 min-h-screen text-slate-800 font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">
            A Glimpse Into Our Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the moments of creation, collaboration, and fun that happen here every day.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <TabButton tabName="photos" label="Photo Gallery" />
          <TabButton tabName="videos" label="Video Reel" />
        </div>

        {/* Content Area */}
        <main>
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {photosData.map(photo => (
                <PhotoCard key={photo.id} photo={photo} onImageClick={handleImageClick} />
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {videosData.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </main>
      </div>

      {selectedPhoto && 
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      }
      
      {/* We need to define the animation classes used if they are not part of standard Tailwind */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
        .aspect-h-9 { height: 0; }
        .aspect-w-16 > iframe { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }
      `}</style>
    </div>
  );
}