import React from "react";
import { Table } from "flowbite-react";

const ConcertTableDetails = ({ concert }) => {
  return (
    <Table className="!drop-shadow-none table-container !rounded-none">
      <Table.Body className="divide-y">
        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap text-gray-900 font-semibold dark:text-white !rounded-none !py-3 text-xs">
            Name of Artist
          </Table.Cell>
          <Table.Cell className="!rounded-none !py-3 text-right text-gray-900 font-semibold text-xs">
            {concert.artist}
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
            Name of Band
          </Table.Cell>
          <Table.Cell className="!py-3 text-xs text-right text-gray-900 font-semibold">
            {concert.band}
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
            Name of City
          </Table.Cell>
          <Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
            {concert.city}
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
            Date and Time
          </Table.Cell>
          <Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
            {concert.date} - {concert.time}
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
            Total Seats
          </Table.Cell>
          <Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
            {concert.total_seats}
          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white !py-3 text-xs">
            Reserved Seats
          </Table.Cell>
          <Table.Cell className="!py-3 text-right text-gray-900 font-semibold text-xs">
            {concert.reserved_seats}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ConcertTableDetails;
