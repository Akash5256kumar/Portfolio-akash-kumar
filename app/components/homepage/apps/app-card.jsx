// @flow strict
import Link from 'next/link';
import Image from 'next/image';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';

function AppCard({ app }) {
  return (
    <div className="p-3 relative flex flex-col h-full z-10">
      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1080}
        height={200}
        className="absolute bottom-0 left-0 opacity-80 z-0 pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center py-6 px-2 z-10 transition-transform duration-300 hover:scale-110">
        <div className="text-violet-500 mb-4 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
           <BsPhone size={48} />
        </div>
        <p className="text-base sm:text-lg font-medium uppercase text-center line-clamp-1">{app.name}</p>
      </div>
      
      <div className="flex flex-col flex-grow z-10 mt-2">
        <p className='mb-4 text-xs sm:text-sm text-[#d3d8e8] opacity-80 text-center'>
          Download on mobile stores
        </p>

        <div className="flex flex-col gap-2 mt-auto">
            <Link target="_blank" href={app.playStore} className="flex items-center justify-center gap-2 px-3 py-1.5 sm:py-2 bg-[#1a1443] hover:bg-violet-600 rounded-md text-white text-xs lg:text-sm transition-all duration-300 border border-[#2a2453] relative z-20">
                <FaGooglePlay className="text-[#16f2b3]" /> Play Store
            </Link>
            
            {app.appStore ? (
              <Link target="_blank" href={app.appStore} className="flex items-center justify-center gap-2 px-3 py-1.5 sm:py-2 bg-[#1a1443] hover:bg-violet-600 rounded-md text-white text-xs lg:text-sm transition-all duration-300 border border-[#2a2453] relative z-20">
                  <FaApple className="text-gray-200" /> App Store
              </Link>
            ) : (
               <div className="px-3 py-1.5 sm:py-2 border border-transparent h-[34px] sm:h-[38px] relative z-20"></div>
            )}
        </div>
      </div>
    </div>
  );
};
export default AppCard;
