import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from 'axios';
import Green from '../Images/green.png'
import Red from '../Images/red.png'
import Button from 'react-bootstrap/Button';
import { ConnectionString } from './ConnectionString';

function BasicExample() {

    const [finaldata, setData] = useState(0);

    useEffect(() => {
        const getData = async () => {

            let config = {
                method: 'get',
                url: ConnectionString() + '/api/Contents/GetMovies',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken
                }
            };

            axios(config)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getData();
    }, []);


    const RemoveContent = (id) => {
        let config = {
            method: 'post',
            url: ConnectionString() + '/api/Contents/RemoveMovie?id=' + id,
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken
            }
        };

        axios(config)
            .then((response) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const PublishContent = (id) => {
        let config = {
            method: 'post',
            url: ConnectionString() + '/api/Contents/PublishContent?id=' + id,
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken
            }
        };

        axios(config)
            .then((response) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            {finaldata !== 0 &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>State</th>
                            <th>Movie Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finaldata.map((data, index) => {
                            return (
                                <>
                                    <tr data-index={index}>
                                        <td>{index}</td>
                                        <td>{data.status ? <img src={Green} class="rounded-circle" alt="..." width={25} height={25} /> : <img src={Red} class="rounded-circle" alt="..." width={25} height={25} />}</td>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td><Button variant="primary">Edit</Button>{' '}</td>
                                        {data.status === 1 ? <td><Button variant="danger" onClick={() => RemoveContent(data.id)}>Remove</Button>{' '}</td> : <td><Button variant="success" onClick={() => PublishContent(data.id)}>Publish</Button>{' '}</td>}

                                    </tr>
                                </>
                            );
                        })}

                    </tbody>
                </Table>
            }
        </>
    );
}

export default BasicExample;