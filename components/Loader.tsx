import React, { useEffect } from "react";
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
			<div className="loader-inner">
				<ImageBlock id="image-1" />
				<div className="transition-image">
					<Image
						src={`/images/image-2.jpg`}
						fallback={"/images/image-2.webp"}
						alt="random alt"
					/>
				</div>
				<ImageBlock id="image-3" />
				<ImageBlock id="image-4" />
				<ImageBlock id="image-5" />
			</div>
		</div>
	);
};

export const ImageBlock = ({ id }: { id: string }) => {
	return (
		<div className={`image-block ${id}`}>
			<Image
				src={`/images/${id}.webp`}
				fallback={`/images/${id}.jpg`}
				alt={id}
			/>
		</div>
	);
};
export default Loader;
