import React, { useState } from 'react'
import './Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Img1 from '../assets/lock.jpg'
import Img2 from '../assets/lomba.jpg'
import Img3 from '../assets/mercedes.jpg'
import Img4 from '../assets/mercedes2.jpg'
import Img5 from '../assets/mesin.jpg'
import Img6 from '../assets/orang.jpg'
import Img7 from '../assets/pasar.jpg'
import Img8 from '../assets/stengah.jpg'

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }

    return (
        <>
        <div className="gallery-section">
            <div className={model? "model open" : "model"}>
                <div className="kiri">
                    
                </div>
                <div className="tengah">
                    <img src={tempimgSrc} alt=''/>
                </div>
                <div className="kanan">
                    <FontAwesomeIcon icon={faClose} id='close-icon' size='4x' onClick={() => setModel(false)}/>
                </div>
            </div>
        </div>
        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div className="pics" style={{ width: '100%', height: '100%' }} key={item.id} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery