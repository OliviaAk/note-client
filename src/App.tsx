import React, { useEffect, useState } from 'react';
import { PageHeader, Button } from 'antd';
import styled from 'styled-components';
import NotesList from './components/NotesList';
import { Note, NoteStatus } from './types';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addModalIsShowing, setAddModalIsShowing] = useState(false);
  const [editModalNoteId, setEditModalNoteId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      setIsLoading(true);
      try {
        setIsLoading(false);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getNotes();
  }, []);

  const handleAddNoteClick = () => setAddModalIsShowing(true);


  const editModalNote = notes.find(note => note.id === editModalNoteId);

  return (
    <SOuterDiv>
      <PageHeader
        title="Notes"
        extra={
          <Button type="primary" onClick={handleAddNoteClick}>
            Add Note
          </Button>
        }
      />
     
    </SOuterDiv>
  );
};

export const SOuterDiv = styled.div`
  max-width: 1050px;
  width: 90%;
  margin: 0 auto;
`;

export const SListDiv = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export default App;
