import { Col, Container, Row } from "react-bootstrap"
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  const [data, setData] = useState(question)

  //To add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]))
    setData([...question])
    notify("Added successfully", "Success")
  }

  //To delete all items
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length)
    setData([])
    notify("Deleted all items successfully", "Success")
  }

  //To delete one item from an array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]))
    notify("Deleted item successfully", "Success")
    setData([...items])
    if (items.length <= 0) {
      deleteAllItems()
    }
  }

  //To send a notification
  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  }

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">Frequently Asked Questions</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ?
                (
                  <button onClick={deleteAllItems} className="btn-color w-100 my-3">Delete all</button>
                ) :
                null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
