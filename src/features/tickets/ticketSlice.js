import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService'
import { extractErrorMessage } from '../../utils';

const initialState = {
  tickets: null,
  ticket: null,
}

export const createTicket = createAsyncThunk(
  'tickets/create',
  async(ticketData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.createTicket(ticketData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const getTickets = createAsyncThunk(
  'tickets/getAll',
  async(_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.getTickets(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.ticket = null
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload
      })
  }
})

export default ticketSlice.reducer