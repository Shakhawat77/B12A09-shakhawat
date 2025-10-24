import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams(); // getting unique param (id)
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => {
        const matchedService = data.find((item) => item.id == serviceId);
        setService(matchedService);
      });
  }, [serviceId]);

  if (!service) return <p>Loading...</p>;

  return (
    <div>
      <h2>{service.title}</h2>
      <img src={service.image} alt="" />
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
    </div>
  );
};

export default Details;
<h2>ghskdfgskdghsgf</h2>;
