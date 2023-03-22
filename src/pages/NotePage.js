import React from "react";
import {useParams} from "react-router-dom";
import notes from "../assets/data";

const NotePage = (props) => {
    const params = useParams();

    let noteId = params.id;
    let note = notes.find(note => note.id == Number(noteId));

    console.log(note)
    return (
            <div>
                <h2>{note?.body}</h2>
            </div>
    )
}

export default NotePage;