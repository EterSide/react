import './css/Header.css'
import Button from './Button';
import icon from './../assets/icon.png'
//import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <section> <img src={icon} alt="" /> </section>
            <section> 홈 </section>
            <section> 로그인 </section>
            <section> 장바구니 </section>
            <section> 검색 </section>
            <section> 
                <Button text={"검색"}/>
            </section>
        </div>
    )
}

export default Header;