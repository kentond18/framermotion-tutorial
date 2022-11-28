import { useEffect, useState } from "react";

// Components
import { AppProps } from "next/app";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Image from "../components/Image";
import Loader from "../components/Loader";

const Index = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(true);

	return (
		<div>
			{loading ? (
				<Loader setLoading={setLoading} />
			) : (
				<>
					<Header />
					<Banner />
					{!loading && (
						<div className="transition-image final">
							<Image
								alt="Transition Image"
								src={`/images/image-2.jpg`}
								fallback={`/images/image-2.webp`}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Index;
