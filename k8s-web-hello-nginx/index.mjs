import express from "express";
import fetch from "node-fetch";
import os from "os";
const app= express()
const port =5000;

app.get('/',(req,res)=>{
  const hellms=`VERSION 2: Hello from ${os.hostname()}`
  console.log(hellms)
  res.send(hellms)
})

app.get('/nginx',async(req,res)=>{
  const url='http://nginx'







++
  const response=  await fetch(url)
  const body = await response.text();
  res.send(body)
})

app.listen(port,()=>{
  console.log(`web server listening at port : ${port}`)
})
