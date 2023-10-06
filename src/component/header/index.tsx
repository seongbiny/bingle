import React from 'react';

const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div style={{ width: 10, height: 10, backgroundColor: 'black' }} />
			<div style={{ display: 'flex' }}>
				<div>개발 기록</div>
				<div>나에 대해서</div>
				<div>태그</div>
			</div>
		</div>
	);
};

export default Header;
