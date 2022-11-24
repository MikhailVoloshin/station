import moment from 'moment';
import React, { useEffect, useState } from 'react';

const CurrentTime = () => {
	const [date, setDate] = useState(null);

	useEffect(() => {
		setDate(moment());
		let id = setInterval(() => {
			setDate(moment());
		}, 10000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div className='header__time'>
			<h3>Current UTC time: {date?.format('HH:mm')}</h3>
			{date?.format('dddd')}, {date?.format('DD MMM YYYY')}
		</div>
	);
};

export default CurrentTime;