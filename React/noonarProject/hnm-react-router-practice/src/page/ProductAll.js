import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams()
    const getProducts = async() => {
        let searchQuery = query.get("q") || "";
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(()=>{
        getProducts();
    },[query]);
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item)=>(
                        <Col md={3} sm={12} key={item.id} className='col-card'>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;