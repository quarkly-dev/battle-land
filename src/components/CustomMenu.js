import React, { useState, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
const overrides = {
	'Button': {
		kind: 'Box'
	},
	'Button Line': {
		kind: 'Box'
	},
	'Content': {
		kind: 'Box'
	}
};

const CustomMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides),
	      [isOpen, setOpen] = useState(false),
	      onToggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]),
	      stateOpen = isOpen ? ':open' : ':closed';
	return <Box {...rest}>
		      
		<Box onPointerDown={onToggleOpen} {...override('Button', `Button ${stateOpen}`)}>
			        
			<Box {...override('Button Line', 'Button Line1', `Button Line1 ${stateOpen}`)} />
			        
			<Box {...override('Button Line', 'Button Line2', `Button Line2 ${stateOpen}`)} />
			        
			<Box {...override('Button Line', 'Button Line3', `Button Line3 ${stateOpen}`)} />
			      
		</Box>
		      
		<Box {...override('Content', `Content ${stateOpen}`)}>
			        
			{children}
			      
		</Box>
		    
	</Box>;
};

export default Object.assign(CustomMenu, {
	title: 'Custom Menu',
	overrides
});