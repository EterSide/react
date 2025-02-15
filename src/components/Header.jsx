import './css/Header.css'
import Button from './Button';
import icon from './../assets/icon.png'
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";

const Header = () => {

    const nav = useNavigate();

    return (
        <div className='Header'>
            <div className='img'> <img src={icon} alt="" /> </div>
            <div className='home' onClick={() => nav("/")}> 홈 </div>
            <div className='login' onClick={() => nav("/")} > 로그인 </div>
            <div className='cart'> 장바구니 </div>
            <div className='search'> <input type="text" /> </div>
            <div className='search-button'> 
                <Button text={"검색"}/>
            </div>
        </div>
    )
}

export default Header;