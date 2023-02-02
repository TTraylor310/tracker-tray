import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';
import { extractErrorMessage } from '../../utils';

const initialState = {
  notes: null,
}


export const createNote = createAsyncThunk(
  'notes/create',
  async({noteText, ticketId}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.createNote(noteText, ticketId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)


export const noteSlice = createSlice({
  name: 'note',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
  }
})


export default noteSlice.reducer