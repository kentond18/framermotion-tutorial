import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { banner, letterAnimation } from "../animation/variants";

const Banner = () => {
	const [playMarquee, setPlayMarquee] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPlayMarquee(true);
		}, 2000);
	}, []);
	return (
		<motion.div variants={banner} className="banner">
			<BannerRowTop title={"brand"} />
			<BannerRowCenter title={"experience"} playMarquee={playMarquee} />
			<BannerRowBottom title={"studio"} />
		</motion.div>
	);
};

const AnimatedLetters = ({
	title,
	disabled,
}: {
	title: string;
	disabled?: boolean;
}) => (
	<motion.span
		className="row-title"
		variants={disabled ? undefined : banner}
		initial="initial"
		animate="animate"
	>
		{title.split("").map((letter, i) => (
			<motion.span
				className="row-letter"
				key={i}
				variants={disabled ? undefined : letterAnimation}
			>
				{letter}
			</motion.span>
		))}
	</motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
	return (
		<div className={"banner-row"}>
			<div className="row-col">
				<AnimatedLetters title={title} />
			</div>
			<motion.div
				className="row-col"
				initial={{ opacity: 0, y: 80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeInOut",
					duration: 1,
					delay: 0.4,
				}}
			>
				<span className="row-message">
					We are specialised in setting up the foundation of your
					brand and setting you up for success.
				</span>
			</motion.div>
		</div>
	);
};

const BannerRowBottom = ({ title }: { title: string }) => {
	return (
		<div className={"banner-row center"}>
			<motion.div
				className="scroll"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 1,
					delay: 1,
				}}
			>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
				>
					scroll
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
				>
					down
				</motion.span>
			</motion.div>
			<AnimatedLetters title={title} />
		</div>
	);
};

const BannerRowCenter = ({
	title,
	playMarquee,
}: {
	title: string;
	playMarquee: boolean;
}) => {
	return (
		<div className={`banner-row marquee  ${playMarquee && "animate"}`}>
			<div className="marquee__inner">
				<AnimatedLetters title={title} disabled />
				<AnimatedLetters title={title} />
				<AnimatedLetters title={title} disabled />
				<AnimatedLetters title={title} disabled />
			</div>
		</div>
	);
};

export default Banner;
