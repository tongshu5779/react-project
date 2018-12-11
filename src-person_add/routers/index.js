const express = require("express")
const router = express.Router()
const PersonModel = require("../models/PersonModel")


router.post("/save_person",(req,res)=>{
    const {name,sex,age,id} = req.body;
    PersonModel.create({name,sex,age,id})
        .then((doc)=>{
            res.redirect("/personlist")
        })
        .catch((err)=>{
            res.render(`error`,{msg:`保存用户失败`})
        })
})

router.get("/personlist",(req,res)=>{
    PersonModel.find({})
        .then((doc)=>{
            res.render("persons",{persons:doc})
        })
        .catch((err)=>{
            res.render(`error`,{msg:`查询用户失败`})
        })
})
module.exports = router;