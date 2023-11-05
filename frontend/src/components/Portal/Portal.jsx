import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalAddNote, ModalUpdateNote, ModalDeleteNote } from '../Modal/Modal.jsx';
import { ButtonActionNote } from "../Button/Button";
import PropTypes from 'prop-types';

export function Portal({ typePortal, currentNote }) {
    const [showModal, setShowModal] = useState(false);

    if(typePortal === "UPDATE") {
        return (
            <>  
                <ButtonActionNote size="2rem" color="#F9F5EB" onClick={() => setShowModal(true)}>
                    {typePortal} NOTE
                </ButtonActionNote>
                { showModal && createPortal(<ModalUpdateNote currentNote={currentNote} onClose={() => setShowModal(false)} />, document.body)}
            </>
        )
    }

    else if(typePortal === "DELETE") {
        return (
            <>  
                <ButtonActionNote size="2rem" onClick={() => setShowModal(true)}>
                    {typePortal} NOTE
                </ButtonActionNote>
                { showModal && createPortal(<ModalDeleteNote currentNote={currentNote} onClose={() => setShowModal(false)} />, document.body) }
            </>
        )
    }

    return (
        <>  
            <ButtonActionNote onClick={() => setShowModal(true)}>
                {typePortal} NOTE
            </ButtonActionNote>
            { showModal && createPortal(<ModalAddNote onClose={() => setShowModal(false)} />, document.body) }
        </>
    );
}

Portal.propTypes = {
    typePortal: PropTypes.string,
    currentNote: PropTypes.object
}