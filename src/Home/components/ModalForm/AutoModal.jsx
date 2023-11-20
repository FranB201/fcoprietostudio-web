import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import prietoStudioDB from '../../../api/prietoStudioDB';
import '../../styles/ModalFormStyle.css';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const initialState = {
  open: false,
  email: '',
  name: '',
  phone: '',
  surname: '',
  submitted: false,
  acceptPrivacity: false
};
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^\d{7,14}$/;

export const AutoOpenModal = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [autoOpened, setAutoOpened] = React.useState(false); // Nuevo estado para controlar si se abrió automáticamente
  const MySwal = withReactContent(Swal);
  const handleClose = () => {
    setFormData(initialState);
    setAutoOpened(false); // Restablecer el estado de autoOpened
  };  

  const [checked, setChecked] = React.useState(false); // Nuevo estado para el checkbox

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
  
    // Actualizar el estado de errores
    if (checked) {
      const newErrors = { ...errors };
      delete newErrors.acceptCookies; // Asumiendo que 'acceptCookies' es la llave para el error del checkbox
      setErrors(newErrors);
    } else {
      setErrors({ ...errors, acceptCookies: 'Debes aceptar la política de privacidad.' });
    }
  };
  
  
  const handleOpen = () => {
    // Solo establecer como abierto automáticamente si aún no está abierto
    if (!formData.open) {
      setAutoOpened(true);
    }
    setFormData({ ...formData, open: true });
  };
  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!emailRegex.test(value)) {
          return 'Correo electrónico inválido.';
        }
        break;
      case 'phone':
        if (!phoneRegex.test(value)) {
          return 'Número de teléfono inválido.';
        }
        break;
      case 'acceptPrivacity':
      if (!value) {
        return 'Debes aceptar la política de privacidad.';
      }
      break;
      default:
        break;
    }
    return '';
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      surname: formData.surname,
    };
 
    if (!checked) {
      setErrors({ ...errors, acceptCookies: 'Debes aceptar la política de privacidad.' });
      return;
    }
    if (Object.values(errors).some(error => error) && !checked) {
      let title="";

       return;
    } else {
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
          timer: 2500,
        });
        setFormData(initialState);
        setFormData({ ...formData, submitted: true });
        handleClose();
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

    }

  };

  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const commonInputProps = {
    style: {
      color: 'lightblue',
      background: '#FFFFFF40',
      border: 'none',
      paddingLeft: '10px',
    },
  };

  useEffect(() => {
    // Abre el modal automáticamente al montar el componente
    handleOpen();
  }, []); // Sin dependencias para que solo se ejecute una vez
  return (
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
              name="email"
              variant="filled"
              color="secondary"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email ? errors.email : null}
              required
              InputLabelProps={{
                style: { color: 'lightblue' },
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
              name="phone"
              variant="filled"
              color="secondary"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone : null}
              required
              InputLabelProps={{
                style: { color: 'lightblue' },
              }}
              InputProps={commonInputProps}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name="acceptPrivacity"
                  color="primary"
                  sx={{
                    color: 'white', // Esto cambia el color cuando el checkbox no está seleccionado
                    '&.Mui-checked': {
                      color: 'white', // Esto cambia el color del checkbox cuando está seleccionado
                    },
                    '& .MuiSvgIcon-root': { // Cambia el color del borde del icono
                      color: 'white',
                      borderColor: 'white',
                      '&:not(.Mui-checked)': {
                        borderColor: 'white',
                      },
                    },
                  }}
                />
              }
              label="He leido y acepto la política de privacidad y el uso de mis datos para recibir la información solicitada."
            />
            {errors.acceptCookies && (
              <Typography variant="caption" style={{ color: 'red', fontSize: '0.75rem' }}>
                {errors.acceptCookies}
              </Typography>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5em' }}>
                <button type="submit" className="buttonSendForm" variant="contained" >Enviar</button>
              <span>
              </span>
            </div>
          </form>
        </Box>
      </Modal>
  );
};
