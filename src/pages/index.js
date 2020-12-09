import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
import { FiMapPin } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Battle Land
			</title>
			<meta name={"description"} content={"Most calendars are designed for teams. Slate is designed for freelancers who wand a simple way to plan their schedule."} />
			<meta property={"og:title"} content={"Battle Land"} />
			<meta property={"og:description"} content={"Most calendars are designed for teams. Slate is designed for freelancers who wand a simple way to plan their schedule."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/og-image-1200.png?v=2020-12-09T14:15:19.136Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-32.png?v=2020-12-09T14:15:19.130Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-152.png?v=2020-12-09T14:15:51.991Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-152.png?v=2020-12-09T14:15:51.991Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-152.png?v=2020-12-09T14:15:51.991Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-152.png?v=2020-12-09T14:15:51.991Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/favicon-270.png?v=2020-12-09T14:15:19.130Z"} />
		</Helmet>
		<Section quarkly-title="Header" background="--dark" padding="32px 0 32px 0">
			<Box quarkly-title="Content" md-display="flex" md-justify-content="space-between">
				<Image
					quarkly-title="Logo"
					src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logo.svg?v=2020-11-19T13:22:22.928Z"
					flex="0 0 auto"
					display="none"
					md-display="inline-block"
				/>
				<Components.CustomMenu
					width="100%"
					md-display="flex"
					md-justify-content="flex-end"
					md-align-items="center"
					md-position="relative"
					md-z-index="5"
				>
					<Override
						slot="Content"
						display="flex"
						align-items="center"
						justify-content="space-between"
						md-bottom={0}
						md-left={0}
						md-position="fixed"
						md-right={0}
						md-top={0}
						md-z-index="1"
						md-flex-direction="column"
						md-justify-content="center"
						md-background="--dark"
						md-padding="90px 0px 0px 0px"
					/>
					<Override slot="Content :closed" md-opacity="0" md-transform="translateY(-100%)" md-transition="--opacity,transform 0.3s step-end 0s" />
					<Override slot="Content :open" md-opacity="1" md-transform="translateY(0%)" md-transition="--opacity,transform 0.3s step-start 0s" />
					<Override
						slot="Button"
						display="none"
						md-display="block"
						md-width="44px"
						md-height="28px"
						md-padding="15px 15px 15px 15px"
						md-position="relative"
						md-z-index="6"
						md-cursor="pointer"
					/>
					<Override
						slot="Button Line"
						md-position="absolute"
						md-min-height="4px"
						md-background="--light"
						md-transition="--transform,width --transitionDuration-normal ease 0s"
					/>
					<Override slot="Button Line1" md-top="15px" md-right="15px" />
					<Override slot="Button Line2" md-top="27px" md-right="15px" md-transition="--opacity" />
					<Override slot="Button Line3" md-top="39px" md-right="15px" />
					<Override slot="Button Line1 :closed" md-min-width="44px" />
					<Override slot="Button Line2 :closed" md-min-width="32px" />
					<Override slot="Button Line3 :closed" md-min-width="20px" />
					<Override slot="Button :open" md-position="fixed" />
					<Override slot="Button Line1 :open" md-width="36px" md-transform="translateY(12px) rotate(225deg)" />
					<Override slot="Button Line2 :open" md-width="32px" md-opacity="0" />
					<Override slot="Button Line3 :open" md-width="36px" md-transform="translateY(-12px) rotate(135deg)" />
					<Image
						quarkly-title="Logo"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logo.svg?v=2020-11-19T13:22:22.928Z"
						flex="0 0 auto"
						md-position="absolute"
						md-top="32px"
						md-left="5%"
					/>
					<Menu display="flex" padding="0 0 0 0" md-flex-direction="column" md-align-items="center">
						<Override slot="item-404" display="none" />
						<Override slot="item-index" display="none" />
						<Override slot="item" margin="0px 15px 0px 15px" padding="10px 10px 10px 10px" md-margin="0px 15px 20px 15px" />
						<Override
							slot="link"
							font="--link"
							letter-spacing=".2px"
							color="--lightText"
							text-decoration-line="initial"
							transition="--color"
							hover-color="--secondary1"
							md-font="--menu"
						/>
					</Menu>
					<Components.Button2 margin="0px 0px 0px 18px" padding="15px 45px 15px 45px" md-display="none">
						Login
					</Components.Button2>
					<Components.Button2 padding="15px 45px 15px 45px" display="none" md-display="block" md-margin="44px 0px 44px 0px" />
				</Components.CustomMenu>
			</Box>
		</Section>
		<Section quarkly-title="Hero" background="--dark" padding="80px 0 36px 0">
			<Box
				quarkly-title="Header"
				display="flex"
				flex-direction="column"
				align-items="center"
				margin="0px 0px 80px 0px"
			>
				<Text
					quarkly-title="Title"
					font="--headline1"
					letter-spacing=".2px"
					text-align="center"
					color="--lightText"
					margin="0px 0px 0px 0px"
					sm-font="normal 500 48px/1.2 --fontFamily-googleInter"
				>
					Work
				</Text>
				<Components.Loop
					font="--headline1"
					letter-spacing=".2px"
					text-align="center"
					color="--secondary1"
					margin="0px 0px 24px 0px"
					inputInterval="2000"
					inputLines="independently,on the team,effectively,smart"
					sm-font="normal 500 48px/1.2 --fontFamily-googleInter"
				/>
				<Text
					quarkly-title="Descr"
					font="--subheader"
					letter-spacing=".2px"
					text-align="center"
					color="--lightText"
					margin="0px 0px 0px 0px"
					max-width="640px"
				>
					Most calendars are designed for teams. Slate is designed for freelancers who wand a simple way to plan their schedule.
				</Text>
			</Box>
			<Box
				quarkly-title="Content"
				display="flex"
				justify-content="center"
				sm-flex-direction="column"
				sm-align-items="center"
			>
				<Components.Button1 margin="0px 18px 0px 18px" sm-margin="0px 18px 20px 18px">
					Try For Free
				</Components.Button1>
				<Components.Button2 margin="0px 18px 0px 18px" sm-margin="0px 18px 20px 18px">
					Learn More
				</Components.Button2>
			</Box>
		</Section>
		<Section quarkly-title="Image" background="--dark" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				width="100%"
				position="relative"
				overflow-x="hidden"
				overflow-y="hidden"
				align-items="center"
			/>
			<Image width="1560px" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/hero-background.webp?v=2020-11-19T13:30:03.627Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/hero-background-2x.webp?v=2020-11-19T13:30:27.550Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/hero-background.webp?v=2020-11-19T13:30:03.627Z 1x" sm-width="767px" />
			<Box
				quarkly-title="Overlay"
				position="absolute"
				left={0}
				right={0}
				top={0}
				bottom={0}
				background="rgba(0, 0, 0, 0) linear-gradient(180deg,rgba(0,0,0,0) 50%,#0E0E0E 90%) 0% 0% /auto repeat scroll padding-box"
				md-background="rgba(0, 0, 0, 0) linear-gradient(180deg,rgba(0,0,0,0) 45%,#0E0E0E 90%) 0% 0% /auto repeat scroll padding-box"
			/>
		</Section>
		<Section
			quarkly-title="Features"
			background="--dark"
			padding="160px 0 80px 0"
			md-padding="120px 0 60px 0"
			sm-padding="60px 0 60px 0"
		>
			<Components.BlockHeader md-margin="0px 0px 72px 0px" sm-margin="0px 0px 30px 0px">
				<Override slot="text" />
				<Override slot="text1">
					Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
				</Override>
			</Components.BlockHeader>
			<Box
				quarkly-title="Content"
				display="flex"
				align-items="flex-start"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Box
					quarkly-title="Images"
					flex="1 1 auto"
					display="flex"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-margin="0px 0px 80px 0px"
				>
					<Box quarkly-title="Wrapper" position="relative">
						<Image
							src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-1.webp?v=2020-11-20T09:28:04.830Z"
							srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-1-2x.webp?v=2020-11-20T09:28:24.820Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-1.webp?v=2020-11-20T09:28:04.830Z 1x"
							max-width="100%"
							md-padding="0px 0px 15% 0px"
							sm-width="80%"
							sm-display="block"
							sm-margin="0px auto 0px auto"
						/>
						<Components.Rotate
							position="absolute"
							bottom="3%"
							left="3%"
							width="28%"
							display="flex"
							md-bottom="18%"
							sm-left="13%"
							sm-bottom="20%"
							sm-width="22%"
						>
							<Image width="100%" max-width="100%" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/circle-ribbon.svg?v=2020-11-20T09:40:03.953Z" />
						</Components.Rotate>
						<Image
							src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-2.webp?v=2020-11-20T09:28:59.089Z"
							srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-2-2x.webp?v=2020-11-20T09:29:19.596Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/features-image-2.webp?v=2020-11-20T09:28:59.089Z 1x"
							position="absolute"
							right="-5%"
							bottom="-15%"
							md-right="6.5%"
							md-bottom="0%"
							sm-width="60%"
							sm-right="0%"
						/>
					</Box>
				</Box>
				<Box
					quarkly-title="Cards"
					flex="0 0 auto"
					width="320px"
					margin="0px 0px 0px 5%"
					md-display="flex"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					sm-flex-direction="column"
				>
					<Components.CardFeatures>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/icon-round-restaurant-menu.svg?v=2020-11-20T10:26:47.757Z" />
						<Override slot="text" />
						<Override slot="text1" />
					</Components.CardFeatures>
					<Components.CardFeatures>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/icon-alien-outline.svg?v=2020-11-20T10:27:52.814Z" />
						<Override slot="text">
							Intuitive interface
						</Override>
						<Override slot="text1">
							When you add work to ypur Slate calendar we automatically calculate useful insights
						</Override>
					</Components.CardFeatures>
					<Components.CardFeatures>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/icon-all-inclusive.svg?v=2020-11-20T10:28:20.960Z" />
						<Override slot="text">
							Or with rules
						</Override>
						<Override slot="text1">
							When you add work to ypur Slate calendar we automatically calculate useful insights
						</Override>
					</Components.CardFeatures>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Contents" background="--dark" padding="160px 0 80px 0" md-padding="80px 0 60px 0">
			<Components.BlockHeader margin="0px 0px 54px 0px">
				<Override slot="text">
					Contents
				</Override>
				<Override slot="text1" sm-max-width="360px">
					We focus on ergonomics and meeting you where you work
					<br />
					It's only a keystroke away
				</Override>
			</Components.BlockHeader>
			<Box
				quarkly-title="Content"
				display="flex"
				margin="0px -16px 0px -16px"
				sm-flex-direction="column"
				sm-margin="0px 0px 0px 0px"
			>
				<Components.CardContents>
					<Override slot="text" display="none" />
					<Override slot="button1">
						Sign Up
					</Override>
					<Override slot="text1">
						Work
					</Override>
					<Override slot="text2">
						Ever wondered if you're too reliant
						<br />
						on a client for work? Slate helps
						<br />
						you identify
					</Override>
					<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-laptop.webp?v=2020-11-20T12:06:03.025Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-laptop-2x.webp?v=2020-11-20T12:06:23.566Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-laptop.webp?v=2020-11-20T12:06:03.025Z 1x" />
				</Components.CardContents>
				<Components.CardContents>
					<Override slot="text2">
						Ever wondered if you're too reliant
						<br />
						on a client for work? Slate helps
						<br />
						you identify
					</Override>
					<Override slot="text1">
						Design with real data
					</Override>
					<Override slot="button1">
						Try For Free
					</Override>
					<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-interface.webp?v=2020-11-20T12:06:34.954Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-interface-2x.webp?v=2020-11-20T12:06:58.153Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/content-interface.webp?v=2020-11-20T12:06:34.954Z 1x" />
				</Components.CardContents>
			</Box>
		</Section>
		<Section
			quarkly-title="Gallery"
			background="--dark"
			padding="160px 0 80px 0"
			md-padding="120px 0 60px 0"
			sm-padding="60px 0 60px 0"
		>
			<Components.BlockHeader margin="0px 0px 54px 0px">
				<Override slot="text">
					Gallery
				</Override>
				<Override slot="text1" sm-max-width="400px">
					We focus on ergonomics and meeting you where you work
					<br />
					It's only a keystroke away
				</Override>
			</Components.BlockHeader>
			<Box
				quarkly-title="Content"
				display="grid"
				grid-gap="32px"
				grid-template-rows="repeat(3, 1fr)"
				grid-template-columns="repeat(12, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(5, 1fr)"
				md-grid-gap="18px"
			>
				<Box
					quarkly-title="Image"
					height="0px"
					min-height="0px"
					padding="100% 0px 0px 0px"
					grid-area="1 / 1 / 4 / 7"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-1.webp?v=2020-11-20T13:00:49.610Z) center/cover no-repeat scroll padding-box"
					md-grid-area="1 / 1 / 3 / 3"
					md-padding="57% 0px 0px 0px"
					sm-padding="100% 0px 0px 0px"
				/>
				<Box
					quarkly-title="Image"
					grid-area="1 / 7 / 2 / 13"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-2.webp?v=2020-11-20T13:01:22.944Z) center/cover no-repeat scroll padding-box"
					md-grid-area="3 / 1 / 4 / 2"
				/>
				<Box
					quarkly-title="Image"
					grid-area="2 / 7 / 3 / 10"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-3.webp?v=2020-11-20T13:01:34.330Z) center/cover no-repeat scroll padding-box"
					md-grid-area="3 / 2 / 4 / 3"
				/>
				<Box
					quarkly-title="Image"
					grid-area="2 / 10 / 3 / 13"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-4.webp?v=2020-11-20T13:01:46.122Z) center/cover no-repeat scroll padding-box"
					md-grid-area="4 / 1 / 5 / 2"
				/>
				<Box
					quarkly-title="Image"
					grid-area="3 / 7 / 4 / 9"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-5.webp?v=2020-11-20T13:01:59.194Z) center/cover no-repeat scroll padding-box"
					md-grid-area="4 / 2 / 5 / 3"
				/>
				<Box
					quarkly-title="Image"
					grid-area="3 / 9 / 4 / 11"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-6.webp?v=2020-11-20T13:02:09.902Z) center/cover no-repeat scroll padding-box"
					md-grid-area="5 / 1 / 6 / 2"
				/>
				<Box
					quarkly-title="Image"
					grid-area="3 / 11 / 4 / 13"
					border-radius="12px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/gallery-image-7.webp?v=2020-11-20T13:02:20.385Z) center/cover no-repeat scroll padding-box"
					md-grid-area="5 / 2 / 6 / 3"
				/>
			</Box>
		</Section>
		<Section
			quarkly-title="Partners"
			background="--dark"
			padding="160px 0 60px 0"
			md-padding="120px 0 30px 0"
			sm-padding="80px 0 30px 0"
		>
			<Components.BlockHeader margin="0px 0px 60px 0px" md-margin="0px 0px 30px 0px">
				<Override slot="text">
					Partners
				</Override>
				<Override slot="text1" sm-max-width="360px">
					We focus on ergonomics and meeting you where you work
					<br />
					It's only a keystroke away
				</Override>
			</Components.BlockHeader>
			<Box align-items="center" display="flex" flex-direction="column" quarkly-title="Content">
				<Box
					quarkly-title="Images"
					display="flex"
					align-items="center"
					justify-content="space-between"
					width="100%"
					max-width="840px"
					md-max-width="520px"
					md-justify-content="center"
					md-flex-wrap="wrap"
				>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-apple-app-store.svg?v=2020-11-23T18:37:25.562Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
					/>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-apiary.svg?v=2020-11-23T18:37:39.636Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
					/>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-android-icon.svg?v=2020-11-23T18:37:52.142Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
					/>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-basecamp.svg?v=2020-11-23T18:38:05.738Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
					/>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-airbnb.svg?v=2020-11-23T18:38:23.119Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
					/>
					<Image
						height="60px"
						src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/logos-ibm.svg?v=2020-11-23T18:38:34.627Z"
						md-margin="30px 30px 30px 30px"
						md-flex="0 0 auto"
						sm-margin="24px 24px 24px 24px"
						sm-width="90px"
					/>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="Testimonials"
			background="--dark"
			padding="160px 0 80px 0"
			md-padding="120px 0 60px 0"
			sm-padding="80px 0 60px 0"
		>
			<Components.BlockHeader margin="0px 0px 60px 0px">
				<Override slot="text1" display="none" />
				<Override slot="text" margin="0px 0px 0px 0px">
					Testimonials
				</Override>
			</Components.BlockHeader>
			<Box quarkly-title="Content" display="flex" flex-direction="column" align-items="center">
				<Box
					quarkly-title="Cards"
					display="flex"
					flex-wrap="wrap"
					width="100%"
					max-width="860px"
					sm-flex-direction="column"
				>
					<Components.CardTestimonials>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Claire-Bell.webp?v=2020-11-23T18:55:53.694Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Claire-Bell-2x.webp?v=2020-11-23T18:56:11.834Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Claire-Bell.webp?v=2020-11-23T18:55:53.694Z 1x" />
						<Override slot="text">
							Claire Bell
						</Override>
						<Override slot="text1">
							Designer
						</Override>
						<Override slot="text2">
							I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!
						</Override>
					</Components.CardTestimonials>
					<Components.CardTestimonials>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Francisco-Lane.webp?v=2020-11-23T18:56:21.087Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Francisco-Lane-2x.webp?v=2020-11-23T18:56:49.574Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Francisco-Lane.webp?v=2020-11-23T18:56:21.087Z 1x" />
						<Override slot="text">
							Francisco Lane
						</Override>
						<Override slot="text1">
							Coder
						</Override>
						<Override slot="text2">
							You're just awesome! The prices are reasonable and the service is just great. Thank you so much! Highly recommend!
						</Override>
					</Components.CardTestimonials>
					<Components.CardTestimonials>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Ralph-Fisher.webp?v=2020-11-23T18:57:30.722Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Ralph-Fisher-2x.webp?v=2020-11-23T18:57:48.176Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Ralph-Fisher.webp?v=2020-11-23T18:57:30.722Z 1x" />
						<Override slot="text">
							Ralph Fisher
						</Override>
						<Override slot="text1">
							Coder
						</Override>
						<Override slot="text2">
							A friend of mine advised you to me and I definetely liked working with you. It was a good experience. Thanks a lot!
						</Override>
					</Components.CardTestimonials>
					<Components.CardTestimonials>
						<Override slot="image" src="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Jorge-Murphy.webp?v=2020-11-23T18:57:57.404Z" srcSet="https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Jorge-Murphy-2x.webp?v=2020-11-23T18:58:20.939Z 2x,https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/user-pic-Jorge-Murphy.webp?v=2020-11-23T18:57:57.404Z 1x" />
						<Override slot="text">
							Jorge Murphy
						</Override>
						<Override slot="text1">
							Designer
						</Override>
						<Override slot="text2">
							You did an amazing job and I wholeheardly recommend you to everyone I know. You are the best!
						</Override>
					</Components.CardTestimonials>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="CTA" background="--dark" padding="80px 0 80px 0" sm-padding="0 0 0 0">
			<Box
				quarkly-title="Content"
				display="flex"
				overflow-x="hidden"
				overflow-y="hidden"
				border-radius="24px"
				md-flex-direction="column"
				sm-border-radius={0}
			>
				<Box
					quarkly-title="Header"
					width="50%"
					background="#343434"
					padding="7% 5.5% 7% 5.5%"
					md-width="100%"
					md-padding="72px 0 72px 0"
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					sm-padding="60px 0 60px 0"
				>
					<Text
						quarkly-title="Title"
						font="normal 400 3.5vw/1.2 --fontFamily-googleInter"
						letter-spacing=".2px"
						color="--lightText"
						margin="0px 0px 36px 0px"
						md-font="--headline2"
						md-text-align="center"
						md-max-width="520px"
						sm-font="--headline3"
						sm-max-width="400px"
					>
						OpenType features
						<br />
						and Variable fonts
					</Text>
					<Components.Button1 padding="12px 64px 12px 64px">
						Try For Free
					</Components.Button1>
				</Box>
				<Box
					quarkly-title="Image"
					flex="0 0 auto"
					width="50%"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb64c8108b41a001fec523b/images/cta-image.webp?v=2020-11-23T19:12:57.584Z) 0% 0% /cover no-repeat scroll padding-box"
					md-width="100%"
					md-height="360px"
					sm-height="320px"
				/>
			</Box>
		</Section>
		<Section
			quarkly-title="Map"
			background="--dark"
			padding="100px 0 80px 0"
			md-padding="60px 0 80px 0"
			sm-padding="30px 0 0 0"
		>
			<Box
				quarkly-title="Content"
				display="flex"
				flex-direction="column"
				align-items="center"
				width="100%"
				position="relative"
			>
				<GoogleMap height="560px" md-height="440px" sm-height="320px" />
				<Box
					quarkly-title="Overlay"
					position="absolute"
					left={0}
					right={0}
					top={0}
					bottom={0}
					background="--color-secondary1"
					opacity=".5"
					mix-blend-mode="multiply"
				/>
			</Box>
		</Section>
		<Section quarkly-title="Footer" background="--dark" padding="100px 0 80px 0">
			<Box quarkly-title="Content" display="flex" md-flex-direction="column">
				<Box
					quarkly-title="Links"
					display="flex"
					width="50%"
					md-width="100%"
					md-max-width="520px"
					md-margin="0px 0px 80px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 0px 0px"
				>
					<Box quarkly-title="Column" width="100%" md-margin="0px 0px 0px 12px" sm-margin="0px 0px 54px 12px">
						<Text font="--title" letter-spacing=".1px" color="--lightText" margin="16px 0px 24px 0px">
							Product
						</Text>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Overview
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Features
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Roadmap
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Pricing
						</Link>
					</Box>
					<Box quarkly-title="Column" width="100%" md-margin="0px 0px 0px 12px" sm-margin="0px 0px 54px 12px">
						<Text font="--title" letter-spacing=".1px" color="--lightText" margin="16px 0px 24px 0px">
							About
						</Text>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Overview
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Team
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Vacancy Jobs
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Awards
						</Link>
					</Box>
					<Box quarkly-title="Column" width="100%" md-margin="0px 0px 0px 12px" sm-margin="0px 0px 54px 12px">
						<Text font="--title" letter-spacing=".1px" color="--lightText" margin="16px 0px 24px 0px">
							Contact
						</Text>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Head Office
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Subsidiaries
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Support
						</Link>
						<Link
							href="#"
							font="--link"
							letter-spacing=".2px"
							text-decoration-line="initial"
							color="--lightText"
							display="block"
							margin="0px 0px 20px 0px"
							opacity=".7"
							transition="--opacity"
							hover-opacity="1"
						>
							Feedback
						</Link>
					</Box>
				</Box>
				<Box quarkly-title="Contacts" width="50%" md-width="100%" md-max-width="520px">
					<Box quarkly-title="Item" display="flex" align-items="center" margin="0px 0px 10px 0px">
						<Icon
							category="fi"
							icon={FiMapPin}
							flex="0 0 auto"
							width="50px"
							height="50px"
							size="30px"
							color="--secondary1"
						/>
						<Text
							font="--link"
							letter-spacing=".2px"
							color="--lightText"
							margin="0px 0px 0px 0px"
							padding="12px 8px 12px 8px"
						>
							65406 Briarwood Road San Francisco CA
						</Text>
					</Box>
					<Box quarkly-title="Item" display="flex" align-items="center" margin="0px 0px 10px 0px">
						<Icon
							category="md"
							icon={MdPhoneAndroid}
							flex="0 0 auto"
							width="50px"
							height="50px"
							size="30px"
							color="--secondary1"
						/>
						<Text
							font="--link"
							letter-spacing=".2px"
							color="--lightText"
							margin="0px 0px 0px 0px"
							padding="12px 8px 12px 8px"
						>
							<Link href="tel:4178651442" color="--lightText" text-decoration-line="initial">
								417-868-1442
							</Link>
						</Text>
					</Box>
					<Box quarkly-title="Socials" margin="18px 0px 0px 0px">
						<Link
							href="#"
							color="--lightText"
							transition="--color"
							padding="12px 12px 12px 12px"
							display="inline-block"
							hover-color="--secondary1"
						>
							<Icon category="fa" icon={FaTwitter} size="30px" />
						</Link>
						<Link
							href="#"
							color="--lightText"
							transition="--color"
							padding="12px 12px 12px 12px"
							display="inline-block"
							hover-color="--secondary1"
						>
							<Icon category="fa" icon={FaFacebookSquare} size="30px" />
						</Link>
						<Link
							href="#"
							color="--lightText"
							transition="--color"
							padding="12px 12px 12px 12px"
							display="inline-block"
							hover-color="--secondary1"
						>
							<Icon category="fa" icon={FaLinkedin} size="30px" />
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});