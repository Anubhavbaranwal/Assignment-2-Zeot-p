import { ApiResponse } from "../utils/Apiresponse.js";
import { asynchandling } from "../utils/asynchandling.js";



const healthcheck = asynchandling(async (req, res) => {
    res.status(200).json(new ApiResponse(200, {}, "Server is running"));
}
);

export { healthcheck };