import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import "./Slot.css";

function Slot() {
  const [data, setData] = useState([]);
  const [dData, setDdata] = useState([]);
  const [cData, setCData] = useState("");
  const [center, setCenter] = useState([]);
  const [Date, setDate] = useState("");
  let [condition, setCondition] = useState("");

  const getState = async () => {
    const response = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    );
    const res = await response.json();
    setData(await res.states);
  };
  const getdist = async (e) => {
    const alldist = e.target.value;

    const dResponse = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + alldist
    );
    const dRes = await dResponse.json();
    setDdata(await dRes.districts);
  };

  const getcenter = (s) => {
    setCData(s.target.value);
  };
  console.log(cData);

  const getdate = (d) => {
    const zz = d.target.value;

    let q = zz[0];
    let w = zz[1];
    let e = zz[2];
    let r = zz[3];
    let t = zz[4];
    let y = zz[5];
    let u = zz[6];
    let i = zz[7];
    let p = zz[8];
    let a = zz[9];
    let final = p + a + i + y + u + t + q + w + e + r;
    setDate(final);
  };
  let conditionValue = (
    <h3 class="card shadow border-radius-4 text-center prime2 text-danger p-3 mt-5">
      No Data Found
    </h3>
  );
  const handlesubmit = () => {
    const dist_id = cData;
    const date = Date;

    const data = async () => {
      const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${dist_id}&date=${date}`;
      const respons = await fetch(url);
      const res = await respons.json();
      setCenter(await res.centers);
      setCondition(conditionValue);
    };
    data();
  };

  console.log(center);

  useEffect(() => {
    getState();
    getdist();
  }, []);

  if (center.length > 0) {
    condition = <div>
      {center.map((final) => {
        return (
          <>
            
            <div class="container mt-1 mb-1 text-center data prime1">
              <div class="row mt-1 first ">
                <div class="col-md-3"></div>
                <div class="col-md-6 card item">
                  <h4 class="pb- pt-2 allfont">Center Name : {final.name}</h4>
                  <h5 class=" allfont">Center Address : {final.address}</h5>
                  <h5 class="allfont">Start-Time : {final.from} AM </h5>
                  <h5 class="allfont ">End-Time : {final.to} PM </h5>
                </div>
              </div>
            </div>
            <div class="container-fluid card   mt-1 px-2 py-2 prime1">
              <div class="row text-center">
                {final.sessions.map((session) => {
                  return (
                    <div class="col-md-3 mt-2  col-10 ">
                      <div class="card border shadow border-radius-5 prime2  mt-1 ml-1 ">
                        <h4 class="allfont text-warning">
                          Date :{session.date}{" "}
                        </h4>
                        <h5 class="allfont text-dark border border-radius-5 shadow prime1 card">
                          Type : {session.vaccine}
                        </h5>
                        <h6>Min-Age : {session.min_age_limit}</h6>
                        <h6>Max-Age : {session.max_age_limit}</h6>
                        {session.slots.map((slot) => {
                          return (
                            <>
                              <h6>Slot Time : {slot.time}</h6>
                              <h5>Available :{slot.seats} </h5>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
      </div>
    
  }

  return (
    <>
    <Navbar/>
      <div class="container-fluid total">
        <div class="container card border shadow border-radius-5 mt-3  box2">
          <form action="#" class="" onSubmit={handlesubmit}>
            <div class="row">
            <h1 class="h1 mb-0 text-gray-800 font-weight-bolder text-dark text-center allfont"> Search Your Nearest Vaccination Center  </h1>
              <div class="row-md-4 mt-2  ">
                <select
                  name=""
                  class="form-control"
                  onChange={(e) => getdist(e)}
                >
                  <option value="">Select state Here</option>
                  {data.map((final, index) => {
                    return (
                      <option key={index} value={final.state_id} id="state-id">
                        {final.state_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="row-md-4 mt-2" >
                <select
                  name=""
                  id=""
                  class="form-control"
                  onChange={(s) => getcenter(s)}
                >
                  <option value="">Select District Here...</option>
                  {dData.map((dfinal) => {
                    return (
                      <option value={dfinal.district_id}>
                        {dfinal.district_name}
                      </option>
                    );
                  })}
                  <option value=""></option>
                </select>
              </div>
              <div class="row-md-4 mt-2">
                <input
                  type="date"
                  class="form-control border"
                  placeholder="Select Date..."
                  id="searchDate"
                  onChange={(d) => getdate(d)}
                />
              </div>
            </div>
            <div class="row text-center mt-1">
              <div class="col-md-12">
                <button type="submit" class="btn btn-secondary text-light " id="search">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {condition}
    </>
  );
}
export default Slot;