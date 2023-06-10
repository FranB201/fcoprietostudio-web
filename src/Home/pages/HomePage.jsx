import { Typography } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical } from "../components"


export const HomePage = () => {
  return (

        <HomeLayout>

        <div className="row">
            <div className="col-12 col-md-4">
                <CardVertical />
            </div>
            <div className="col-12 col-md-4">
                <CardVertical />
            </div>
            <div className="col-12 col-md-4">
                <CardVertical />
            </div>
        </div>


         </HomeLayout>


    )
}
