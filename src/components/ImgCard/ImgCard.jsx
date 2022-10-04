import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PropTypes from 'prop-types';


const ImgCard = ({ alt, src, title, description }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={alt}
				height="140"
				image={src}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">
					<Link href="/game/1" style={{ textDecoration: 'none' }}>
                        Ver
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

ImgCard.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ImgCard;