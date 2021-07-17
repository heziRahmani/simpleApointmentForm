import { BiCalendarPlus } from "react-icons/all";
import "../index.css";
import { useState } from "react";

export const Appointment = ({lastIndex,onSaveAppointement}) => {
  const [toggle, settoggle] = useState(false);

  const restForm = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptTime: "",
    aptDate: "",
  };

  function onSubmitForm () {
    let newform = {
      id:lastIndex+1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + " " + formData.aptTime,
    };

    onSaveAppointement(newform)
    setFormData(restForm)
  };
  const [formData, setFormData] = useState(restForm);

  return (
    <div>
      {/* //onclick toggle the visability of add appintemrnt button
        //the class name hase aternerif to chenge the btn style */}

      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md${
          toggle ? `rounded-t-md` : `rounded-md`
        }`}
        onClick={() => settoggle(!toggle)}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggle ? (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                id="ownerName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-black-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) =>
                  setFormData({ ...formData, ownerName: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                value={formData.petName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) =>
                  setFormData({ ...formData, petName: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) =>
                  setFormData({ ...formData, aptDate: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                value={formData.aptTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(event) =>
                  setFormData({ ...formData, aptTime: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                value={formData.aptNotes}
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={(event) =>
                  setFormData({ ...formData, aptNotes: event.target.value })
                }
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={onSubmitForm}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
