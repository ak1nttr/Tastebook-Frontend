import axios from "axios";

interface RegisterDto {
    username: string;
    password: string;
}

class AuthService {
    private apiUrl = "http://localhost:8080/users"

    async register(credentials : RegisterDto) {
        try {
            const response = await axios.post(this.apiUrl,credentials)
            if(!response){
                console.log("response is empty or null: ",response)
                return
            }
            console.log(response.data)
            return response.data
        } catch (error) {
            if (error.isAxiosError(error)){
                throw new Error(error.response?.data?.message || "Registration failed!")
            }
            throw error
        }
    }
}
export default new AuthService();