import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Image } from "@quarkly/widgets";
import Button1 from "./Button1";
const defaultProps = {
	"quarkly-title": "Card",
	"width": "50%",
	"display": "flex",
	"flex-direction": "column",
	"justify-content": "space-between",
	"align-items": "center",
	"overflow-x": "hidden",
	"overflow-y": "hidden",
	"margin": "0px 16px 0px 16px",
	"padding": "40px 4% 40px 4%",
	"background": "--light",
	"border-radius": "12px",
	"position": "relative",
	"sm-width": "92%",
	"sm-margin": "0px 0px 32px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--button",
			"letter-spacing": ".2px",
			"text-align": "center",
			"width": "200px",
			"position": "absolute",
			"right": 0,
			"top": 0,
			"background": "--color-secondary1",
			"transform": "translate(60px, 10px) rotate(45deg)",
			"children": "NEW"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-direction": "column",
			"justify-content": "center"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--title",
			"letter-spacing": ".1px",
			"text-align": "center",
			"color": "--firstText",
			"margin": "10px 0px 20px 0px",
			"max-width": "360px",
			"children": "Some text"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--paragraph",
			"letter-spacing": ".2px",
			"text-align": "center",
			"color": "--secondText",
			"margin": "10px 0px 40px 0px",
			"max-width": "360px",
			"children": "Some text"
		}
	},
	"button1": {
		"kind": "Button1",
		"props": {
			"margin": "0px 0px 30px 0px",
			"padding": "15px 45px 15px 45px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"border-radius": "16px"
		}
	}
};

const CardContents = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Box {...override("box")}>
			<Text {...override("text1")} />
			<Text {...override("text2")} />
			<Button1 {...override("button1")} />
		</Box>
		<Image {...override("image")} />
		{children}
	</Box>;
};

Object.assign(CardContents, { ...Box,
	defaultProps,
	overrides
});
export default CardContents;