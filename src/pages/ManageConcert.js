import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { MenuButton, BackButton } from "../components";

const ManageConcert = () => {
	const [concerts, setConcerts] = useState([
		{
			name: "Concert 1",
			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
			band: "Band 1",
			artist: "Artist 1",
			total_seats: 100,
			status: "active",
		},
	]);
	const [globalFilterValue, setGlobalFilterValue] = useState("");
	const [filters, setFilters] = useState(null);

	const initFilters = () => {
		setFilters({
			global: { value: null, matchMode: FilterMatchMode.CONTAINS },
			name: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
			description: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
			band: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
			artist: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
			total_seats: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
			},
			status: {
				operator: FilterOperator.AND,
				constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
			},
		});
		setGlobalFilterValue("");
	};

	useEffect(() => {
		initFilters();
	}, []);

	const formatConcertName = (concert) => {
		return (
			<div className="flex item-center gap-2">
				<img
					className="w-16 h-16 rounded-full"
					src="https://picsum.photos/500/500"
					alt="Bonnie image"
				/>
				<span className="font-bold flex items-center">{concert.name}</span>
			</div>
		);
	};

	const formatConcertStatus = (concert) => {
		return (
			<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
				{concert.status}
			</span>
		);
	};

	const concertAction = (concert) => {
		return (
			<a href="#" className="font-medium text-red-600 hover:underline text-sm">
				remove
			</a>
		);
	};

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters["global"].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const renderHeader = () => {
		return (
			<div className="flex justify-end">
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						type="search"
						id="default-search"
						className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-primaryGreen focus:border-primaryGreen"
						placeholder="Search Concert..."
					/>
				</div>
			</div>
		);
	};

	const header = renderHeader();

	return (
		<div className="w-full h-screen relative px-5 md:px-10">
			<section className="flex flex-col items-center justify-start h-full py-10 text-center md:justify-center md:py-0">
				<h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
					<MenuButton></MenuButton>
					MANAGE CONCERTS
				</h1>

				<section className="concert-list mt-5">
					<div className="block w-full bg-white border border-gray-200 rounded-lg shadow">
						<DataTable
							value={concerts}
							paginator
							rows={5}
							rowsPerPageOptions={[5, 10, 25, 50]}
							tableStyle={{ minWidth: "60rem" }}
							stripedRows
							filters={filters}
							globalFilterFields={["name", "description", "band", "artist", "status"]}
							header={header}
							emptyMessage="No concert found."
						>
							<Column body={formatConcertName} header="Name of Concert"></Column>
							<Column header="Description" field="description"></Column>
							<Column field="band" header="Band Name"></Column>
							<Column field="artist" header="Artist"></Column>
							<Column field="total_seats" header="Total Seats"></Column>
							<Column header="Status" body={formatConcertStatus}></Column>
							<Column header="Action" body={concertAction}></Column>
						</DataTable>
					</div>
				</section>
			</section>

			<BackButton></BackButton>
		</div>
	);
};

export default ManageConcert;
