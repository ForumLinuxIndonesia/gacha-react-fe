import React from "react";
import Banner from "../components/Banner";
import Header from "../components/pages/Header";
import RecommendedFor from "../components/RecommendedFor";

function Home() {
	return (
		<div className="main">
			<Header />
			<Banner />
			<RecommendedFor />
		</div>
	);
}

export default Home;
