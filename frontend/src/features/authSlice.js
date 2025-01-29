import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError, handleSuccess } from "../utils";

const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, navigate }, thunkAPI) => {
    try {
      console.log(email,password)
      if (!email || !password) {
        return handleError("Email and password required!");
      }
     
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(res.data)

      const {message,success,name, jwtToken} = res.data
      
      if(success){
        handleSuccess(message)
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        return { user: name, token: jwtToken };       
      }
      if(!success){
        handleError(message)
      }
      
    } catch (error) {
      handleError(error.response.data.error) 
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password, navigate }, thunkAPI) => {
    try {
      if (!name || !email || !password) {
        return handleError("Name, email and password required!");
      }
      const res = await axios.post("http://localhost:3000/auth/signup", {
        name,
        email,
        password,
      });
      const { success, message } = res.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/chat/login");
        }, 1000);
      }
      if (!success) {
        handleError(message);
      }

      return res.data;
    } catch (error) {
      console.log(error)
      handleError(error.response.data.message); 
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Signup
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
