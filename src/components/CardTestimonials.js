import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Card",
	"padding": "40px 40px 40px 40px",
	"border-width": "1px",
	"border-style": "solid",
	"border-color": "#5C5C5C",
	"border-radius": "10px",
	"margin": "10px 10px 10px 10px",
	"flex": "1 1 auto",
	"width": "calc(50% - 102px)",
	"display": "inline-block",
	"sm-width": "calc(100% - 40px)",
	"sm-padding": "40px 20px 40px 20px",
	"sm-margin": "0 0 24px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"position": "relative",
			"margin": "0px 0px 30px 0px",
			"padding": "0px 0px 0px 75px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "50px",
			"height": "50px",
			"position": "absolute",
			"top": 0,
			"left": 0
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--link",
			"color": "--secondary1",
			"letter-spacing": ".2px",
			"margin": "0px 0px 0px 0px",
			"children": "Some text"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--paragraph",
			"color": "--lightText",
			"letter-spacing": ".2px",
			"margin": "0px 0px 0px 0px",
			"children": "Some text"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--paragraph",
			"color": "--lightText",
			"letter-spacing": ".2px",
			"margin": "16px 0px 0px 0px",
			"max-width": "340px",
			"children": "Some text"
		}
	}
};

const CardTestimonials = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		<Text {...override("text2")} />
		{children}
	</Box>;
};

Object.assign(CardTestimonials, { ...Box,
	defaultProps,
	overrides
});
export default CardTestimonials;