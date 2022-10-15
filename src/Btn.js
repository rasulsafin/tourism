import './OrderBtn.css';
import './DbBtn.css';

export default function Btn({ type, setPressed, setShowDbPressed }) {
  return (
    <button
      className={type === 'order' ? 'OrderBtn' : 'DbBtn'}
      onClick={() =>
        type === 'order' ? setPressed(true) : setShowDbPressed(true)
      }>
      {type === 'order' ? 'Заказать полёт' : 'Показать список клиентов'}
    </button>
  );
}
