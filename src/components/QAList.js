import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

const QAList = ({ data, deleteOneItem }) => {

    const dataLocal = JSON.parse(localStorage.getItem("items"))
    //To delete one item from an array
    const onDeleteItem = (ID) => {
        if (localStorage.getItem("items") != null) {
            const index = question.findIndex((item) => item.id === ID)
            question.splice(index, 1)
            deleteOneItem(question)
        }
    }

    return (
        <Row>
            <Accordion>
                {
                    localStorage.getItem("items") != null ? (dataLocal.map((item, index) => {
                        return (
                            <Accordion.Item eventKey={item.id} key={index}>
                                <Accordion.Header>
                                    <div className="m-auto">
                                        {item.q}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="text-start">
                                    <div className="px-3 d-inline">
                                        {item.a}
                                    </div>
                                    <button onClick={() => onDeleteItem(item.id)} className="btn-color">Delete question</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })) : <h2 className="fs-4 text-center p-5">No questions yet</h2>
                }
            </Accordion>
        </Row>
    )
}

export default QAList