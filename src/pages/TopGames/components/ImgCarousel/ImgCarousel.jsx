import PropTypes from 'prop-types';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImgCarousel = ({ slideImages }) => {
	return (
		<div className="slide-container">
			<Slide>
				{slideImages.map((slideImage, index) => (
					<div className="each-slide" key={index}>
						<div style={{ 'backgroundImage': `url(${slideImage.url})`, height: '400px' }}>
							<span>{slideImage.caption}</span>
						</div>
					</div>
				))}
			</Slide>
		</div >
	);
};

ImgCarousel.propTypes = {
	slideImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImgCarousel;