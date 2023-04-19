import React, { useState } from 'react';

const siteList = [
    {id:1, href:"https://www.facebook.com/hm", src:"square-facebook.svg"},
    {id:2, href:"https://twitter.com/hmsouthkorea", src:"twitter.svg"},
    {id:3, href:"https://www.instagram.com/hm/", src:"instagram.svg"},
    {id:4, href:"https://www.youtube.com/user/hennesandmauritz", src:"youtube.svg"},
    {id:5, href:"https://www.pinterest.co.kr/hm/", src:"pinterest.svg"},
    {id:6, href:"https://m.post.naver.com/my.nhn?memberNo=20048415", src:"naver-svgrepo-com.svg"},
    {id:7, href:"https://pf.kakao.com/_mmfQZ", src:"kakaotalk-svgrepo-com.svg"}
]
const Footer = ({ goToHome }) => {
    const [siteDate, setSiteDate] = useState(siteList);
    return (
        <div className='footer'>
            <ul>
                <li>
                    <dl className='site-icon'>
                        {
                            siteDate.map( item => <dd key={item.id}><a href={item.href} target='_blank'><img width={20} src={`http://dbfla6302.dothome.co.kr/Study/React/noonarProject/hnm-react-router-practice/svg/${item.src}`} alt="" /></a></dd> )
                        }
                    </dl>
                </li>
                <li>
                    <p>
                        이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다. 더 보기 | 법인명 에이치앤엠헤네스 
                        앤 모리츠 주식회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록| 번호: 220-87-83339 | 대표자: 아담 칼슨, 
                        아네타 포쿠친스카 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 info.kr@hm.com 사업자 
                        정보 확인 지급보증안내
                    </p> 
                </li>
                <li>
                    <p>
                        법인명 에이치앤엠헤네스앤모리츠 주식회사  | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록번호: 220-87-83339  | 
                        대표자 : 아담칼슨,아네타포쿠친스카 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com
                    </p>
                </li>
                <li><p>사업자 정보 확인</p></li>
                <li><p>지급보증안내</p></li>
                <li><p><img width={40} className='logo' src="http://dbfla6302.dothome.co.kr/Study/React/noonarProject/hnm-react-router-practice/H&M-Logo.png" onClick={goToHome} alt="" /></p></li>
                <li><p>대한민국 | ₩</p></li>
            </ul>
        </div>
    );
};

export default Footer;