import React from 'react'
import "../../styles/ComingSoonStyle.css"
import WarningIcon from '@mui/icons-material/Warning';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export const ComingSoonVideos = () => {
    return (

        <div className="col-lg-6 find-work-out">
            <div className="banner-container">

                <div className="container-proximamente">
                    <span className="texto-proximamente">
                        <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                        <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                        <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                        <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                        <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                        <div><span>PRÓXIMAMENTE</span></div>
                    </span>
                </div>
                <div className="play-icon-container">
                    <PlayArrowIcon className="play-icon" style={{ fontSize: 200 }} />
                </div>
            </div>
        </div>

    )
}
