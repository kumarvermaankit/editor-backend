const express = require("express")
const router = express.Router()
const generateFile= require("../generateFile")
const path = require('path');
const execute = require("../execute")
const fs = require('fs');
const dircode = path.join(__dirname,"codes");



function del(file){
    fs.rmdirSync(dircode + `/${file}`, { recursive: true });
}
router.post("/", async (req, res) => {

    try{
        const {format,code} = req.body;
        const filename = await generateFile.generateFile(format,code);
        
        var output = "";
        if(format === "cpp"){
            output = await execute.executeCpp(filename);
    
        }
        else if(format === "js"){
            output = await execute.executeJs(filename);
            
        }
        else if(format === "py"){
            output = await execute.executePy(filename);
            
        }
        else if(format === "java"){
            output = await execute.executeJava(filename);
            
        }
        
        // if(output){
        //     del(filename)
        // }
       
        res.json({output});
    }
  catch(err){
      console.log(err)
      res.json({err})
  }

})



module.exports = router