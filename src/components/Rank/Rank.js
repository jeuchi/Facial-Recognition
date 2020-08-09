import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3 helvetica'>
				{`${name}, your current entry count is...`}
			</div>
			<div className='white f1 helvetica'>
				{entries}
			</div>
		</div>
		
	);
}

export default Rank;