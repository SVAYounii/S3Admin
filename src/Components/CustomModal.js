import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function CustomModal(props) {
  const [finaldata, setData] = useState(0);
  
  
  useEffect(() => {
    const GetGenre = async () => {

      let config = {
        method: 'get',
        url: 'https://localhost:7094/api/Genres',
        headers: { 'Content-Type': 'application/json' }
      };
  
      axios(config)
        .then((response) => {
          console.log("ye")
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  
    }
    GetGenre();
  }, []);

  const CreateMovie = async () => {
    var title = document.getElementById("TitleInput").value
    var desc = document.getElementById("DescriptionInput").value
    var len = document.getElementById("MovieLengthInput").value
    var Release = document.getElementById("ReleaseDateInput").value
    var imgurl = document.getElementById("ImageUrlInput").value
    var movieurl = document.getElementById("MovieUrlInput").value

    var genre1 = document.getElementById("GenreInput1").value
    var genre2 = document.getElementById("GenreInput2").value
    var genre3 = document.getElementById("GenreInput3").value

    let data = JSON.stringify(

      {
        "title": title,
        "description": desc,
        "rating": 0,
        "imgUrl": imgurl,
        "date": new Date(Release),
        "status": 1,
        "length": parseInt(len),
        "filePath": movieurl,
        "movie": 1
      });


    let config = {
      method: 'post',
      url: 'https://localhost:7094/api/Contents/CreateMovie',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {finaldata !== 0 &&

        <Modal
          {...props}
          fullscreen={"fullscreen"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <input id='TitleInput' type="text" class="form-control" placeholder="Title..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <input id='DescriptionInput' type="text" class="form-control" placeholder="Description..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Length</Form.Label>
              <input id='MovieLengthInput' type="number" class="form-control" placeholder="Movie Length..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Release Date</Form.Label>
              <input id='ReleaseDateInput' type="date" class="form-control" placeholder="Release Date..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Choose the genre</Form.Label>
              <Row>
                <Col>
                  <select id='GenreInput1' class="form-select">
                    <option selected>Open this to select genre</option>
                    {finaldata.map((data, index) => {
                      return (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      );
                    })}

                  </select>
                </Col>
                <Col>
                  <select id='GenreInput2' class="form-select">
                    <option selected>Open this to select genre</option>
                    {finaldata.map((data, index) => {
                      return (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      );
                    })}

                  </select>
                </Col>
                <Col>
                  <select id='GenreInput3' class="form-select">
                    <option selected>Open this to select genre</option>
                    {finaldata.map((data, index) => {
                      return (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      );
                    })}

                  </select>
                </Col>
                
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <input id='ImageUrlInput' type="url" class="form-control" placeholder="Image Url..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Url</Form.Label>
              <input id='MovieUrlInput' type="url" class="form-control" placeholder="Movie Url..." />
            </Form.Group>

            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" className='px-3' onClick={CreateMovie}>Submit</Button>
            </ButtonGroup>

          </Modal.Body>
        </Modal>
      }
    </>
  );
}
export default CustomModal;

