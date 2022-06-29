// react
import { useContext } from "react";

// other libs
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

// contexts
import AuthContext from "../contexts/AuthContext";

const baseURL = "http://127.0.0.1:8000/";

const useAxios = () => {
    // recovers user context data
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

    // creates an instance for axios
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.access}` },
    });

    // requests the data from the backend server and sets the values
    // for the context variables
    axiosInstance.interceptors.request.use(async (req) => {
        const user = jwt_decode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh,
        });

        localStorage.setItem("authTokens", JSON.stringify(response.data));

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    });

    return axiosInstance;
};

export default useAxios;
