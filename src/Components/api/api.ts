import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export const instance2 = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',

})

type GetAuthMeType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: number,
    messages: Array<string>
}

type PostAuthLoginType = {
    resultCode: number,
    messages:Array<string>,
    data: {
        userId:string
    }


}



export const authApi = {
    getAuth() {
        return (
            instance.get<GetAuthMeType>('auth/me').then(
                response => {
                    return response.data
                }
            )
        )
    },

    login(email, password, rememberMe) {
        return (
            instance.post<PostAuthLoginType>('auth/login', {email, password, rememberMe}).then(
                response => {
                    return response.data
                }
            )
        )
    },

    logout() {
        return (
            instance.delete('auth/login',).then(
                response => {

                    return response.data
                }
            )
        )
    },

    register() {
        return (
            instance2.get('registeredUsers',).then(
                response => {

                    //console.log(response.data+" fdf")
                    return response

                }
            )
        )
    },



}