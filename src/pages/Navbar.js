import logo from './assets/logo.svg';
import './styles/Navbar.css'

function Navbar() {
    return (
        <div className="Navigation">
            <ul>
                <li>
                    <img src={logo} alt='logo' className='NavbarLogo' width={64} height={64}/>
                </li>
                <li>
                    <a>Услуги</a>
                </li>
                <li>
                    <a>Портфолио</a>
                </li>
                <li>
                    <a>Обо мне</a>
                </li>
                <li>
                    <a>Преимущества</a>
                </li>
                <li className='Steps'>
                    <a>Этапы работы</a>
                </li>
                <li>
                    <a>Контакты</a>
                </li>
                <li className='socials'>
                    <a>Ф</a>
                </li>
                <li className='socials'>
                    <a>В</a>
                </li>
                <li className='socials'>
                    <a>И</a>
                </li>
            </ul>
        </div>
  );
}

export default Navbar;
