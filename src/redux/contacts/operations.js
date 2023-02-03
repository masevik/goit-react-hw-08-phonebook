import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(`${response.data.name} is added`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.warning(`${response.data.name} removed`);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again later', {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
