import React from "react";
import { Table } from "flowbite-react";

const ConcertTableDetails = () => {
	return (
		<Table className="!drop-shadow-none table-container !rounded-none">
			<Table.Body className="divide-y">
				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white !rounded-none !py-3 text-xs">
						Name of Artist
					</Table.Cell>
					<Table.Cell className="!rounded-none !py-3 text-right text-gray-900 font-semibold text-xs">
						Sliver
					</Table.Cell>
				</Table.Row>

				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
						Name of Band
					</Table.Cell>
					<Table.Cell className="!py-3 text-xs text-right text-gray-900 font-semibold">
						Sliver
					</Table.Cell>
				</Table.Row>

				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
						Name of City
					</Table.Cell>
					<Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
						Sliver
					</Table.Cell>
				</Table.Row>

				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
						Date and Time
					</Table.Cell>
					<Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
						3rd July 2022 - 12:00 PM
					</Table.Cell>
				</Table.Row>

				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
						Total Seats
					</Table.Cell>
					<Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
						30
					</Table.Cell>
				</Table.Row>

				<Table.Row className="bg-white ">
					<Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
						Reserved Seats
					</Table.Cell>
					<Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
						15
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
};

export default ConcertTableDetails;
