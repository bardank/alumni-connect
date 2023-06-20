import React, { useState } from "react";

export default function BankDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="right w-1/2 h-auto mx-auto pt-8">
      <button
        className="dropdown-button bg-secondary  hover:bg-blue-700 text-white font-bold px-4 w-full py-4 rounded-3xl "
        onClick={toggleDropdown}
      >
        Click Here to get Bank Details
      </button>

      {isOpen && (
        <table className="account-table">
          <tbody>
            <tr className="border-2 border-black">
              <th className="border-2 border-black py-2 px-4">
                Sri Krishna Institute Of Technology:
              </th>
              <td className="py-2 px-4">Axis Bank</td>
            </tr>
            <tr className="border-2 border-black">
              <th className="border-2 border-black py-2 px-4">
                Account Number:
              </th>
              <td className="py-2 px-4">922010022457057</td>
            </tr>
            <tr className="border-2 border-black">
              <th className="border-2 border-black py-2 px-4">Account Name:</th>
              <td className="py-2 px-4">
                Sri Krishna Institute of Technology-Alumni
              </td>
            </tr>
            <tr className="border-2 border-black">
              <th className="border-2 border-black py-2 px-4">IFSC Code:</th>
              <td className="py-2 px-4">UTIB0002926</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
