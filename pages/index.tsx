import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Components
import { AppProps } from "next/app";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Image from "../components/Image";
import Loader from "../components/Loader";

const Index = () => {
	const [loading, setLoading] = useState(true);

	return (
		<AnimatePresence>
			{loading ? (
				<motion.div key={"loader"}>
					<Loader setLoading={setLoading} />
				</motion.div>
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
		</AnimatePresence>
	);
};

export default Index;
