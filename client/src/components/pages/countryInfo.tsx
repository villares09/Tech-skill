import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "store/storeHooks";
import { useParams } from 'react-router-dom';
import { checkBorderCountries } from 'store/createTurnDisponible/createSlice';
import { RootState } from "store/store";

const CountryInfo = () => {
  const dispatch = useAppDispatch();
  const { code } = useParams();
  const countryInfo = useAppSelector((state: RootState) => state.create.countryBorder)
  useEffect(() => {
    dispatch(checkBorderCountries(code));
  }, [code]);

  if (!countryInfo) return <div>Loading...</div>;
  console.log(countryInfo)
  return (
    <div>
      <h1>{countryInfo.commonName}</h1>
      <img src={countryInfo.flag} alt={`${countryInfo.commonName} flag`} />
      <h2>Border Countries:</h2>
      <ul>
        {countryInfo?.borders?.map(border => (
          <li key={border}>{border}</li>
        ))}
      </ul>
      <h2>Population Over Time:</h2>
      {/* Implement the population chart here */}
    </div>
  );
};

export default CountryInfo;