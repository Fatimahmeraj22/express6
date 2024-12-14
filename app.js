import express from "express"
const app =express() ;

const PORT =5000;
app.get("/fatimaa",(req,res)=>{
    try {
       res.status (200).send("hello wolrddddddd")
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`server is runing up and runjing`);
})






