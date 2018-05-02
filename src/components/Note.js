import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

  constructor() {
    super();

    this.titleTextarea = React.createRef();
  }

  componentDidMount() {
    this.titleTextarea.current.style.height = '5px';
    this.titleTextarea.current.style.height = this.titleTextarea.current.scrollHeight + 'px';
  }

  handleContentChange = e => {
    const { note, updateNote } = this.props;

    updateNote(note.title, e.target.value);
  }

  handleTitleChange = e => {
    const { note, updateNote } = this.props;

    if (e.target.value.charAt(e.target.value.length - 1) === '\n') return;

    e.target.style.height = '5px';
    e.target.style.height = e.target.scrollHeight + 'px';

    updateNote(e.target.value, note.content);
  }

  render() {
    const { note, deleteNote } = this.props;

    if (!note) return (
      <div>
        No note yet.
      </div>
    );

    return (
      <div className="Note">
        <div>
          <textarea
            ref={this.titleTextarea}
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
