import { useState } from "react";
import "./App.scss";
import PricingComponent from "./components/PricingMain";

function App() {
	return (
		<main className="app">
			<section className="introsection">
				<h1>Simple, traffic-based pricing</h1>
				<p>Sign-up for our 30-day trial. No credit card required.</p>
			</section>
			<PricingComponent />
		</main>
	);
}

export default App;
