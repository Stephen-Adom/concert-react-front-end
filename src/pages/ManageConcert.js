import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { confirmDialog } from 'primereact/confirmdialog';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { MenuButton, BackButton } from '../components';
import { adminAllConcert, deleteConcert } from '../services/services';
import { setErrors, toggleLoading, authSelector } from '../features/storeSlice/authSlice';
import { concertSelector, setAllConcerts } from '../features/storeSlice/concertSlice';

const ManageConcert = () => {
  const dispatch = useDispatch();
  const { allConcerts } = useSelector(concertSelector);
  const { loading } = useSelector(authSelector);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
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
    setGlobalFilterValue('');
  };

  const fetchAllConcerts = () => {
    adminAllConcert()
      .then((response) => {
        dispatch(setAllConcerts(response));
      })
      .catch((error) => {
        dispatch(setErrors(error.response.data));
      });
  };

  useEffect(() => {
    initFilters();
    fetchAllConcerts();
  }, []);

  const formatConcertName = (concert) => (
    <div className="flex gap-2 item-center min-w-[250px]">
      <img className="w-16 h-16 rounded-full" src={concert.image} alt={concert.name} />
      <span className="flex items-center font-bold">{concert.name}</span>
    </div>
  );

  const formatConcertStatus = (concert) => (
    <span
      className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ${concert.active ? 'text-primaryGreen bg-lime-100' : 'text-red-600 bg-red-100'
      }`}
    >
      {concert.active ? 'Active' : 'Deleted'}
    </span>
  );

  const formatCreatedDate = (concert) => format(new Date(concert.created_at), 'PPP');

  const onGlobalFilterChange = (e) => {
    const { value } = e.target;
    const newFilters = { ...filters };

    newFilters.global.value = value;

    setFilters(newFilters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => (
    <div className="flex justify-end gap-2">
      {loading && (
      <div
        className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Info alert!</span>
          {' '}
          Deleting concert, please wait...
        </div>
      </div>
      )}

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

  const header = renderHeader();

  const confirmDeletion = (concert) => {
    confirmDialog({
      message: 'Do you want to delete this event?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(toggleLoading(true));
        deleteConcert(concert.id)
          .then(() => {
            dispatch(toggleLoading(false));
            toast.success('Selected Concert has been marked deleted', {
              position: 'top-center',
              duration: 4000,
            });
            fetchAllConcerts();
          })
          .catch((error) => {
            dispatch(toggleLoading(false));
            dispatch(setErrors(error.response.data));
          });
      },
    });
  };

  const concertAction = (concert) => {
    if (concert.active) {
      return (
        <button
          type="button"
          className="text-sm font-medium text-red-600 hover:underline"
          onClick={() => confirmDeletion(concert)}
        >
          Remove
        </button>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full h-screen px-5 md:px-10">
      <section className="flex flex-col items-center justify-start h-full py-10 text-center md:justify-center md:py-0">
        <h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
          <MenuButton />
          MANAGE CONCERTS (
          {allConcerts.length}
          )
        </h1>

        <section className="w-full mt-5 overflow-x-auto concert-list">
          <div className="block w-full bg-white border border-gray-200 rounded-lg shadow">
            <DataTable
              value={allConcerts}
              paginator
              rows={5}
              dataKey="id"
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: '60rem' }}
              stripedRows
              filters={filters}
              globalFilterFields={['name', 'description', 'band', 'artist', 'status']}
              header={header}
              emptyMessage="No concert found."
            >
              <Column body={formatConcertName} header="Name of Concert" />
              <Column header="Description" field="description" />
              <Column field="band" header="Band Name" />
              <Column field="artist" header="Artist" />
              <Column header="Status" body={formatConcertStatus} />
              <Column header="Published At" body={formatCreatedDate} />
              <Column header="Action" body={concertAction} />
            </DataTable>
          </div>
        </section>
      </section>

      <BackButton />
    </div>
  );
};

export default ManageConcert;
