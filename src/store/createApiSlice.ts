import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFood = createAsyncThunk(
    "food/fetchFood",
    async ({ page, mas }) => {
        const API_KEY = "889b86b596be4630a01e61a69d59ab6d";
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?query=${mas.join(
                ","
            )}&apiKey=${API_KEY}&number=5&offset=${(page - 1) * 5}`
        );
        return response.data;
    }
);

const foodSlice = createSlice({
    name: "food",
    initialState: {
        task: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.loading = false;
                state.task = action.payload;
            })
            .addCase(fetchFood.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default foodSlice.reducer;
