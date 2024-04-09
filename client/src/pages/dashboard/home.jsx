import Image from 'next/image';
import home from '../../../public/image/home.gif';
import { Card } from '@mui/material';
const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[70%] p-2 mt-10 h-full">
          <div className="w-full object-cover">
            <Image src={home} className="w-full rounded-xl mx-20" alt="" />
          </div>
          <div className="w-full border-2 border-dashed mt-20 rounded-xl p-8 mx-20 text-xl mb-10">
            Hello Welcome from the Malivu Self Management Website. In this
            website, you can add notes, where to travel, what clothes or brands
            you want to mark to buy such things. Feel free to use.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
