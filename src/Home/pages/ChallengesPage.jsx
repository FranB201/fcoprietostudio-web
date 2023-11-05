import React from 'react'
import { HomeLayout } from "../layout/HomeLayout"
import '../../../src/Home/styles/ChallengePageStyle.css';
import reto1 from "../../../src/assets/cardImages/PASTILLARETOsinfondo.png"
import ropesBg from "../../../src/assets/challengeImages/ropesbackground.jpg"
import { Height } from '@mui/icons-material';
import { fontWeight, height } from '@mui/system';
import CardFare from '../components/cardFare/CardFare';




export const ChallengesPage = () => {
    return (
        <HomeLayout>
            <div className="startRadialOnline">
                <div id="onlineFares" className="row">
                    <div className="col-12 mt-lg-3 h1CardverticalS">
                        <h2>Online</h2>
                    </div>
                </div>

                <div id="onlineFares" className="row">
                    <div className="col-4">
                        <CardFare />
                    </div>
                    <div className="col-4">
                        <CardFare />
                    </div>
                    <div className="col-4">
                        <CardFare />
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
