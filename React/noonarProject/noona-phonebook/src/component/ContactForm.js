import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    let [name, setName] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let dispatch = useDispatch();

    const addContact = (event) => {
      event.preventDefault();
      if(!name){
        alert("이름을 입력해주세요!")
    }else if(!phoneNumber){
        alert("전화번호를 입력해주세요!")
      }else{
          dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
          setName("");
          setPhoneNumber("");
      }
    };

    return (
        <div>
            <Form onSubmit={(event) => addContact(event)}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={ (e) => setName(e.target.value) } value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={ (e) => setPhoneNumber(e.target.value) } value={phoneNumber} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;