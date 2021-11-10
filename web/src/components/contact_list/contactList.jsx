import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './contactList.css'


function ContactList(products) {
  return (
    <TableContainer className="contact-table" component={Paper} >
      <Table sx={{ minWidth: 1200 }} aria-label="simple table">
        <TableHead className="head">
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.rows.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="right" >{product.first_name}</TableCell>
              <TableCell align="right">{product.last_name}</TableCell>
              <TableCell align="right">{product.email}</TableCell>
              <TableCell align="right">{product.phone_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ContactList;