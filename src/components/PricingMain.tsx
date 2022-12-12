import "./Pricing.scss";

export default function PricingComponent() {
	return (
		<section className="pricing">
			<div className="top">
				<div className="pricesection">
					<div className="pageviews">100k pageviews</div>
					<div className="price">
						$16.00 <span className="per">/month</span>
					</div>
				</div>
				<input type="range" min={0} max={6} />
				<div className="paymentswitch">
					<label htmlFor="switch">Monthly Billing</label>
					<label className="switch" id="switch">
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
					<label>
						Yearly Billing <span className="discount">25% discount</span>
					</label>
				</div>
			</div>
			<hr />
			<div className="bottom">
				<ul>
					<li>Unlimited websites</li>
					<li>100% data ownership</li>
					<li>Email reports</li>
				</ul>
				<button className="starttrial">Start my trial</button>
			</div>
		</section>
	);
}
