import React from 'react';
import { useGetAstrosQuery } from '../store/rtkq';
import ListItem from './ListItem';


const List = () => {
	const { data: astrosFetch } = useGetAstrosQuery('', { pollingInterval: 5000 })
	const astros = astrosFetch?.people.filter((item) => item.craft === 'ISS');

	return (
		<div className='main__list'>
			{!astrosFetch && <p>Loading</p>}
			{astros?.map(({name}) => (
				<ListItem key={name} item={name} />
			))}
			<div className='main__list-count'>
				Total amount: {astros?.length} people on ISS
			</div>
		</div>
	);
};

export default List;