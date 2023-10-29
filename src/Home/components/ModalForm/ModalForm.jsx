import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import prietoStudioDB from '../../../api/prietoStudioDB';
import '../../styles/ModalFormStyle.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const initialState = {
  open: false,
  email: '',
  name: '',
  phone: '',
  surname: '',
  submitted: false,
};

export const ModalForm = () => {
  const [formData, setFormData] = React.useState(initialState);

  const handleOpen = () => setFormData({ ...formData, open: true });
  const handleClose = () => setFormData(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      surname: formData.surname,
    };
    const MySwal = withReactContent(Swal);

    prietoStudioDB
      .post('/submitForm', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        MySwal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Gracias! Pronto nos pondremos en contacto contigo',
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData(initialState);
        setFormData({ ...formData, submitted: true });
      })
      .catch((error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha ido mal!',
          footer: 'Pongase en contacto con nostros: 693 02 32 21 ',
        });
        console.error('Hubo un error al enviar el formulario: ', error);
        handleClose();
      });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const commonInputProps = {
    style: {
      color: 'lightblue',
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '10px',
      border: 'none',
      paddingLeft: '10px',
    },
  };

  return (
    <div>
      <div>
        <button className="button-section-nutrition " onClick={handleOpen}>
          ¡Empezar mi plan hoy!
        </button>
      </div>

      <Modal
        open={formData.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={modalStyle}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          boxShadow: 24,
          p: 4,
          position: 'relative',
        }}>
          <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 20, top: 20, cursor: 'pointer', color: 'white' }} />
          <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom sx={{ color: 'white', fontWeight:'bold' }}>
            ¿AÚN NO ERES MIEMBRO?
          </Typography>
          <Typography id="modal-modal-description" variant="h5" component="p" gutterBottom sx={{ color: 'white' }}>
            Consigue ya tu semana gratis de entrenamiento.
          </Typography>

          <form className="form" onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '1em',
            marginTop: '1em',
            width: '80%',
          }}>
            <TextField
              label="Correo"
              variant="filled"
              color="secondary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              InputLabelProps={{
                style: {
                  color: 'lightblue',
                },
              }}
              InputProps={commonInputProps}
            />

            <TextField
              label="Nombre"
              variant="filled"
              color="secondary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              InputLabelProps={{
                style: {
                  color: 'lightblue',
                },
              }}
              InputProps={commonInputProps}
            />

            <TextField
              label="Apellido"
              variant="filled"
              color="secondary"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              required
              InputLabelProps={{
                style: {
                  color: 'lightblue',
                },
              }}
              InputProps={{
                ...commonInputProps,
                autoComplete: 'off',
              }}
            />

            <TextField
              label="Teléfono"
              variant="filled"
              color="secondary"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              InputLabelProps={{
                style: {
                  color: 'lightblue',
                },
              }}
              InputProps={commonInputProps}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5em' }}>
              <span style={{ marginRight: '10px' }}>
                <button type="submit" className="buttonSend" variant="contained" >Enviar</button>
              </span>
              <span>
                <button onClick={handleClose} className="buttonCancel" variant="contained" >Cancelar</button>
              </span>
            </div>
          </form>
          {formData.submitted && <p style={{ color: 'green' }}>¡Solicitud enviada correctamente!</p>}
        </Box>
      </Modal>
    </div>
  );
};
