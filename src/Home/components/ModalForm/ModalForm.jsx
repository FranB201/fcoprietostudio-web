import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'; // Importa el componente TextField de Material UI
import prietoStudioDB from '../../../api/prietoStudioDB';
import "../../styles/ModalFormStyle.css"



export const ModalForm = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario


    // Definimos los datos que queremos enviar
    const data = {
      email: email,
      name: name,
      phone: phone,
      surname: surname
    };

    console.log(data);
    // Enviamos la petición POST
    prietoStudioDB.post('/submitForm', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log('Formulario enviado con éxito');
      setSubmitted(true);
    }).catch(error => {
      console.error('Hubo un error al enviar el formulario: ', error);
    });
    




    console.log({ email, name, phone, surname });
    
  }

  // Este efecto se ejecutará cuando se monte el componente
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 20000); // Abre el modal después de 12 segundos (12000 milisegundos)

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
      <div>
        <button className="button-section-nutrition " onClick={handleOpen}>¡Empezar mi plan hoy!</button>
      </div>



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
/*           width: '100%',
 */          position: 'relative', // Añadimos esta propiedad para poder posicionar absolutamente el ícono de cierre
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
            <TextField label="Correo" variant="filled" color="secondary" value={email} onChange={e => setEmail(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
            <TextField label="Nombre" variant="filled" color="secondary" value={name} onChange={e => setName(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue' } }} />
            <TextField label="Apellido" variant="filled" color="secondary" value={surname} onChange={e => setSurname(e.target.value)} required InputLabelProps={{ style: { color: 'lightblue' } }} InputProps={{ style: { color: 'lightblue', autoComplete: 'off' } }} />
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
          {submitted && <p style={{ color: 'green' }}>¡Solicitud enviada correctamente!</p>}
        </Box>
      </Modal>
    </div>
  );
}
