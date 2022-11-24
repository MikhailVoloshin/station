import React from 'react';

const ListItem = ({ item }) => {
	return (
		<div className='main__list-profile'>
			<img
				src='https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'
				alt='img'
			/>
			{item}
		</div>
	);
};

export default ListItem;