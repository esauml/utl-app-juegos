import Pagination from '@mui/material/Pagination';
import * as React from 'react';

const BasicPagination = ({ count }) => {
    return (
        <Pagination count={count} color="primary" />
    );
}

export default BasicPagination;