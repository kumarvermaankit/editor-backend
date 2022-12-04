
const {exec} = require('child_process');
const path = require('path');
const fs = require('fs');
const { normalize } = require('path');
const dircode = path.join(__dirname,"outputs");

if(!fs.existsSync(dircode)){
    fs.mkdirSync(dircode, { recursive: true });
}

async function executeCpp(filepath){
    // const filepath = path.join(dircode,filename);
    // const output = path.join(dircode,`${filename.split('.')[0]}.out`);
    console.log(filepath)
    const jobId = path.basename(filepath).split('.')[0];
    const output = path.join(dircode,`${jobId}.out`);

    const command = `g++ ${filepath} -o ${output} && cd ${dircode} && ./${jobId}.out`;
    return new Promise((resolve,reject)=>{
        exec(command,(err,stdout,stderr)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(stdout);
            }
        })
    })
}

async function executeJs(filepath){
    const readline = require("readline");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
   
    
  
    
    const command = `node ${filepath}.js`;
     new Promise((resolve,reject)=>{
        exec(command,(err,stdout,stderr)=>{
            if(err){
                
                reject(err);
            }
            else{
                resolve(stdout);
            }
        })
    })


}

async function executePy(filepath){
 
  
    
    const command = `python3 ${filepath}`;
    return new Promise((resolve,reject)=>{
        exec(command,(err,stdout,stderr)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(stdout);
            }
        })
    })
}

executeJava = (filepath) => {
    return new Promise((resolve,reject)=>{
        exec(`javac ${filepath} && java ${filepath.split('.')[0]}`,(err,stdout,stderr)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(stdout);
            }
        })
    })
}


module.exports = {
    executeCpp,
    executeJs,
    executePy,
    executeJava
}