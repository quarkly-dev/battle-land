import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Card",
	"margin": "0px 0px 36px 0px",
	"md-width": "100%",
	"md-margin": "0px 0px 0px 0px",
	"md-padding": "0px 16px 0px 16px",
	"sm-width": "calc(100% - 32px)"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "28px",
			"height": "28px",
			"margin": "0px 0px 24px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 18px 0px",
			"font": "--title",
			"letter-spacing": ".1ps",
			"color": "--lightText",
			"sm-margin": "0px 0px 12px 0px",
			"children": "A single source"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--paragraph",
			"letter-spacing": ".2px",
			"color": "--lightText",
			"sm-margin": "0px 0px 2em 0px",
			"children": "When you add work to ypur Slate calendar we automatically calculate useful insights"
		}
	}
};

const CardFeatures = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(CardFeatures, { ...Box,
	defaultProps,
	overrides
});
export default CardFeatures;