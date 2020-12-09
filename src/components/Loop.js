import React, { useMemo } from 'react';
import Loop from 'react-text-loop';
import { Box } from '@quarkly/widgets';
const defaults = {
	interval: 3000,
	speed: 150,
	delay: 0
};

const TextLoop = ({
	inputLines,
	inputInterval,
	inputSpeed,
	inputDelay,
	...props
}) => {
	const lines = useMemo(() => inputLines.length > 0 ? inputLines.split(',').reverse() : [], [inputLines]),
	      interval = useMemo(() => parseInt(inputInterval) || defaults.interval, [inputInterval]),
	      speed = useMemo(() => parseInt(inputSpeed) || defaults.speed, [inputSpeed]),
	      delay = useMemo(() => parseInt(inputDelay) || defaults.delay, [inputDelay]);
	return <Box {...props}>
		      
		<Loop interval={interval} adjustingSpeed={speed} delay={delay}>
			        
			{lines.map(line => <Box width="560px" max-width="90vw">
				            
				{line}
				          
			</Box>)}
			      
		</Loop>
		    
	</Box>;
};

const propInfo = {
	inputLines: {
		title: 'The list of lines, each adjusting to the next one',
		control: 'input',
		multiply: true,
		category: 'Lines',
		weight: 1
	},
	inputInterval: {
		title: 'The frequency that the lines change',
		control: 'input',
		category: 'Params',
		weight: 1
	},
	inputSpeed: {
		title: 'The speed that each line adjusts to the next one',
		control: 'input',
		category: 'Params',
		weight: 1
	},
	inputDelay: {
		title: 'A delay for the animation to start',
		control: 'input',
		category: 'Params',
		weight: 1
	}
};
const defaultProps = {
	inputLines: 'fast',
	inputInterval: defaults.interval,
	inputSpeed: defaults.speed,
	inputDelay: defaults.delay
};
export default Object.assign(TextLoop, {
	title: 'Text Loop',
	propInfo,
	defaultProps
});