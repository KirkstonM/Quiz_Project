import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: false,
    loading: false,
    correctlyAnswered: 0
};

export const fetchData = createAsyncThunk('app/fetch', async () => {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
        if (response.status === 200 || response.ok) {
            return response.json()
        }
        throw new Error(`Data Error: ${response.status} - ${response.statusText}`);
    } catch (error) {
        throw new Error(`Data Error: ${error.message}`);
    }
})

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateFinalResult: (state) => {
            state.correctlyAnswered = state.correctlyAnswered + 1
        },
        clearFinalResult: (state) => {
            state.correctlyAnswered = 0
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.results;
                state.error = false
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    },

});

export const { updateFinalResult, clearFinalResult } = appSlice.actions
export default appSlice.reducer;