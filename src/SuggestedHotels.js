import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SuggestedHotels({ country, hotel, setHotel }) {
  let hotels = [];

  if (country === 'Египет') hotels = ['Albatros', 'Rixos', 'Le jardin'];
  if (country === 'Турция') hotels = ['Grand Elite', 'Asteria', 'Justiniano'];
  if (country === 'ОАЭ') hotels = ['Raddison', 'Mercure', 'Le meridien'];
  if (country === 'Тунис') hotels = ['El Mouradi', 'Movanpick', 'Carmela'];
  if (country === 'Индия') hotels = ['Rajasthan', 'Grand Hyatt', 'Raddison'];
  if (country === 'Вьетнам') hotels = ['MerPerle', 'V hotel', 'Armiana'];

  const handleChange = event => {
    setHotel(event.target.value);
  };

  let renderHotels;

  if (hotels.length > 0)
    renderHotels = hotels.map(h => <MenuItem value={h}>{h}</MenuItem>);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Отель</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={hotel}
        label="Отель"
        onChange={handleChange}>
        {renderHotels}
      </Select>
    </FormControl>
  );
}
