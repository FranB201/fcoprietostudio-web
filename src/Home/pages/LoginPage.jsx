import React,{ useState } from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import { Login,SingUp } from '../components'
export const LoginPage = () => {

    const [showSignup, setShowSignup] = useState(false); // estado inicial es false para mostrar Login

    const handleClick = () => {
        setShowSignup(true); // cambia a Signup cuando se haga click
    }

    return (
        <HomeLayout>
            {/*<div className="d-flex justify-content-center align-items-center" style={{height: '100vh', backgroundColor:'white'}}>
                <Login></Login>
            </div>*/}

            {showSignup ? <SingUp /> : <Login onClickCreateAccount={handleClick}></Login>}
            


        </HomeLayout>
    )
}
