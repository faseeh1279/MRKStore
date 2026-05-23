const ApiResponse = require("../../utils/ApiResponse");


const register = (req, res) => { 
    const {username, password} = req.body; 
    if(username === "faseehraza1279"){ 
        return ApiResponse.success("User registered successfully!", null, null).send(res);
    }
}


const login = (req, res) => { 
    const {username, password} = req.body;
    if (username === "faseehraza1279" && password === "password123") {
        return ApiResponse.success("Login successful!", null, null).send(res);
    } else {
        return ApiResponse.error("Invalid credentials!").send(res);
    }
}