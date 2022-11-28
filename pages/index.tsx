import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

// Components
import { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Image from "../components/Image";
import Loader from "../components/Loader";

const Index: NextPage = () => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<AnimateSharedLayout>
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
									<motion.img
										transition={{
											ease: [0.6, 0.01, -0.05, 0.9],
											duration: 1.6,
										}}
										alt="Transition Image"
										src={`/images/image-2.jpg`}
										layoutId="main-image-1"
									/>
								</div>
							)}
						</>
					)}
				</AnimatePresence>
			</AnimateSharedLayout>
		</>
	);
};

export default Index;
