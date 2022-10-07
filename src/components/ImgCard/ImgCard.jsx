import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';


const ImgCard = ({ id, alt, image, name, description }) => {
	const gameHref = `/game/${id}`;
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={alt}
				height="140"
				image={image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">
					<Link href={gameHref} style={{ textDecoration: 'none' }}>
                        Ver
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

ImgCard.propTypes = {
	id: PropTypes.number.isRequired,
	alt: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ImgCard;