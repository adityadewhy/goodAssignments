export default function Otp() {
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
				onClick={handleClick}
				value="submit otp"
				class="bg-blue-400 text-white rounded-full p-2 m-2"
			></button>
		</div>
	);
}
