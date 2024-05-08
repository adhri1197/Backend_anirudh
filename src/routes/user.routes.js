import { Router } from "express";
import { loginUser, registerUser ,logoutUser, refreshAccessToken} from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyjwt } from "../middlewares/auth.middleware.js";


const router = Router();
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

    router.route("/login").post(
        loginUser)



// secured routes
//router.route("/avatar").patch(verifyjwt, upload.single("avatar"), updateUserAvatar)
//router.route("/cover-image").patch(verifyjwt, upload.single("coverImage"), updateUserCoverImage)
router.route("logout").post(verifyjwt, logoutUser)
router.route("/refresh").post(refreshAccessToken)


export default router