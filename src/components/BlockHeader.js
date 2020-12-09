import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Header",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"margin": "0px 0px 100px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Title",
			"font": "--headline2",
			"letter-spacing": ".2px",
			"text-align": "center",
			"color": "--lightText",
			"margin": "0px 0px 24px 0px",
			"max-width": "640px",
			"sm-font": "--headline3",
			"children": "Features"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Subtitle",
			"font": "--subheader",
			"letter-spacing": ".2px",
			"text-align": "center",
			"color": "--lightText",
			"margin": "0px 0px 0px 0px",
			"max-width": "640px",
			"children": "Some text"
		}
	}
};

const BlockHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(BlockHeader, { ...Box,
	defaultProps,
	overrides
});
export default BlockHeader;