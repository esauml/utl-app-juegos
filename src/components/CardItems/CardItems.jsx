import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ImgCard from '../ImgCard/ImgCard';

const componentName = ({ items }) => {
	return (
		<>
			{
				// create ImgCard component for each item in gameItems
				items.map((item) => (
					<Grid item key={item.id}>
						<ImgCard
							id={item.id}
							name={item.name}
							description={item.description}
							image={item.image}
							alt={item.alt}
						/>
					</Grid>
				))
			}
		</>
	);
};

componentName.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};



export default componentName;