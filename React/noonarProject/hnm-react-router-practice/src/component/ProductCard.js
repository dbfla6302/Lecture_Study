import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div className="card" onClick={showDetail}>
            <img src={item?.img} alt="" />
            <div className="choice">{item?.choice == true ? "Conscious choice" : item?.selection == true ? "Premium Selection" : ""}</div>
            <div>{item?.title}</div>
            <div>₩ {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className="new-product">{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;