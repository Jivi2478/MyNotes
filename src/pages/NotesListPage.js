import { useEffect, useState } from 'react'
import React from 'react'
//import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
      let response = await fetch('http://localhost:8000/notes/')
      let data = await response.json()
      console.log(data)
      setNotes(data)
  }

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>      
      </div>

      <div className='notes-list'>
          {notes.map((note, index) => (
              <ListItem key={index} note={note} />
          ))}
          
          {/* {
              return (
                  <div className='note-preview' key={index}>
                      <ListItem note={note}/>
                  </div>
              )
          })} */}

      </div>
      <AddButton />
      {/* <AddButton onClick={getNotes} /> */}
    </div>
  )
}

export default NotesListPage
 
//code within notes-list div, splits/maps the parameter in this case: the notes according to their id and returns them.
// The ListItem uses the id to identify the note and return the body of the note.(ListItem.js)