import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetail = () => {
    let{id} = useParams();
    const [product, setProduct] = useState(null);
    const [productSize, setProductSize] = useState(null);
    const getProductDetail = async() => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data);
        setProductSize(data.size)
    };
    useEffect(() => {
        getProductDetail();
    },[]);
    
    return (
        <Container>
            <Row className='product-detail-box'>
                <Col className='product-img'>
                    <img src={product?.img} alt="" />
                </Col>                
                <Col className='product-info'>
                    <div className='product-title'>{product?.title}</div>
                    <div>₩ {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div className="product-choice">{product?.choice == true ? "Conscious choice" : product?.selection == true ? "Premium Selection" : ""}</div>
                    <div>
                        <select className='product-opt'>
                            {productSize && productSize.map((size,index)=>(
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Button variant="dark">
                            추가
                        </Button>
                    </div>
                </Col>                
            </Row>
        </Container>
    );
};

export default ProductDetail;