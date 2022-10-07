import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const SideList = () => {
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Acción" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<WorkIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Aventura" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<BeachAccessIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Arcade" secondary="Added Sep 30, 2022" />
			</ListItem>
		</List>
	);
};


export default SideList;