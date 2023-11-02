const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

userRouter.get("/", user.userMain);

userRouter.get("/signup", user.signUp)
userRouter.post("/signup", user.postSignUp)

userRouter.get("/signin", user.signIp)
userRouter.post("/signup", user.postSignIn)


userRouter.get("/profile", user.profile)
userRouter.patch("/profile/edit/:id", user.profileEdit)
userRouter.delete("/profile/edit/:id", user.profileDel)