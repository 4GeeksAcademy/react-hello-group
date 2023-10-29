import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Card } from "./Card";
import { Jumbo } from "./Jumbo";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbo />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
