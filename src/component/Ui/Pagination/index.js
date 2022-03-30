import React from 'react';
import Pagination from '@mui/material/Pagination';
import './Pagination.css';
export default function PaginationComponent({ onChangePage, count }) {
  return (
    <Pagination
      count={count}
      variant='outlined'
      shape='rounded'
      onChange={onChangePage}
    />
  );
}
