import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import PropTypes from 'prop-types';

const TransitionAlert = ({open, setOpen, message }) => {

	return (
		<Box sx={{ width: '100%' }}>
			<Collapse in={open}>
				<Alert
					severity="warning" 
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => {
								setOpen(false);
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
					sx={{ mb: 2 }}
				>
					{message}
				</Alert>
			</Collapse>
		</Box>
	);
};


TransitionAlert.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired
};


export default TransitionAlert;