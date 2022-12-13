import { ChangeEvent, useEffect, useState } from "react";
import "./Pricing.scss";

const PAGE_VIEWS = ["10k", "50k", "100k", "500k", "1m"];
const PRICE_MONTHLY = [8, 12, 16, 24, 36];

function Switch({ toggleFunc }: { toggleFunc: Function }) {
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};

	useEffect(() => {
		toggleFunc(checked);
	}, [checked]);

	return (
		<div className="paymentswitch">
			<label htmlFor="switch">Monthly Billing</label>
			<label className="switch" id="switch">
				<input type="checkbox" onChange={handleChange} />
				<span className="slider round"></span>
			</label>
			<label className="yearly">
				Yearly Billing <span className="discount">25%</span>
			</label>
		</div>
	);
}

export default function PricingComponent() {
	const [isYearly, setIsYearly] = useState(true);
	const [sliderValue, setSliderValue] = useState(0);

	const [pageViews, setPageViews] = useState(PAGE_VIEWS[sliderValue]);
	const [price, setPrice] = useState(PRICE_MONTHLY[sliderValue]);

	const toggleIsYearly = (newVal: boolean) => {
		setIsYearly(() => {
			return newVal;
		});
	};

	const sliderChange = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setSliderValue(parseFloat(target.value));
	};

	useEffect(() => {
		setPageViews(() => {
			return PAGE_VIEWS[sliderValue];
		});
	}, [sliderValue]);

	useEffect(() => {
		setPrice(() => {
			if (isYearly)
				return PRICE_MONTHLY[sliderValue] - PRICE_MONTHLY[sliderValue] * 0.25;
			return PRICE_MONTHLY[sliderValue];
		});
	}, [sliderValue, isYearly]);

	return (
		<section className="pricing">
			<div className="top">
				<div className="pricesection">
					<div className="pageviews">{pageViews} pageviews</div>
					<div className="price">
						${price}.00{" "}
						<span className="per">/{isYearly ? "year" : "month"}</span>
					</div>
				</div>
				<input
					onChange={sliderChange}
					value={sliderValue}
					type="range"
					min={0}
					max={4}
				/>
				<Switch toggleFunc={toggleIsYearly} />
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
