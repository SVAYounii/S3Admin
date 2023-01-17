import React, { useState } from 'react';
import Table from "../../Components/HomeTable";
import Navbar from '../../Components/Navbar'
import Button from 'react-bootstrap/Button';
import CustomModal from '../../Components/CustomModal'




export function Movie() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Navbar />
            <div className="mt-5 mx-3">
                <Button variant="primary" className="my-2" onClick={() => setModalShow(true)}>Add Movie</Button>{' '}
                <Table></Table>
                <CustomModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    );
}



export default Movie;
