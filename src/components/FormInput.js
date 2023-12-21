import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({ onAdd, notify }) => {

    const [qu, setQu] = useState("")
    const [an, setAn] = useState("")

    //To push data to array
    const addNewItem = () => {
        question.push({ id: Math.random(), q: qu, a: an })
        setQu("")
        setAn("")
        onAdd()
        if (qu === "" || an === "") {
            notify("Please enter values", "Error")
            return
        }
    }

    return (
        <Row className="my-3">
            <Col sm="5">
                <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="Enter question" />
            </Col>

            <Col sm="5">
                <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="Enter answer" />
            </Col>

            <Col sm="2">
                <button onClick={addNewItem} className="btn-color w-100" type="submit">Add</button>
            </Col>
        </Row>
    )
}

export default FormInput