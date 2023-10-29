import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Card } from "./Card";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
      <Navbar />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
