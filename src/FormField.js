import { useState } from 'react';

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import ChangeCountry from './ChangeCountry';
import SuggestedHotels from './SuggestedHotels';
export default function FormField({ handleClose, data, setData }) {
  const [country, setCountry] = useState('');
  const [hotel, setHotel] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [age, setAge] = useState('');

  const onButtonClick = () => {
    setData([
      ...data,
      {
        name: name,
        surname: surname,
        patronymic: patronymic,
        age: age,
        country: country,
        hotel: hotel,
      },
    ]);
    handleClose();
  };

  return (
    <>
      <TextField
        label="Имя"
        variant="outlined"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <TextField
        label="Фамилия"
        variant="outlined"
        onChange={e => setSurname(e.target.value)}
        value={surname}
      />
      <TextField
        label="Отчество"
        variant="outlined"
        onChange={e => setPatronymic(e.target.value)}
        value={patronymic}
      />
      <TextField
        label="Возраст"
        variant="outlined"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <ChangeCountry country={country} setCountry={setCountry} />
      <SuggestedHotels country={country} hotel={hotel} setHotel={setHotel} />
      <Button variant="contained" onClick={onButtonClick}>
        Подтвердить
      </Button>
    </>
  );
}
