import express from "express";
import os from "os";
const app= express()
const port =4000;

app.get('/',(req,res)=>{
  const hellms=`VERSION 2: Hello from ${os.hostname()}`
  console.log(hellms)
  res.send(hellms)
})

app.listen(port,()=>{
  console.log(`web server listening at port : ${port}`)
})
