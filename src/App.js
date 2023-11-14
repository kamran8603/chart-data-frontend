// import React, { useState, useEffect } from "react";
// import Plot from "react-plotly.js";

// const fetchData = (url) => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
// };

// function App() {
//   const [plotData, setPlotData] = useState({});
//   const [layout, setLayout] = useState({});
//   const [selectedYear, setSelectedYear] = useState("All");
//   const [selectedTopic, setSelectedTopic] = useState("All");

//   useEffect(() => {
//     const url = `http://localhost:8000/getChartData?year=${selectedYear}&topic=${selectedTopic}`;

//     fetchData(url).then((data) => {
//       const plotlyData = data.map((item) => ({
//         x: [
//           "Intensity: " + item.intensity,
//           "Likelihood: " + item.likelihood,
//           "Relevance: " + item.relevance,
//           "Impact: " + item.impact,
//         ],
//         y: [item.intensity, item.likelihood, item.relevance, item.impact],
//         type: "bar",
       
//       }));

//       const plotlyLayout = {
//         title: "Data Visualization",
//         xaxis: { title: "Variables" },
//         yaxis: { title: "Values" },
//         barmode: "group",
//         height: 600,
//         width:1500,
//       };

//       setPlotData(plotlyData);
//       setLayout(plotlyLayout);
//     });
//   }, [selectedYear, selectedTopic]);

//   const handleYearChange = (event) => {
//     const selectedYear = event.target.value;
//     setSelectedYear(selectedYear);
//   };

//   const handleTopicChange = (event) => {
//     const selectedTopic = event.target.value;
//     setSelectedTopic(selectedTopic);
//   };

//   return (
//     <div className="App">
//       <div>
//         <label>Filter by Year: </label>
//         <select value={selectedYear} onChange={handleYearChange}>
//           <option value="All">All</option>
//           <option value="2017">2017</option>
//           <option value="2018">2018</option>
          
//         </select>
//       </div>

//       <div>
//         <label>Filter by Topic: </label>
//         <select value={selectedTopic} onChange={handleTopicChange}>
//           <option value="All">All</option>
//           <option value="Energy">Energy</option>
//           <option value="Technology">Technology</option>
//           {/* Add more options for topics */}
//         </select>
//       </div>

//       <Plot data={plotData} layout={layout} />
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

function App() {
  const [plotData, setPlotData] = useState([]);
  const [layout, setLayout] = useState({});
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");

  useEffect(() => {
    const url = `http://localhost:8000/getChartData?year=${selectedYear}&topic=${selectedTopic}`;

    fetchData(url)
      .then((data) => {
        if (Array.isArray(data)) {
          const plotlyData = data.map((item) => ({
            x: [
              "Intensity: " + item.intensity,
              "Likelihood: " + item.likelihood,
              "Relevance: " + item.relevance,
              "Impact: " + item.impact,
            ],
            y: [item.intensity, item.likelihood, item.relevance, item.impact],
            type: "bar",
          }));

          const plotlyLayout = {
            title: "Data Visualization",
            xaxis: { title: "Variables" },
            yaxis: { title: "Values" },
            barmode: "group",
            height: 600,
            width: 1500,
          };

          setPlotData(plotlyData);
          setLayout(plotlyLayout);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedYear, selectedTopic]);

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const handleTopicChange = (event) => {
    const selectedTopic = event.target.value;
    setSelectedTopic(selectedTopic);
  };

  return (
    <div className="App">
      <div>
        <label>Filter by Year: </label>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="All">All</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
        </select>
      </div>

      <div>
        <label>Filter by Topic: </label>
        <select value={selectedTopic} onChange={handleTopicChange}>
          <option value="All">All</option>
          <option value="Energy">Energy</option>
          <option value="Technology">Technology</option>
         
        </select>
      </div>

      <Plot data={plotData} layout={layout} />
    </div>
  );
}

export default App;
