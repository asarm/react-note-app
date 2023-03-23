import {React, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import notes from "../assets/data";
import {Link} from "react-router-dom";

const NotePage = () => {
    const params = useParams();

    let noteId = params.id;
    let [note, setNote] = useState(null);
    // let note = notes.find(note => note.id == Number(noteId));


    useEffect( () => {
        getNote();
    }, [])

    let getNote = async () => {
        let respone = await fetch(
                'http://localhost:8000/notes/'+noteId
        )
        let data = await respone.json();
        setNote(data);
    }

    return (
            <div className="note">
                <div className="note-header">
                    <h3>
                        <Link to="/">
                            Back
                        </Link>
                    </h3>
                </div>
                <textarea value={note?.body}>

                </textarea>
                
            </div>
    )
}

export default NotePage;