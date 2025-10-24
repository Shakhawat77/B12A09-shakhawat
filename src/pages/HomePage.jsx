import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { Navigate, NavLink } from "react-router";

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 pb-30">
    
      <div className="mb-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
        >
          {services.slice(0, 3).map((service) => (
            <SwiperSlide key={service.serviceId}>
              <div className="relative h-96 w-full">
                <img
                  src={service.image}
                  alt={""}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-5 left-5 bg-white/70 p-4 rounded-md">
                  <h2 className="text-xl font-bold text-sky-800">Wellcome to Our Pets Care Website</h2>
                  <p className="text-sky-700">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-800 mb-6">Popular Winter Care Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.serviceId} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-sky-800">{service.serviceName}</h3>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-sky-600">{service.rating}</span>
                </div>
                <p className="text-sky-700 font-semibold mt-2">${service.price}</p>
              <NavLink to={`/Details/${service.serviceId}`} key={service.serviceId}>
                  <button
    onClick={() => {
      if (user) {
        Navigate(`/Details/${service.serviceId}`);
      } else {
        Navigate("/Singin", { state: { from: `/Details/${service.serviceId}` } });
      }
    }}
    className="mt-3 w-full bg-sky-300 text-sky-800 font-medium py-2 rounded-md hover:bg-sky-400 transition"
  >
    View Details
  </button>
              </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-sky-800 mb-6">Winter Care Tips for Pets</h2>
        <ul className="list-disc pl-5 text-sky-700 space-y-2">
          <li>Keep your pets warm with cozy sweaters and blankets.</li>
          <li>Protect paws from ice and salt by using paw wax or boots.</li>
          <li>Ensure they have enough food and water to maintain energy.</li>
          <li>Regular grooming to prevent matting and skin issues.</li>
        </ul>
      </div>


      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-sky-800 mb-6">Meet Our Expert Vets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4">
            <img
              src="https://i.ibb.co.com/tpXtJW4s/download.jpg"
              alt=""
              className="w-32 h-32 rounded-2xl
               mx-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-sky-800 mt-4">Dr. Emily Parker</h3>
            <p className="text-sky-700">Pet Nutrition Specialist</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4">
            <img
              src="https://i.ibb.co.com/CG7y6V6/Pet-doctor-Stock-Photo-02.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-2xl object-cover"
            />
            <h3 className="text-lg font-semibold text-sky-800 mt-4">Dr. Shakhawat Hossain</h3>
            <p className="text-sky-700">Grooming & Skin Care</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4">
            <img
              src="https://i.ibb.co.com/9FWQyrN/21087839741649319434.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-2xl object-cover"
            />
            <h3 className="text-lg font-semibold text-sky-800 mt-4">Dr. Sarah Lee</h3>
            <p className="text-sky-700">General Veterinary Care</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4">
            <img
              src="https://i.ibb.co.com/zTBdHcx0/Vital-Care-04-0267-Non-Non-Compete13-1675120214406.webp"
              alt=""
              className="w-32 h-32 mx-auto rounded-2xl object-cover"
            />
            <h3 className="text-lg font-semibold text-sky-800 mt-4">Dr. Michael Brown</h3>
            <p className="text-sky-700">Pet Behaviorist</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
