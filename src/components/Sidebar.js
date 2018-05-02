import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    const { notes, noteIndex, createNote, switchNote} = this.props;

    const noteList = notes.map((note, i) => {

      let className = 'Sidebar-list-item';

      if (i === noteIndex) className += ' Sidebar-list-item-active';

      return (
        <li
          key={i}
          className={className}
          onClick={() => switchNote(i)}
        >
          {note.title}
        </li>
      );
    });

    return (
      <div className="Sidebar">
        <div className="Sidebar-create-note-button-wrapper">
          <button onClick={createNote}>New note</button>
        </div>
        <ul>
          {noteList}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
