import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import "../styles/HomeStyle.css"





export const NavBar = () => {
  return (

        <AppBar
            position="fixed"

            sx={{ 

                backgroundColor:'#1F92D1',
                height:100,
              

            }}

        >
       
            <Toolbar>
                <img src="../../src/assets/logo/LogoNavBar.png" alt="logo" className="NavBar-logo"/>

                <Grid container direction= 'row' justifyContent='flex-end'>
                    <Typography>Hola</Typography>
                    <Typography>Como empezar</Typography>
                    <Typography>Entrenamientos</Typography>
                    <Typography>Testimonios</Typography>


                </Grid>
            </Toolbar>
                


        </AppBar>

    )
}
