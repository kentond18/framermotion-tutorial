import React from "react";

const Image = ({
	src,
	fallback,
	type = "image/webp",
	alt,
}: {
	src: string;
	fallback: string;
	type?: string;
	alt: string;
}) => {
	return (
		<picture>
			<source srcSet={src} type={type} />
			<img src={fallback} alt={alt} />
		</picture>
	);
};

export default Image;
