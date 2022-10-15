import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import FormField from './FormField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm({ isPressed, setPressed, data, setData }) {
  const handleClose = () => setPressed(false);

  return (
    <div>
      <Modal
        open={isPressed}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <FormField handleClose={handleClose} data={data} setData={setData} />
        </Box>
      </Modal>
    </div>
  );
}
