import React, { useState } from "react";
import {
  faChevronDown,
  faChevronUp,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookingDetail = ({ booking }) => {
  const [status, setStatus] = useState("Confirmed");
  const [paymentStatus, setPaymentStatus] = useState("Completed");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const togglePaymentDropdown = () => {
    setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsStatusDropdownOpen(false);
  };

  const handlePaymentStatusChange = (newPaymentStatus) => {
    setPaymentStatus(newPaymentStatus);
    setIsPaymentDropdownOpen(false);
  };

  return (
    <tr className="relative h-24 mb-6 rounded-md">
      <td className="px-6  whitespace-nowrap">
        <input type="checkbox" />
      </td>
      <td className="whitespace-nowrap text-sm text-[#222222] font-semibold">
        <div>{booking.id}</div>
        <div className="mt-1 text-[#787878] text-sm font-normal">
          {booking.bookingName}
        </div>
      </td>
      <td className="px-6 py-8 whitespace-nowrap text-sm text-[#222222] font-normal">
        <div>{booking.dateAndTime.split(" ")[0]}</div>
        <div className="mt-1 text-[#787878] text-sm font-normal">
          {booking.dateAndTime.split(" ")[1]}
        </div>
      </td>
      <td className="px-6  whitespace-nowrap text-sm text-[#222222] font-normal">
        {booking.categoryAndDestination}
      </td>
      <td className="px-6  whitespace-nowrap text-sm text-[#222222] font-normal">
        {booking.packages}
      </td>
      <td className="px-6  whitespace-nowrap text-sm text-[#222222] font-semibold">
        {booking.price}
      </td>
      <td className="whitespace-nowrap text-sm relative">
        <div className="relative z-10">
          <button
            onClick={toggleStatusDropdown}
            className={`p-2 rounded-md bg-[#157939] text-[#FAFAFA] px-4 ml-4 text-sm font-normal flex items-center justify-between`}
          >
            {status}{" "}
            {isStatusDropdownOpen ? (
              <FontAwesomeIcon icon={faChevronUp} className="ml-2" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            )}
          </button>
          {isStatusDropdownOpen && (
            <div className="absolute bg-[#F2F2F2] text-[#222222] text-sm font-normal rounded-md shadow-md">
              <ul className="py-1">
                <li
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleStatusChange("Cancelled")}
                >
                  Cancelled
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="text-xs text-[#BABABA] font-normal italic absolute bottom-0 left-20 mb-2">
          Synced 1 hour ago at 4:50 pm
        </div>
      </td>
      <td className="whitespace-nowrap text-sm">
        <div className="relative z-10">
          <button
            onClick={togglePaymentDropdown}
            className={`p-2 rounded-md bg-none text-[#157939] text-sm font-normal px-6 ml-2 flex items-center justify-between`}
          >
            {paymentStatus}{" "}
            {isPaymentDropdownOpen ? (
              <FontAwesomeIcon icon={faChevronUp} className="ml-2" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            )}
          </button>
          {isPaymentDropdownOpen && (
            <div className="absolute z-10 bg-[#F2F2F2] rounded-md shadow-md">
              <ul className="py-1">
                <li
                  className="px-4 py-2 cursor-pointer text-[#FF0000] text-sm font-normal"
                  onClick={() => handlePaymentStatusChange("Pending")}
                >
                  Pending
                </li>
              </ul>
            </div>
          )}
        </div>
      </td>
      <td className="relative z-10">
      <button onClick={toggleMenu} className="absolute -top-2 right-1 p-2  rounded-md ">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-36 bg-[#FFFFFF] rounded-md shadow-md">
            <ul className="py-1">
              <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                <img src="edit-icon.png" alt="" className="mr-2 ml-2" />
                Edit
              </li>
              <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                <img src="share-icon.png" alt="" className="mr-2 ml-1" />
                Share
              </li>
              <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                <img src="details-icon.png" alt="" className="mr-2 ml-1" />
                View Details
              </li>
              <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                <img src="delete-icon.png" alt="" className="mr-2 ml-1" />
                Delete
              </li>
            </ul>
          </div>
        )}
      </td>
    </tr>
  );
};

export default BookingDetail;
