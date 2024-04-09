import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { toTravelTableHeaders } from '@/utils/tableConstants';

import { useGetAllTravel } from '@/services/toTravel.service';
import { transformDate } from '@/utils/transform-date-time';
import DataTable from '@/components/DataTable';
import ToTravelTableRows from '@/components/ToTravel';

const tableCols = ['Planned Year', 'Place', 'Priority'];
const ToTravel = () => {
  const { data, isLoading } = useGetAllTravel();
  const templates = {};
  return (
    <div className="text-basicClr">
      <div className="w-full flex justify-end p-5 mr-20 ">
        <Link href={'/to-travel/AddToTravel'}>
          <button className="bg-baseColor p-5 rounded-lg gap-2 flex">
            <span>New To-Travel</span>
            <AddCircleOutlineIcon />
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-20">
        {isLoading && <div className="text-basicClr">Loading.....</div>}
        <div className="w-[60%] flex justify-center">
          {data && (
            <DataTable
              columns={tableCols}
              rows={<ToTravelTableRows data={data?.data} />}
              hasAction={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToTravel;
