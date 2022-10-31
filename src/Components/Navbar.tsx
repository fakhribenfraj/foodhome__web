import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, RangeKeyDict } from "react-date-range";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "./Logo";

type NavbarProps = {
  searchPlaceholder?: string;
};
function Navbar({ searchPlaceholder = "start your search" }: NavbarProps) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges: RangeKeyDict) => {
    if (ranges?.selection?.startDate)
      setStartDate(ranges?.selection?.startDate);
    if (ranges?.selection?.endDate) setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-8">
      <div
        onClick={() => router.push("/")}
        className="relative h-10 cursor-pointer my-auto overflow-hidden"
      >
        <Logo />
      </div>
      <div className="flex items-center focus-within:shadow-lg md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={searchPlaceholder}
          className=" truncate flex-grow pl-5 bg-transparent outline-none placeholder-gray-400 text-sm text-gray-600"
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-primary-main text-white rounded-full p-2 cursor-pointer
                md:mx-2"
        />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-cenetr bg-primary-main text-gray-100 cursor-pointer border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#8dc73f"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              placeholder="guest number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(+e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-primary-main"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 hover:bg-primary-main rounded-xl hover:text-white p-1"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-primary-main hover:bg-primary-main rounded-xl hover:text-white p-1"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
