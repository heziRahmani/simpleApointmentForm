import React from "react";

//importing icon from react-icons
import { GoCalendar, BiTrash, BiCheck } from "react-icons/all";

import { Search } from "./search";
import "../index.css";
import { Appointment } from "./Appointment";

//sempel data to check avriting works
// import appointmentsList from "../data/sempelData.json"
import AppointementInfo from "./appointementsInfo";

//
import { useState, useEffect, useCallback } from "react";

export const Interface_one = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [stopRendering, setStopRendering] = useState(true);
  const [queryValue, setQueryValue] = useState("");
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("petName");
  

  //gives the option to feche from a local resorse
  const fecheFromFile = useCallback(() => {
    fetch("./data/sempelData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointmentsList(data);
        setStopRendering(!stopRendering);
      });
  }, []);

  useEffect(() => {
    fecheFromFile();
  }, [fecheFromFile]);

  const filterdList = appointmentsList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(queryValue.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(queryValue.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(queryValue.toLowerCase())
      );
    })
    .sort((a, b) => {
        console.log(orderBy,sortBy);
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  return (
    <div className="conteiner mx-auto mt-3 font-semibold  ">
      <GoCalendar className="inline" />
      <h2 className="text-red-400 inline m-5">This is your interface</h2>
      <Appointment 
      onSaveAppointement={newApoointement=>setAppointmentsList([...appointmentsList,newApoointement])} lastIndex={appointmentsList.reduce((max,item)=>Number(item.id)>max?Number(item.id):max,0)}
      />
      <Search
        orderBy={orderBy}
        onChengeOrder={userOrder => setOrderBy(userOrder)}
        sortBy={sortBy} onChengeSort={userSort=>setSortBy(userSort)}
        queryValue={queryValue}
        onSearch={(userQuery) => setQueryValue(userQuery)}
        
      />

      <ul className="divid-y divid-grey-400">
        {filterdList.map((appointement) => (
          <AppointementInfo
            key={appointement.id}
            appointement={appointement}
            deleteAppo={(appointementId) =>
              setAppointmentsList(
                appointmentsList.filter(
                  (appointement) => appointement.id !== appointementId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
};
