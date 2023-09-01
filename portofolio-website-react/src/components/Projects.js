import React, { useState } from 'react'
import './Projects.css'
// import './Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Img1 from '../assets/bagan.jpg'
import Img2 from '../assets/charon-library.png'
import Img3 from '../assets/dhimti.png'
import Img4 from '../assets/eid.png'
import Img5 from '../assets/himti1.jpg'
import Img6 from '../assets/linguanesia.png'
import Img7 from '../assets/koperasi.png'
import Img8 from '../assets/katekima.png'
import Img9 from '../assets/oracle.png'
import Img10 from '../assets/pepper-design.png'
import Img11 from '../assets/qhealth.jpg'
import Img12 from '../assets/sign.jpg'

const Projetcs = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
            desc: "This is a design for HIMTI official instagram post of the new organizational hierarchy",
            link: "https://www.figma.com/file/fLjCwJSSczPvvOZcSvKOyX/Untitled?type=design&node-id=0%3A1&mode=design&t=k8piHOA7oCadoQOY-1",
        },
        {
            id: 2,
            imgSrc: Img2,
            desc: "This is a mockup design for my Database Technology assignment, where my friends and I developed a library application",
            link: "https://www.figma.com/file/I7kYtKstHVcelaxSab8LA8/Untitled?type=design&node-id=0%3A1&mode=design&t=Edc2nAfXoRDlb2za-1",
        },
        {
            id: 3,
            imgSrc: Img3,
            desc: "This design is for an HIMTI Bandung Instagram post and a speaker certificate related to a technology talk show",
            link: "https://www.figma.com/file/Oaq6kwgFBBhRH85tF1woJS/Untitled?type=design&node-id=1%3A227&mode=design&t=4h2aoxzrDzKnLOmR-1",
        },
        {
            id: 4,
            imgSrc: Img4,
            desc: "This design is for an HIMTI Bandung Instagram post about Eid celebration",
            link: "https://www.canva.com/design/DAE_bEkgSRM/hlIsQz3e5Fcr4ftXyCGsnQ/edit?utm_content=DAE_bEkgSRM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
            id: 5,
            imgSrc: Img5,
            desc: "This is a design for HIMTI Bandung informative instagram post",
            link: "https://www.figma.com/file/zt09s26PlEyGdHnn5UE8gZ/Untitled?type=design&node-id=2%3A185&mode=design&t=eyDlx3VtuLFzkYjF-1",
        },
        {
            id: 6,
            imgSrc: Img6,
            desc: "This mockup mobile design is for the Linguanesia App, allowing users to translate sign language into text",
            link: "https://www.figma.com/file/TsOnXTDPXJ19Cm5aiRCsCS/Untitled?type=design&node-id=1%3A10187&mode=design&t=szjWVIdGDBvqyk02-1",
        },
        {
            id: 7,
            imgSrc: Img7,
            desc: "This partial mockup mobile design is for a cooperative mobile application for Mitra Kasih Hospital",
            link: "https://www.figma.com/file/OY46Qu0dMYWC9ikKjBTvuw/Untitled?type=design&node-id=0%3A1&mode=design&t=XAUwj29PgiYoXiEU-1",
        },
        {
            id: 8,
            imgSrc: Img8,
            desc: "This project is based on Laravel and was worked on by me and my friends for our Software Engineering assignment",
            link: "https://github.com/vincentalexx/KATEKIMA",
        },
        {
            id: 9,
            imgSrc: Img9,
            desc: "This project is based on Oracle Apex and was worked on by me and my friends for our Database Technology assignment",
            link: "",
        },
        {
            id: 10,
            imgSrc: Img10,
            desc: "This is a design about white pepper that my family wanted to sell in 2022",
            link: "https://www.figma.com/file/MKmcsshDwexoK31T58pozv/Untitled?type=design&node-id=0%3A1&mode=design&t=u4bPsQVZdPg0bsZN-1",
        },
        {
            id: 11,
            imgSrc: Img11,
            desc: "This project is based on Java Swing and was worked on by me and my friends for our Object Oriented Programming assignment",
            link: "https://github.com/fzjourney/Basal-Metabolic-Counter.git",
        },
        {
            id: 12,
            imgSrc: Img12,
            desc: "This project is based on Python and was worked on by me and my friends for out Artificial Intelligence assignment",
            link: "",
        },
    ]

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const [tempDesc, setTempDesc] = useState('')
    const [tempLink, setTempLink] = useState('')

    const getAll = (item) => {
        setTempImgSrc(item.imgSrc)
        setTempDesc(item.desc)
        setTempLink(item.link)
        setModel(true)
    }

    return (
        <div className="project-section">
            <div className={model? "model open" : "model"}>
                <div className="project-kiri">
                    <img src={tempimgSrc}/>
                </div>
                <div className="project-tengah">
                    <h2>{tempDesc}</h2>
                    <a href={tempLink}>{tempLink}</a>
                </div>
                <div className="project-kanan">
                    <FontAwesomeIcon icon={faClose} id='close-icon' size='4x' onClick={() => setModel(false)}/>
                </div>
            </div>
            <div className="project">
                {data.map((item, index) => {
                    return (
                        <div className="close-up">
                            <div className="pics" style={{ width: '100%', height: '100%' }} onClick={() => getAll(item)}>
                                <img src={item.imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projetcs