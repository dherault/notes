import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

  state = {
    editingTitle: false,
  }

  handleContentChange = e => {
    const { note, updateNote } = this.props;

    updateNote(note.title, e.target.value);
  }

  handleTitleChange = e => {
    const { note, updateNote } = this.props;

    updateNote(e.target.value, note.content );
  }

  render() {
    const { editingTitle } = this.state;
    const { note, deleteNote } = this.props;

    if (!note) return (
      <div>
        No note yet.
      </div>
    );

    return (
      <div className="Note">
        <div>
          <input
            value={note.title}
            onChange={this.handleTitleChange}
            className="Note-title"
          />
        </div>
        <textarea
          value={note.content}
          onChange={this.handleContentChange}
          className="Note-content"
        />
        <div>
          <button onClick={deleteNote}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Note;
