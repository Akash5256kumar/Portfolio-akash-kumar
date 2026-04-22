// @flow strict
import { appsData } from '@/utils/data/apps-data';
import AppCard from './app-card';
import GlowCard from '../../helper/glow-card';

const Apps = () => {

  return (
    <div id='apps' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider">
            Apps
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6 xl:gap-8 mx-auto max-w-[1400px]">
        {
          appsData.map((app, i) => (
            <GlowCard key={app.id || i} identifier={`app-${app.id || i}`}>
              <AppCard app={app} />
            </GlowCard>
          ))
        }
      </div>
    </div>
  );
};

export default Apps;
