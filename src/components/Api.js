// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function Api() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:8000/getChartData');
//         setData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from Backend</h1>
//       {/* <div>
      
//       </div>
//       {loading && <p>Loading data...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {!loading && !error && (
//         <ul>
//           {data.map((item) => (
//             <li key={item._id}>{item.title}  </li>
            

//           ))}
//         </ul>
//       )} */}
//     </div>
//   );
// }

// export default Api;
