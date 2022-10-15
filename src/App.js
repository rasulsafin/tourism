import { useState } from 'react';

import './App.css';

import Typography from '@mui/material/Typography';

import Btn from './Btn';
import ModalForm from './ModalForm';
import ShowDb from './ShowDb';

function App() {
  const [data, setData] = useState([
    {
      name: 'Федор',
      surname: 'Достоевский',
      patronymic: 'Андреевич',
      age: '36',
      country: 'Турция',
      hotel: 'Asteria',
    },
    {
      name: 'Екатерина',
      surname: 'Ивановна',
      patronymic: 'Дмитриева',
      age: '24',
      country: 'Тунис',
      hotel: 'Movanpick',
    },
    {
      name: 'Мария',
      surname: 'Малышева',
      patronymic: 'Олеговна',
      age: '35',
      country: 'Вьетнам',
      hotel: 'V hotel',
    },
  ]);

  const [pressed, setPressed] = useState(false);
  const [showDbPressed, setShowDbPressed] = useState(false);

  return (
    <>
      <Typography sx={{ textAlign: 'center' }} variant="h2" gutterBottom>
        Туристическая фирма
      </Typography>

      <Btn type="order" setPressed={setPressed} />
      <Btn type="not-order" setShowDbPressed={setShowDbPressed} />

      <ModalForm
        isPressed={pressed}
        setPressed={setPressed}
        data={data}
        setData={setData}
      />
      <ShowDb data={data} showDbPressed={showDbPressed} />
    </>
  );
}

export default App;
