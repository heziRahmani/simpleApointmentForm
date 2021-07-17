import React from "react";

//importing icon from react-icons
import { BiCaretDown, BiSearch } from "react-icons/all";
import { DropDown } from "./dropdown";

import { useState } from "react";

export const Search = ({ queryValue, onSearch, orderBy, onChengeOrder,sortBy,onChengeSort}) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <>
          <input
            type="text"
            name="query"
            id="query"
            onChange={(event) => onSearch(event.target.value)}
            value={queryValue}
            className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
            placeholder="Search"
          />
        </>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              onClick={() => settoggle(!toggle)}
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <BiCaretDown className="ml-2" />
            </button>
            {toggle ? <DropDown 
            orderBy={orderBy}
            onChengeOrder={uesrOrder=> onChengeOrder(uesrOrder)}
            sortBy={sortBy} onChengeSort={sort=>onChengeSort(sort)}/> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
