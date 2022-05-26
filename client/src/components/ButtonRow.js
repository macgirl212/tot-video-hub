import SSRButton from './buttons/SSRButton';
import SRButton from './buttons/SRButton';
import MRButton from './buttons/MRButton';
import RButton from './buttons/RButton';
import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

// row that holds the four main buttons on the characters' page
const ButtonRow = ({ findR }) => {
	// redux
	const { store } = useContext(ReactReduxContext);

	return (
		<div className="button-row">
			<SSRButton onClick={() => store.dispatch({ type: 'SSR' })} />
			<SRButton onClick={() => store.dispatch({ type: 'SR' })} />
			<MRButton onClick={() => store.dispatch({ type: 'MR' })} />
			<RButton onClick={findR} />
		</div>
	);
};

export default ButtonRow;
