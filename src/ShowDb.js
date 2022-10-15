import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ShowDb({ data, showDbPressed }) {
  if (showDbPressed)
    return (
      <TableContainer sx={{ marginTop: 5 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="right">Возраст</TableCell>
              <TableCell align="right">Выбранная страна</TableCell>
              <TableCell align="right">Отель проживания</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(person => (
              <TableRow
                key={person.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {`${person.name} ${person.surname} ${person.patronymic}`}
                </TableCell>
                <TableCell align="right">{person.age}</TableCell>
                <TableCell align="right">{person.country}</TableCell>
                <TableCell align="right">
                  {person.hotel !== '' ? person.hotel : 'не выбрано'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
