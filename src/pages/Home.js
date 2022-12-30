import React from "react";
import Banner from "../components/Banner";
import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/pages/Footer";
import Header from "../components/pages/Header";
import RecommendedFor from "../components/RecommendedFor";
import Team from "../components/Team";

function Home() {
	return (
		<div className="main">
			<Header />
			<Banner />
			<RecommendedFor />
			<KeyFeatures />
			<Team />
			<Footer />
		</div>
	);
}

export default Home;
