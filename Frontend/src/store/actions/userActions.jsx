import { toast } from "react-toastify"
import axios from './../../api/AxiosConfig'
import { loaduser } from "../reducers/userSlice"

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
        toast.success("User Logout!")
    } catch (error) {
        toast.error("Invaild Credentials")
    }
}

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
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