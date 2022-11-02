import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlassPlus, faMapPin } from '@fortawesome/free-solid-svg-icons'


import Anime from "../../asset/Anime"
import { useRef } from "react"


// const btn = {
//     position: 'absolute',
//     top: 120,
//     left: 100, 
// }
const path = process.env.PUBLIC_URL;

export default function Visual() {

  const box = useRef(null);


  return (
    <figure id="visual" className="myScroll">
      <div className="inner">
        <video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video>
        <p className='since'>S I N C E 1 9 9 8</p>
        <h1>We are making <br />
          real life.
        </h1>
        <div className='visbtn'>
          <p>read more about us</p>
          </div>
        <span className='scrd'>S C R O L L   D O W N </span>
        <div className="bbox"></div>
        <div className='box' ref={box}></div>
        <pic className='pic'><img src={process.env.PUBLIC_URL+ '/img/mainp.jpg'} /></pic>
        <div className='lorem'>
          <h1>L A S T V I D E O</h1>
          <p>Wild Iceland in the winter in 10 days</p>
          <span>Duis tincidunt vestibulum urna, in tempor more about usnibh fermentum sed duis tincidurn massa at facibus Whereas more about us recognition of the inherent dignity.</span>
         </div>
        </div >
    </figure>
   
  )
};