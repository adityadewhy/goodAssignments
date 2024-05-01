import React from "react";
import {useNavigate} from "react-router-dom";

export default function Phone() {
	const navigate = useNavigate();
	const handleClick = (event) => {
		const phoneEl = document.getElementById("phone");
		const enteredNum = phoneEl.value;
		if (enteredNum.length == 10) {
			navigate("/otp");
			//console.log("good input"); useNavigate here to teleport to otp page
		} else {
			alert("incorrect phone format");
		}
	};

	return (
		<div>
			<h1>Login via OTP</h1>

			<input
				type="tel"
				id="phone"
				name="phoneNumber"
				placeholder="enter you phone number"
			/>
			<input
				type="button"
				id="phoneSubmitButton"
				onClick={handleClick}
				value="submit"
			/>
		</div>
	);
}
