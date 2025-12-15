import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await fetch("http://localhost:5000/employees");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectEmployees = (state) => state.employees.list;
export default employeeSlice.reducer;
