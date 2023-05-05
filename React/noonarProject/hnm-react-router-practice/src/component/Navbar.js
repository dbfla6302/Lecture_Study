import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = ({ goToHome }) => {
    const dispatch = useDispatch();
    const authenticate = useSelector((state) => state.auth.authenticate);
    const loginText = authenticate ? "로그아웃" : "로그인";
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isShow, setIsShow] = useState(false);
    const isMobile = useMediaQuery({
        query : "(max-width:600px)"
    });
    const menuDisplay = isMobile && isShow ? "block" : "none";
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M HOME',
        '스포츠',
        'Sale',
        '지속가능성'
    ];

    const onToggle = () => {
        setIsShow( !isShow );
    }

    const navigate = useNavigate();
    const goToLogin = () => {
        authenticate ? dispatch({type: "LOGOUT_SUCCESS"}) : navigate("/login");
    }

    const userKeyword = (event) => {
        setSearchKeyword(event.target.value);
    };
    const search = (event) => {
        if(event.key === "Enter"){
            //입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }else if(event._reactName === "onClick"){
            navigate(`/?q=${searchKeyword}`)
        }
    };

    return (
        <div className='main-header'>
            <div className='main-top'>
                <div className='mobile-menuBtn' onClick={() => onToggle()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='login-area'>
                    <div className='login-button' onClick={() => goToLogin()}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>{loginText}</div>
                    </div>
                </div>
            </div>
            <div className='main-logo'>
                <img width={90} src={'assets/H&M-Logo.png'} onClick={goToHome} alt="" />
            </div>
            <div className="search-area">
                <FontAwesomeIcon icon={faSearch} className='faSearch' onClick={(event) => search(event)} />
                <input type="text" onKeyPress={(event) => search(event)} value={searchKeyword} onChange={userKeyword} className='search_input' placeholder='제품 검색' />
            </div>
            <div className="menu-area" style={{ display: isMobile && !isShow ? "none" : "block"}}>
                <button className="menu-close" onClick={onToggle}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <ul className="menu-list">
                    {menuList.map((menu,index)=>(
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;