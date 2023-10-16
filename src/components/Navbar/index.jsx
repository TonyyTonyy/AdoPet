import style from './style.module.css'
import IconProfile from '../IconProfile'
import img from '../../assets/Ellipse 2.svg'
import Logo from '../../assets/Vector.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" width={190} height={100} />
                </Link>
            </div>
            <div>
                <IconProfile src={img} nome="Emilly Castro" />
            </div>

        </nav>
    )
}
export default Navbar;