import React from "react";
import notes from "../assets/data";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
    return(
            <div className="notes">
                <div className="notes-header">
                    <h2 className="notes-title">&#9782; My Notes</h2>
                    <p>{notes.length}</p>
                </div>
                <div className="notes-list">
                    {
                    notes.map((note, index) => (
                            <ListItem key={index} note={note}/>
                    ))
                    }
                </div>
            </div>
    )
}

export default NotesListPage;