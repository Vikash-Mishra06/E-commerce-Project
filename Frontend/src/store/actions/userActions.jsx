import { toast } from "react-toastify"
import axios from './../../api/AxiosConfig'
import { loaduser, logout } from "../reducers/userSlice"

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) dispatch(loaduser(user))
        else console.log("user not loggedIn!")
    } catch (error) {
        console.log(error)
    }
}

export const asynclogoutuser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
        dispatch(logout())
        toast.success("User Logout!")
    } catch (error) {
        toast.error("Invaild Credentials")
    }
}

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user", JSON.stringify(data[0]))
        toast.success("LoggedIn Successfully")
    } catch (error) {
        toast.error("Invaild Credentials")
    }
}

export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        toast.success("Registered Successfully")

    } catch (error) {
        toast.error("Invaild Credentials")
    }
}

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user)
        localStorage.setItem("user", JSON.stringify(data))

    } catch (error) {
        toast.error("Invaild Credentials")
    }
}


export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);

    localStorage.removeItem("user");
    dispatch(logout()); // optional: clears redux user state
  } catch (error) {
    toast.error("Failed to delete user");
  }
};
