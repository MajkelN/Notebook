import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useAuthUser} from 'react-auth-kit'
import PropTypes from 'prop-types';

import { WrapperModal, Modal, ModalDelete } from "./Modal";
import { ButtonClose, ButtonActionNote } from "../Button/Button";
import { WrapperForm, Form, InputText, InputTextArea, InputSubmit, ErrorItemForm } from "../Form/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function ModalAddNote({ onClose }) {
    const auth = useAuthUser();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const {title, content} = data;
        axios.post(`/api/notes/`, {
            'id': auth().id,
            title,
            content
        })
        .then(() => {
            onClose();
            navigate(0);
        })
        .catch(err => console.log(err))
    }

    return (
        <WrapperModal className="modal">
            <Modal>
                <WrapperForm>
                    <Form id="noteForm" onSubmit={handleSubmit(onSubmit)}>
                        <header>
                            <h2>Add note</h2>
                            <ButtonClose onClick={onClose}>
                                <FontAwesomeIcon icon={faX} />
                            </ButtonClose>
                        </header>
                        <InputText type="text" {...register("title", {required: 'Title is required'})} placeholder="Title"/>
                        {errors.title && <ErrorItemForm>{errors.title?.message}</ErrorItemForm>}

                        <InputTextArea type="textarea" {...register("content", {required: "Content is required"})} placeholder="Content"/>
                        {errors.content && <ErrorItemForm>{errors.content?.message}</ErrorItemForm>}

                        <InputSubmit id="noteInputSubmit" type="submit">Add note</InputSubmit>
                    </Form>
                </WrapperForm>
            </Modal>
        </WrapperModal>
    );
}

export function ModalUpdateNote({ onClose, currentNote }) {
    const { title, content, slug, idUser } = currentNote;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {title, content} = data;
        axios.put(`/api/notes/${idUser}/${slug}`, {
            title,
            content
        })
        .then(() => {
            onClose();
            navigate(0);
        })
        .catch(err => console.log(err))
    }

    return (
        <WrapperModal>
            <Modal>
                <WrapperForm>
                    <Form id="noteForm" onSubmit={handleSubmit(onSubmit)}>
                        <header>
                            <h2>Update note</h2>
                            <ButtonClose onClick={onClose}>
                                <FontAwesomeIcon icon={faX} />
                            </ButtonClose>
                        </header>
                        <InputText type="text" {...register("title", {required: 'Title is required'})} placeholder="Title" defaultValue={title}/>
                        {errors.title && <ErrorItemForm>{errors.title?.message}</ErrorItemForm>}

                        <InputTextArea type="textarea" {...register("content", {required: "Content is required"})} placeholder="Content" defaultValue={content}/>
                        {errors.content && <ErrorItemForm>{errors.content?.message}</ErrorItemForm>}

                        <InputSubmit id="noteInputSubmit" type="submit">Update note</InputSubmit>
                    </Form>
                </WrapperForm>
            </Modal>
        </WrapperModal>
    );
}

export function ModalDeleteNote({ onClose, currentNote }) {
    const { slug, idUser } = currentNote;
    const navigate = useNavigate();

    const deleteNote = () => {
        axios.delete(`/api/notes/${idUser}/${slug}`)
        .then(() => {
            onClose();
            navigate(0);
        })
        .catch(err => console.log(err))
    }

    return (
        <WrapperModal className="modal">
            <ModalDelete>
                <ButtonClose onClick={onClose}>
                    <FontAwesomeIcon icon={faX} />
                </ButtonClose>
                <p>Are you sure you want to delete this note?</p>
                <ButtonActionNote onClick={deleteNote}>Delete note</ButtonActionNote>
            </ModalDelete>
        </WrapperModal>
    );
}

ModalAddNote.propTypes = {
    onClose: PropTypes.func 
}

ModalUpdateNote.propTypes = {
    onClose: PropTypes.func,
    currentNote: PropTypes.object
}

ModalDeleteNote.propTypes = {
    onClose: PropTypes.func,
    currentNote: PropTypes.object
}
