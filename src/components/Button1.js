import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"font": "--button",
	"letter-spacing": ".2px",
	"color": "--lightText",
	"background": "--color-primary",
	"hover-background": "--color-lightPrimary",
	"focus-box-shadow": "none",
	"transition": "--background",
	"border-radius": "0px",
	"padding": "20px 40px 20px 40px",
	"children": "Button"
};
const overrides = {};

const Button1 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(Button1, { ...Button,
	defaultProps,
	overrides
});
export default Button1;