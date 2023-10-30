import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Card } from "./Card";
import { Jumbo } from "./Jumbo";
// import { getOptions } from "eslint-webpack-plugin/declarations/options";


const Home = () => {
	let title = "Título"
	return (
		<div className="">
			<Navbar />
			<Jumbo />
			<div className="container text-center">
				<div className="row">
					<Card img={"https://picsum.photos/500/325"} title={"Card 1"} text={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "} btn={"Ver Imagen"} btnUrl={"#"} />
					<Card img={"https://picsum.photos/id/235/500/325"} title={"Card 2"} text={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "} btn={"Ver Imagen"} btnUrl={"#"} />
					<Card img={"https://picsum.photos/id/237/500/325"} title={"Card 3"} text={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "} btn={"Ver Imagen"} btnUrl={"#"} />
					<Card img={"https://picsum.photos/id/236/500/325"} title={"Card 4"} text={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "} btn={"Ver Imagen"} btnUrl={"#"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
