import axios from 'axios';
import { useQuery } from 'react-query';
import {useAuthUser} from 'react-auth-kit';
import { WrapperPageNotes, WrapperNotes, WrapperNote, WrapperNotesInfo } from "../components/Notes/Notes";
import { Portal } from "../components/Portal/Portal";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Notes() { 
    const auth = useAuthUser();

    const { isLoading, isError, data: notes, error } = useQuery("notes", 
        () => axios.get(`/api/notes/${auth().id}`)
        .then(({ data }) => data.data)
    )

    if (isLoading) {
        return (
            <WrapperPageNotes>
                <WrapperNotesInfo><h2>Loading...</h2></WrapperNotesInfo>
            </WrapperPageNotes>
        )
    }
    
    if (isError) {
        return (
            <WrapperPageNotes>
                <WrapperNotesInfo><h2>Error: {error.message}</h2></WrapperNotesInfo>
            </WrapperPageNotes>
        )
    }

    return (
        <WrapperPageNotes>
            { notes.length ? <Portal typePortal="ADD"/> :  (
            <WrapperNotesInfo>
                <h2>There seems to be no note. Add your new note.</h2> 
                <Portal typePortal="ADD"/>
            </WrapperNotesInfo> )} 

            { notes.length ? (
                <WrapperNotes>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 800: 2, 1200: 3}}
                    >
                        <Masonry gutter="15px"> 
                            {   
                                notes.map((note, index) =>  (
                                    <WrapperNote key={index}>
                                        <Portal typePortal="UPDATE" currentNote={note}/>
                                        <Portal typePortal="DELETE"  currentNote={note}/>
                                        <h2>{note.title}</h2>
                                        <p>{note.content}</p>
                                    </WrapperNote>)
                                )
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </WrapperNotes>) : null }
        </WrapperPageNotes>
    )
}
