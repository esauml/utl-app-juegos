import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Footer = () => {
	return (
		<Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 1, bgcolor: 'background.paper' }}>
			<Typography variant="body2" color="text.secondary" align="center">
				{'© '}
				<Link color="inherit" href="https://material-ui.com/">
                    Material-UI
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Paper>
	);
};

export default Footer;
