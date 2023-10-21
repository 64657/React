import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
// import notes from "../../data/notes"; 
import { Link, useNavigate } from 'react-router-dom';
import { Accordion, Badge, Button, Card } from "react-bootstrap";
// import AccordionToggle from 'react-bootstrap';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import {  deleteNoteAction, listNotes } from '../../actions/notesActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import ReactMarkdown from "react-markdown";

function MyNotes ( {search}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const noteList = useSelector(state => state.noteList)
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;
  
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate} = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error:errorDelete, success:succesDelete} = noteDelete


  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // Handle the deletion logic here
      dispatch(deleteNoteAction(id));
    }
  };

 
  useEffect(() => {
      dispatch(listNotes());
      if (!userInfo) {
        navigate('/');
      }
  }, [dispatch, successCreate, userInfo, successUpdate, 
    loadingDelete, errorDelete, succesDelete
  ])

  // const fetchNotes = async () => {
  //   try {
  //     const response = await axios.get('https://notezipper1.onrender.com/api/notes'); // Correct the URL
  //     // setNotes(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error('Error fetching notes:', error);
  //   }
  // };

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {console.log(notes)}
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {errorDelete && (<ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>)}
      {loadingDelete && <Loading/>}
      {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {loading && <Loading/>}
      {notes?.reverse().filter(filteredNote => (
        filteredNote.title.toLowerCase().includes(search.toLowerCase())
      )).map((note) => (
        <Accordion>
          <Card style={{ margin: 10}} key = {note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
                {/* <Accordion.Toggle as={Card.Text} variant='link' eventKey="0">{note.title}</Accordion.Toggle> */}
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            {/* <Accordion.Collapse eventKey="note.id"> */}
              <Card.Body>
                <h4>
                  <Badge variant="success">
                    Category - {note.category}
                  </Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            {/* </Accordion.Collapse> */}
          </Card>
         </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;