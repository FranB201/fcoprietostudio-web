import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import prietoStudioDB from '../../../api/prietoStudioDB';

export const FormOnly = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      name: name,
      phone: phone,
      surname: surname
    };

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
  }

   return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom>
        ¿AÚN NO ERES MIEMBRO?
      </Typography>
      <Typography id="modal-modal-description" variant="h5" component="p" gutterBottom  color="primary">
        Consigue ya tu semana gratis de entrenamiento.
      </Typography>

      <form className="form" onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1em',
        marginTop: '1em',
        width: '60%',
      }}>
        <TextField label="Correo" variant="filled" color="secondary" value={email} onChange={e => setEmail(e.target.value)} required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
        <TextField label="Nombre" variant="filled" color="secondary" value={name} onChange={e => setName(e.target.value)} required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
        <TextField label="Apellido" variant="filled" color="secondary" value={surname} onChange={e => setSurname(e.target.value)} required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
        <TextField label="Teléfono" variant="filled" color="secondary" value={phone} onChange={e => setPhone(e.target.value)} required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5em' }}>
          <span style={{ marginRight: '10px' }}>
            <button type="submit" className="buttonSend" variant="contained" >Enviar</button>
          </span>
          <span>
            <button className="buttonCancel" variant="contained" >Cancelar</button>
          </span>
        </div>
      </form>
      {submitted && <p style={{ color: 'green', textAlign: 'center' }}>¡Solicitud enviada correctamente!</p>}
    </div>
  );
}