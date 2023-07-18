import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { TbCalendarCheck } from "react-icons/tb";

const ReserveConcertDialog = ({ visible, setVisible }) => {
	const [value, setValue] = useState(null);
	const items = [
		{ name: "Option 1", value: 1 },
		{ name: "Option 2", value: 2 },
		{ name: "Option 3", value: 3 },
	];

	const renderIcon = () => {
		return <TbCalendarCheck className="mr-1" />;
	};

	const footerContent = () => {
		return (
			<div>
				<Button
					label="No"
					icon="pi pi-times"
					onClick={() => setVisible(false)}
					className="p-button-text"
				/>
				<Button
					label="Reserve"
					icon={renderIcon}
					className="border bg-primaryGreen border-primaryGreen hover:!bg-lime-600 hover:!border-lime-600"
					onClick={() => setVisible(false)}
					autoFocus
				/>
			</div>
		);
	};
	return (
		<Dialog
			header="Make a Reservation"
			visible={visible}
			position="bottom"
			className="w-[100vw] sm:w-[100vw] md:w-[40vw] lg:w-[30vw]"
			onHide={setVisible}
			footer={footerContent}
			draggable={false}
			resizable={false}
		>
			<div>
				<form>
					<div className="form-group">
						<label
							htmlFor="concert_name"
							className="block mb-2 text-sm font-medium text-left text-gray-900"
						>
							Select Concert Hall / City / Time
						</label>
						<select
							id="city"
							className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50`}
							defaultValue="Choose a concert hall"
						>
							{/* <option selected>Choose a country</option> */}
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
				</form>
			</div>
		</Dialog>
	);
};

export default ReserveConcertDialog;
