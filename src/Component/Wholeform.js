import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Wholeform() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    document.getElementById(
      "imageholder"
    ).style.backgroundImage = `url(${image})`;
  });

  const getdata = (e) => {
    let id = e.target.id;
    let apiurl = `https://reqres.in/api/users/${id}`;
    axios
      .get(apiurl)
      .then((res) => {
        let id = res.data.data.id;
        let fname = res.data.data.first_name + " " + res.data.data.last_name;
        let emailid = res.data.data.email;
        let url = res.data.data.avatar;
        setData(id, fname, emailid, url);
      })
      .catch((error) => {
        alert("No Data Found");
      });
  };

  const setData = (id, fname, emailid, url) => {
    setName(fname);
    setEmail(emailid);
    setImage(url);
    setId(id);
    // const imageHolder = document.querySelector(".imageholder");
    // imageHolder.style.backgroundImage = `url(${image})`;
  };

  return (
    <>
      <div className="maindiv" id="maindiv">
        <div className="buttondiv" id="buttondiv">
          <button onClick={getdata} className="buttons" id="1">
            1
          </button>
          <button onClick={getdata} className="buttons" id="2">
            2
          </button>
          <button onClick={getdata} className="buttons" id="3">
            3
          </button>
          <button onClick={getdata} className="buttons" id="100">
            100
          </button>
          <p className="id">Id:- ${id} </p>
          <p className="Name">Name:- ${name}</p>
          <p className="Email_id">Email_id:-${Email} </p>
        </div>
        <div className="imageholder" id="imageholder"></div>
      </div>
    </>
  );
}
