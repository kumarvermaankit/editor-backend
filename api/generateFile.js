const express = require("express")
const router = express.Router()
const generateFile= require("../generateFile")
const execute = require("../execute")
router.post("/", async (req, res) => {

    try{
        const {format,code} = req.body;
        const filename = await generateFile.generateFile(format,code);
        console.log(filename)
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
    
        // console.log(output)
        res.json({output});
    }
  catch(err){
      res.json({err})
  }

})



module.exports = router