import {useEffect, useRef} from "react";

export default function Otp() {
	//useEffect hook can be used here, on first render focus on id=1 , dependency of useEffect should be on keypress , everytime a key is pressed, focus on id+1 input box till it reaches id=4
	let currentFocus = 0;

	const id1Ref = useRef("null");
	const id2Ref = useRef("null");
	const id3Ref = useRef("null");
	const id4Ref = useRef("null");

	useEffect(() => {
		id1Ref.current.focus();
		currentFocus++;
	}, []);

	useEffect(() => {
		if (id1Val.length > 0) {
			id2Ref.current.focus();
		}
	}, [id1Val]);

	useEffect(() => {
		if (id2Val.length > 0) {
			id3Ref.current.focus();
		}
	}, [id2Val]);

	useEffect(() => {
		if (id3Val.length > 0) {
			id4Ref.current.focus();
		}
	}, [id3Val]);

	return (
		<div class="grid grid-rows-3 gap-4 place-items-center bg-gray-600">
			<p>enter the otp below</p>
			<div id="boxes" class="grid grid-cols-4">
				<input
					type="text"
					id="1"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
					value={id1Val}
					ref={id1Ref}
				/>
				<input
					type="text"
					id="2"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
					value={id2Val}
					ref={id2Ref}
				/>
				<input
					type="text"
					id="3"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
					value={id3Val}
					ref={id3Ref}
				/>
				<input
					type="text"
					id="4"
					class="m-3 h-10 w-10 overflow-hidden color-black text-center"
					value={id4Val}
					ref={id4Ref}
				/>
			</div>
			<button
				id="otpSubmitButton"
				value="submitOtp"
				class="bg-blue-400 text-white rounded-full p-2 m-2"
			>
				Submit OTP
			</button>
		</div>
	);
}
