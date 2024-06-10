import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
 
} from "@fortawesome/free-solid-svg-icons";
import FilterSortComponent from "./FilterSortComponent";
import BookingDetail from "./BookingDetails";

const ViewAllBookings = () => {
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 5;

  const bookings = [
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },
    {
      id: "#HD2107304810",
      bookingName: "Nguyen, Shane",
      dateAndTime: "16/08/2013 04:05 p.m.",
      categoryAndDestination: "Honeymoon & Munnar",
      packages: "Munnar : Honeymoon package",
      price: "₹ 7500",
      status: "Confirmed",
      paymentStatus: "completed",
    },

   
    
  ];

  const toggleExportDropdown = () => {
    setIsExportDropdownOpen(!isExportDropdownOpen);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  
  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${
            currentPage === page ? "bg-[#157939] text-[#FFFFFF]" : "bg-[#F5F5F5] text-[#101010]"
          }  px-3 py-1 rounded-sm`}
        >
          {page}
        </button>
      )
    );
  };

  return (
  <div className="bg-[#F2F4F8] p-6 ">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-medium text-[#000000]">Bookings</h1>
          <h2 className="text-lg font-normal text-[#B8B8B8]">
            View all Bookings
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Booking ID, Date, Package, Plan"
              className="w-72 h-8 p-2 pl-10 bg-[#F2F2F2] text-[#BABABA] text-xs font-normal rounded-lg focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080]"
            />
          </div>
          <div className="relative z-10">
            <button
              onClick={toggleExportDropdown}
              className="w-[100px] h-9 p-2 border border-[#A8A8A8]  rounded-md bg-none text-[#414141] text-sm font-normal flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src="export-icon.png"
                  alt="Export Icon"
                  className="mr-1 w-3 h-4"
                />
                Export
              </div>
              <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
            </button>
            {isExportDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                <ul className="py-1">
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    All Pages
                  </li>
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    Current Page
                  </li>
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center relative">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    Pages
                    <input
                      type="text"
                      placeholder="1-3,5"
                      className="absolute right-4 w-16 h-6 px-2 border-l bg-[#EBEBEB] text-xs font-normal text-[#A5A5A5] outline-none"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <FilterSortComponent />
        <div className="relative mt-6">
         <img src="sort-icon.png" alt="" onClick={toggleSortDropdown} className="cursor-pointer" />
         <span className="text-[#787878] text-[10px] curser-pointer">Sort</span>
          {isSortDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#FFFFFF]  rounded-md shadow-md">
              <div className="px-4 py-2">
                <label className="flex items-center cursor-pointer text-[#302F2F] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name=""
                    value=""
                    onChange={() => handleSortChange("option1")}
                    className="mr-2 text-[#49454F] "
                  />
                  Numerically
                </label>
                <label className="flex items-center cursor-pointer text-[#818181] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name="sortOption"
                    value="option2"
                    onChange={() => handleSortChange("option2")}
                    className="mr-2"
                  />
                  Last Updated
                </label>
                <label className="flex items-center cursor-pointer text-[#818181] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name=""
                    value=""
                    onChange={() => handleSortChange("option3")}
                    className="mr-2"
                  />
                 First Updated
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <table className=" divide-y ">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#BABABA] uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Booking ID
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Booking Date & Time
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Categories & Destination
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Packages
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Price
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Booking Status
              </th>
              <th className="px-6 py-2 text-left text-xs font-semibold text-[#BABABA]  tracking-wider whitespace-nowrap">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-8   rounded-md ">
            {currentBookings.map((booking) => (
              <BookingDetail key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="space-x-2 flex items-center">
          {renderPaginationButtons()}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-base font-normal text-[#B0B0B0]">1-5 of 200 results</div>
      </div>
    </div>
  );
};

export default ViewAllBookings;
