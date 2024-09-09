import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "store/storeHooks";
import { getCountry } from 'store/createTurnDisponible/createSlice';
import { RootState } from "store/store";


const CountryList = () => {
  const dispatch = useAppDispatch();
  
  const countries = useAppSelector((state: RootState) => state.create.countryAvailable)

  return (
    <div>
      <h1>Available Countries</h1>
      <ul>
        {countries?.map(country => (
          <li key={country.countryCode}>
            <a href={`/country/${country.countryCode}`}>{country.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;