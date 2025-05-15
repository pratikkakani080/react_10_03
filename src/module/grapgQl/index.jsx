import React, { useEffect } from "react";
import { client } from "../../configs/apolloClient";
import { useQuery, gql } from "@apollo/client";
import { GET_LOCATIONS } from "../../queries/locations";

function GrapgQl() {
     const { loading, error, data } = useQuery(GET_LOCATIONS);
     console.log(loading, error, data);
     
//   useEffect(() => {
//     client
//       .query({
//         query: gql`
//           query GetLocations {
//             locations {
//               id
//               name
//             }
//           }
//         `,
//       })
//       .then((result) => console.log(result));
//   }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));;
}

export default GrapgQl;
