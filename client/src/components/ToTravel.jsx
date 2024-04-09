import { StyledTableRow, StyledTableCell } from '../components/table';
import { TableBody } from '@mui/material';
import { transformDate, transformTime } from '@/utils/transform-date-time';

const ToTravelTableRows = ({ data }) => {
  return (
    <TableBody>
      {data &&
        data.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell>{transformDate(row.planned_year)}</StyledTableCell>
            <StyledTableCell>{row.place}</StyledTableCell>
            {row.priority === 'high' ? (
              <StyledTableCell className="text-red">
                {row.priority}
              </StyledTableCell>
            ) : (
              <StyledTableCell>{row.priority}</StyledTableCell>
            )}
          </StyledTableRow>
        ))}
    </TableBody>
  );
};

export default ToTravelTableRows;
