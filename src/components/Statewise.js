import React from "react";
import { useEffect, useState } from "react";
import "./Statewise.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
  };

  return (
    <>
      <div>
        <div className="container-fluid mt-5">
          <div className="main-heading">
            <h1 className="mb 5 text-center"> INDIA COVID-19 Dashboard</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>recovered</th>
                  <th>death</th>
                  <th>active</th>
                  <th>updated</th>
                </tr>
              </thead>
              <tbody>
                {data.map((curValue, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{curValue.state}</td>
                      <td>{curValue.confirmed}</td>
                      <td>{curValue.recovered}</td>
                      <td>{curValue.deaths}</td>
                      <td>{curValue.active}</td>
                      <td>{curValue.lastupdatedtime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Statewise;
