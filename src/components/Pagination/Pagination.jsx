import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import * as React from 'react';


const BasicPagination = ({ count }) => {
	return (
		<Pagination count={count} color="primary" />
	);
};

BasicPagination.propTypes = {
	count: PropTypes.number.isRequired,
};

export default BasicPagination;