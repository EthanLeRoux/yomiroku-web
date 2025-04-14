import '/src/assets/css/NavigationBar.css'
import {Link} from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.jsx";

export default function NavigationBar(){

    return (
        <>
            <div className={'nav-container'}>
                <Link to={'/'}>
                    <img className={'nav-item'} src={'/src/assets/images/logo.png'}  width={'100px'} height={'100px'} alt={'logo'}/>
                </Link>
                <h1 className={'nav-item'}>yomiroku</h1>
                <div className={'nav-item-hm'}>
                    <HamburgerMenu/>
                </div>
            </div>
        </>
    )
}