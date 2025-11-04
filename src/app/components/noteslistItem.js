const NotesItem = () => {
    return (
        <div className="notesItem">
            <p className="notesTitle">Note Title</p>
           <div className="notesTag">
                <span className="noteTag">Tag1</span>
                <span className="noteTag">Tag2</span>
           </div>
           <div className="notesDate">29 Oct 2024</div>
        </div>
    );
};

export default NotesItem;
