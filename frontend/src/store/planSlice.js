import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    planData: {},
};

export const planSlice = createSlice({
    name: 'addPlan',
    initialState,
    reducers: {
        setPlanData: (state, action) => {
            state.planData = action.payload;
        },
    },
});

export const { setPlanData } = planSlice.actions;
export default planSlice.reducer;
