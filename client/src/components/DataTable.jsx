import * as React from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTableCell } from '../components/table';

const DataTable = ({ rows, columns, hasAction }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns?.map((column, i) => (
              <StyledTableCell key={i}>{column}</StyledTableCell>
            ))}
            {hasAction && <StyledTableCell>Action</StyledTableCell>}
          </TableRow>
        </TableHead>
        {rows}
      </Table>
    </TableContainer>
  );
};

export default DataTable;
