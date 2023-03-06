import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPlanes } from './planesAPI';
import { IPlane } from './../../app/types';

export interface planesState {
  planes: IPlane[];
  isLoding: boolean;
}

const initialState: planesState = {
  planes: [],
  isLoding: false,
};

export const palnesAsync = createAsyncThunk('planes/createPlane', async () => {
  try {
    return await fetchPlanes();
  } catch (error) {
    console.log(error);
  }
});

export const planesSlice = createSlice({
  name: 'planes',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(palnesAsync.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(palnesAsync.fulfilled, (state, action) => {
        state.isLoding = false;
        state.planes = action.payload;
      })
      .addCase(palnesAsync.rejected, (state) => {
        state.isLoding = true;
      });
  },
});

export default planesSlice.reducer;