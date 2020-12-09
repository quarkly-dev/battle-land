import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"font": "--button",
	"letter-spacing": ".2px",
	"color": "--lightText",
	"background": "none",
	"box-shadow": "0 0 0 1px --color-lightText",
	"focus-box-shadow": "0 0 0 1px --color-lightText",
	"border-radius": "0px",
	"padding": "20px 40px 20px 40px",
	"children": "Button"
};
const overrides = {};

const Button2 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(Button2, { ...Button,
	defaultProps,
	overrides
});
export default Button2;