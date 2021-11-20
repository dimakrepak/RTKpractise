import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface USerState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: USerState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
