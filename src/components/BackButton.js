import React from "react";
import { BsCaretLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			type="button"
			className="absolute -translate-y-[50%] w-[40px] md:w-[60px] py-[16px] px-4 items-center flex z-10 top-[92%] md:top-[90%] left-0 rounded-tr-full rounded-br-full  justify-end bg-primaryGreen hover:bg-lime-600 focus:bg-lime-600"
		>
			<BsCaretLeft className="text-white stroke-1"></BsCaretLeft>
		</button>
	);
};

export default BackButton;
