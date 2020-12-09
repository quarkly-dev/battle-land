import React from 'react';
import atomize from '@quarkly/atomize';
import styles, { css, keyframes } from 'styled-components';
const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const animation = props => css`
	${rotate} ${props.duration} linear infinite
`;

const Div = styles.div`
	animation: ${animation};
`;

const Rotate = ({
	children,
	...props
}) => <Div {...props}>
	
	{children}
	
</Div>;

const propInfo = {
	duration: {
		title: 'Animation duration',
		control: 'input',
		weight: 1
	}
};
const defaultProps = {
	duration: '10s'
};
export default atomize(Rotate)({
	propInfo
}, defaultProps);