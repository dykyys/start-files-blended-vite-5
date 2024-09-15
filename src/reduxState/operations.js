import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: '',
});

export const test = createAsyncThunk('', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
