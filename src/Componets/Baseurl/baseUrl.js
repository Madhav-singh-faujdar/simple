import toast from "react-hot-toast";

const BASE_URL = "http://localhost:5000";
// export const BASE_URL = "https://xplo-backend.vercel.app";
export const BASE_URL_AUTH = `${BASE_URL}/api/v1/auth`;






export const PostFormApi = async (url, setLoading, data, id) => {

    setLoading(true)
    try {
        const res = await fetch(`${BASE_URL_AUTH}${url}`, {
            method: "POST",
            headers: { "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify(data)
        });
        const jsonData = await res.json();
        if (!res.ok) {
            setLoading(false)
            throw new Error(jsonData.message);
        }

        setLoading(false)
        toast.success(jsonData.message, {
            id,
        })
        return {
            error: false,
            data: jsonData.data
        }



    } catch (error) {
        console.log(error);
        setLoading(false)
        toast.error(error, {
            id,
        })
        toast.error(error.message, {
            id,
        })
        return {
            error: true
        }
    }



};
export const GetFormApi = async (url, setLoading, id) => {

    setLoading(true)
    try {
        const res = await fetch(`${BASE_URL_AUTH}${url}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        }
        );

        const jsonData = await res.json();
        if (!res.ok) {
            setLoading(false)
            throw new Error(jsonData.message);
        }

        setLoading(false)
        toast.success(jsonData.message, {
            id,
        })
        return {
            error: false,
            data: jsonData.data
        }



    } catch (error) {
        console.log(error);
        setLoading(false)
        toast.error(error, {
            id,
        })
        toast.error(error.message, {
            id,
        })
        return {
            error: true
        }
    }



};
export const PutFormApi = async (url, setLoading, data, id) => {

    setLoading(true)
    try {
        const res = await fetch(`${BASE_URL_AUTH}${url}`, {
            method: "PUT",
            headers: { "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify(data)
        });
        const jsonData = await res.json();
        if (!res.ok) {
            setLoading(false)
            throw new Error(jsonData.message);
        }

        setLoading(false)
        toast.success(jsonData.message, {
            id,
        })
        return {
            error: false,
            data: jsonData.data
        }



    } catch (error) {
        console.log(error);
        setLoading(false)
        toast.error(error, {
            id,
        })
        toast.error(error.message, {
            id,
        })
        return {
            error: true
        }
    }



};
export const GetFormApiDealer = async (url, setLoading) => {

    setLoading(true)
    try {
        const res = await fetch(`${BASE_URL_AUTH}${url}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        }
        );

        const jsonData = await res.json();
        if (!res.ok) {
            setLoading(false)
            throw new Error(jsonData.message);
        }

        setLoading(false)
       
        return {
            error: false,
            data: jsonData.data
        }



    } catch (error) {
        console.log(error);
        toast.error(error.message)
        toast.error(error)
        setLoading(false)
        return {
            error: true
        }
    }



};
