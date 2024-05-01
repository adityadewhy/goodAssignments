import React from "react";
import {useNavigate} from "react-router-dom";

export default function Phone() {
	const navigate = useNavigate();
	const handleClick = (event) => {
		const phoneEl = document.getElementById("phone");
		const enteredNum = phoneEl.value;
		if (enteredNum.length == 10) {
			navigate("/otp");
		} else {
			alert("incorrect phone format");
		}
	};

	return (
		<div class="grid grid-rows-3 gap-4 place-items-center bg-gray-600">
				<h1>Login via OTP</h1>

				<input
					type="tel"
					id="phone"
					name="phoneNumber"
					placeholder="enter you phone number"
					//fix text color
				/>
				<input
					type="button"
					id="phoneSubmitButton"
					onClick={handleClick}
					value="submit"
					class="bg-blue-400"
				/>
			</div>
	);
}
