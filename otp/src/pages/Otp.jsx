export default function Otp() {

    //useEffect hook can be used here, on first render focus on id=1 , dependency of useEffect should be on keypress , everytime a key is pressed, focus on id+1 input box till it reaches id=4



	return (
		<div class="grid grid-rows-3 gap-4 place-items-center bg-gray-600">
			<p>enter the otp below</p>
			<div id="boxes" class="grid grid-cols-4">
				<input
					type="text"
					id="1"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
				/>
				<input
					type="text"
					id="2"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
				/>
				<input
					type="text"
					id="3"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
				/>
				<input
					type="text"
					id="4"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
				/>
			</div>
			<button
				id="otpSubmitButton"
				value="submitOtp"
				class="bg-blue-400 text-white rounded-full p-2 m-2"
			>Submit OTP</button>
		</div>
	);
}
