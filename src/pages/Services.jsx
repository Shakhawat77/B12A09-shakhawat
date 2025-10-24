import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [activeId, setActiveId] = useState(null); 
  const [bookedServices, setBookedServices] = useState([]);

  const handleBookClick = (serviceId) => {
    if (bookedServices.includes(serviceId)) {
      toast("Already Booked");
      return;
    }
    setActiveId(serviceId);
  };

  const handleSubmit = (serviceId, name, email) => {
   
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      toast("Please give correct information");
      return;
    }

    setBookedServices([...bookedServices, serviceId]);
    setActiveId(null);
    toast("Booking successful");
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='bg-sky-50'>
      <div className="max-w-7xl mx-auto px-4 py-30">
        <h2 className="flex justify-center text-3xl font-bold text-sky-800 mb-6 pb-10">
          Popular Winter Care Services
        </h2>

        <div className="flex flex-col items-center gap-10">
          {services.map((service) => {
            const isBooked = bookedServices.includes(service.serviceId);
            return (
              <div
                key={service.serviceId}
                className="bg-white rounded-xl shadow-md overflow-hidden w-8/12"
              >
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-78 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-sky-800">
                    {service.serviceName}
                  </h3>
                     <p className="text-sky-700 mt-4 text-lg md:text-sm"><span className='font-semibold'>Provider Name:</span> {service.providerName}</p>
         
          <p className="text-sky-700 my-4 text-lg md:text-sm"><span className='font-semibold'>Slot Availabe:</span> {service.slotsAvailable}</p>
           
                  <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-sky-600">{service.rating}</span>
                  </div>
                  <p className="text-sky-700 font-semibold mt-2">${service.price}</p>

                  <button
                    onClick={() => handleBookClick(service.serviceId)}
                    className={`mt-3 w-full font-medium py-2 rounded-md transition ${
                      isBooked
                        ? "bg-gray-400 text-white"
                        : "bg-sky-300 text-sky-800 hover:bg-sky-400"
                    }`}
                  >
                    {isBooked ? "Booked" : "Book Now"}
                  </button>

                  {activeId === service.serviceId && !isBooked && (
                    <fieldset className="fieldset bg-base-100 w-8/12 mx-auto p-6 mt-4">
                      <label className="label mt-4">Name</label>
                      <input 
                        type="text" 
                        className="input h-12 w-full" 
                        placeholder="Enter Your Name" 
                        id={`name-${service.serviceId}`}
                      />
                      <label className="label mt-4">Email</label>
                      <input 
                        type="email" 
                        className="input h-12 w-full" 
                        placeholder="Email" 
                        id={`email-${service.serviceId}`}
                      />
                      <button
                        onClick={() => {
                          const name = document.getElementById(`name-${service.serviceId}`).value;
                          const email = document.getElementById(`email-${service.serviceId}`).value;
                          handleSubmit(service.serviceId, name, email);
                        }}
                        className="btn btn-neutral mt-6 w-full py-3 bg-sky-300 text-sky-800 border-none"
                      >
                        Submit
                      </button>
                    </fieldset>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Services;
