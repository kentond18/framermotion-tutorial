import { motion, Variants } from "framer-motion";
import React, { useEffect } from "react";
import { container, item } from "../animation/variants";
import Image from "./Image";

const Loader = ({ setLoading }: { setLoading: (val: boolean) => void }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);
		return () => clearTimeout(timer);
	});

	return (
		<div className="loader">
			<motion.div
				className="loader-inner"
				variants={container}
				initial="hidden"
				animate="show"
				exit="exit"
			>
				<ImageBlock variants={item} id="image-1" />
				<div className="transition-image">
					<Image
						src={`/images/image-2.jpg`}
						fallback={"/images/image-2.webp"}
						alt="random alt"
					/>
				</div>
				<ImageBlock variants={item} id="image-3" />
				<ImageBlock variants={item} id="image-4" />
				<ImageBlock variants={item} id="image-5" />
			</motion.div>
		</div>
	);
};

export const ImageBlock = ({
	id,
	variants,
}: {
	id: string;
	variants: Variants;
}) => {
	return (
		<motion.div className={`image-block ${id}`} variants={variants}>
			<Image
				src={`/images/${id}.webp`}
				fallback={`/images/${id}.jpg`}
				alt={id}
			/>
		</motion.div>
	);
};
export default Loader;
