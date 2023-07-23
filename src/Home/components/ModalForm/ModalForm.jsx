import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'; // Importa el componente TextField de Material UI




export const ModalForm = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log({email, name, phone});
      }
  
    // Este efecto se ejecutará cuando se monte el componente
    React.useEffect(() => {
      const timer = setTimeout(() => {
        handleOpen();
      }, 12000); // Abre el modal después de 12 segundos (12000 milisegundos)

      // Limpieza en caso de que el componente se desmonte antes de que pase el tiempo
      return () => clearTimeout(timer);
    }, []);

    const modalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

    return (
        <div>
        <button className="button-section-nutrition mt-5" onClick={handleOpen}>¡Empezar mi plan hoy!</button>
  
        {/*<div className="button-container">
          <a onClick={handleOpen} className="join-now text-button-motivation-text">
            <span className="text-button-join-now">unete ahora</span>
            <ArrowRightAltIcon fontSize="large" />
          </a>
        </div>*/}
  
        <Modal
          open={open}
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            boxShadow: 24,
            p: 4,
            width: '100%',
            position: 'relative', // Añadimos esta propiedad para poder posicionar absolutamente el ícono de cierre
          }}>
            <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 20, top: 20, cursor: 'pointer', color: 'white' }} /> 
            <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom sx={{ color: 'lightblue' }}>
              ¿AÚN NO ERES MIEMBRO?
            </Typography>
            <Typography id="modal-modal-description" variant="h6" component="p" gutterBottom sx={{ color: 'lightblue' }}>
              Consigue ya, tu semana gratis de entrenamiento.
            </Typography>
  
            <form className="form" onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: '1em',
              marginTop: '1em',
              width: '80%',
            }}>
              <TextField label="Correo" variant="filled" color="secondary" value={email} onChange={e => setEmail(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
              <TextField label="Nombre" variant="filled" color="secondary" value={name} onChange={e => setName(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
              <TextField label="Apellido" variant="filled" color="secondary" value={surname} onChange={e => setSurname(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
              <TextField label="Teléfono" variant="filled" color="secondary" value={phone} onChange={e => setPhone(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5em' }}>
                <span style={{ marginRight: '10px' }}>
                    <button type="submit" className="buttonSend" variant="contained" >Enviar</button>
                </span>
                <span>
                <button onClick={handleClose} className="buttonCancel" variant="contained" >Cancelar</button>
                </span>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
}
