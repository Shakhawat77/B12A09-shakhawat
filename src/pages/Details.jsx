import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const ServiceDetails = () => {
  const [service, setService] = useState(null);


  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => String(item.serviceId) === id);
        setService(selected);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) {
    return (
      <p className="text-center mt-10 text-lg text-sky-700">
        Loading service details...
      </p>
    );
  }

 return (
  <div className="bg-sky-50 min-h-screen flex flex-col justify-between">
    <div className="p-8 flex-1">
      <div className="flex flex-col md:flex-row gap-6 items-start max-w-5xl mx-auto"> 
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/3 h-96 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-800">{service.serviceName}</h2>
          <p className="text-sky-700 mt-4 text-lg md:text-xl">Provider Name: {service.providerName}</p>
          <p className="text-sky-700 mt-4 text-lg md:text-xl">Provider Email: {service.providerEmail}</p>
          <p className="text-sky-700 mt-4 text-lg md:text-xl">Slot Availabe: {service.slotsAvailable}</p>
           <p className="text-sky-700 mt-4 text-lg md:text-xl">Service Category: {service.category}</p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-2xl font-bold text-sky-800">${service.price}</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-500 text-sm">Rating</p>
              <p className="text-2xl font-bold text-yellow-500">{service.rating} ✯</p>
            </div>
          </div>
        </div>
      </div>     

      <div className="mt-12 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-sky-800 mb-4">Details & Tips</h3>
        <p className="text-sky-700 leading-relaxed text-lg md:text-xl">{service.description}</p>
      </div>
    </div>

    <div className="w-full flex justify-center pb-20">
      <NavLink to={'/'}>
        <button className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition text-lg md:text-xl">
          Go Back
        </button>
      </NavLink>
    </div>
  </div>
);

};

export default ServiceDetails;
