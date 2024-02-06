import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 6,
    // borderRadious: 20
  };
  
const ContactUsModal = (props:any) => {
    const {open, setOpen,handleOpen,handleClose} = props
    // const [isModalOpen, setIsModalOpen] = useState(true);

    // const showModal = () => {
    //   setIsModalOpen(true);
    // };
  
    // const handleOk = () => {
    //   setIsModalOpen(false);
    // };
  
    // const handleCancel = () => {
    //   setIsModalOpen(false);
    // };

    return (
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='flex justify-center mb-5 w-full'>
                <img src="../..//meh/modaltop.png" alt="" />
            </div>
          <div className='text-center flex justify-center flex-col w-full items-center text-sm'>
            <p>سفارش شما با موفقیت ثبت شد</p>
            <p>کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت</p>
            <p>از اطمینان شما متشکریم </p>
            </div>

          </Box>
        </Modal>
      </div>
    );
};

export default ContactUsModal;