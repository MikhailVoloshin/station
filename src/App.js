import Located from './components/Located';
import Map from './components/Map/Map';
import CurrentTime from './components/CurrentTime';
import { useGetPositionQuery } from './store/rtkq'
import List from './components/List';
import './App.css';

function App() {
 	const { data: location } = useGetPositionQuery('', { pollingInterval: 5000 })

	return (
		<div className='station'>
			<header className='header'>
				<Located location={location?.iss_position} />
				<CurrentTime />
			</header>
			<main className='main'>
				<div className='main__map'>
					<Map position={location?.iss_position} />
				</div>
        		<List />
			</main>
		</div>
	);
}

export default App;
