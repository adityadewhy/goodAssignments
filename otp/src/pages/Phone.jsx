export default function Phone() {
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

const handleClick = (event) => {
	const phoneEl = document.getElementById("phone");
	const enteredNum = phoneEl.value;
	if (enteredNum.length == 10) {
		
		//console.log("good input"); useNavigate here to teleport to otp page
	} else {
		alert("incorrect phone format");
	}
};
