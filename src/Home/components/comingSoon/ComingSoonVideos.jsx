import React from 'react'
import "../../styles/ComingSoonStyle.css"
import WarningIcon from '@mui/icons-material/Warning';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export const ComingSoonVideos = () => {
    return (

        <div className="col-lg-12 find-work-out">
            <div>

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
            </div>
        </div>

    )
}
