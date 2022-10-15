import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ChangeCountry({ country, setCountry }) {
  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Cтрана</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={country}
        label="Страна"
        onChange={handleChange}>
        <MenuItem value="Египет">Египет</MenuItem>
        <MenuItem value="Турция">Турция</MenuItem>
        <MenuItem value="ОАЭ">ОАЭ</MenuItem>
        <MenuItem value="Тунис">Тунис</MenuItem>
        <MenuItem value="Индия">Индия</MenuItem>
        <MenuItem value="Вьетнам">Вьетнам</MenuItem>
      </Select>
    </FormControl>
  );
}
