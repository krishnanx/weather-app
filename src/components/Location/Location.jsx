import React, { useContext, useEffect } from "react";
import axios from "axios";
import { LocError } from "../contexts/LocDataErrorContext";
export const fetchLocation = async (setLocDataError, setLocData, setCity) => {
  try {
    console.log("bye");
    // await window.navigator.geolocation.getCurrentPosition(async (pos) => {
    //   const response = pos.coords;
    //   const latitude = response.latitude;
    //   const longitude = response.longitude;
    //   setLocDataError(false);
    //   console.log(latitude, longitude);
    //   const my_city = await fetchCity(latitude, longitude, setCity);
    //   console.log(my_city)
    // });
    const position = await new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    const my_city = await fetchCity(latitude, longitude, setCity);
    console.log(my_city)
    setLocDataError(false);
    return my_city

    // function success(pos){

    // }
    //setLocData([latitude,longitude]);
    //console.log( response.latitude)
    //return response.latitude;
  } catch (error) {
    setLocDataError(true);
  }
};
const fetchCity = async (latitude, longitude, setCity) => {
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
    params: {
      lat: latitude,
      lon: longitude,
      zoom: "10",
      addressdetails: "1",
      namedetails: "0",
      "accept-language": "en",
      format: "json",
      polygon_text: "0",
      polygon_kml: "0",
      polygon_svg: "0",
      polygon_geojson: "0",
      polygon_threshold: "0.0",
      limit: "1",
    },
    headers: {
      "x-rapidapi-key": "29e6a1db93msh191be716fad43cap1fc71djsne404d206cc14",
      "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const position = response.data.address.city;
    setCity(position)
    console.log(position);
    return position;
    // console.log(response.data.address.city);
  } catch (error) {
    console.error(error);
  }
};
