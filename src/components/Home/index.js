import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-l.png'
import SideBar from '../SideBar'
import './index.scss'

const Home = () => {
  return (
    <div className="App">
      <div className="text-zone">
        <SideBar />{' '}
        <div className="container home-page">
          <h1>
            Hello!, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            ucas
            <br />
            web developer
          </h1>
          <h2>Frontend dev Jr.</h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
