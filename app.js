const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const app = express();
const PORT = 8080;
app.use(cors());

app.get('/api/getResult',async (req,res)=>{
    const rollNumber = req.query.rollNumber.split(',')
    let links =[]
    rollNumber.forEach(roll => {
        links.push(`https://terriblytinytales.com/testapi?rollnumber=${roll}`)
    });
    console.log(links);

    let result = await axios.all(links.map(l=>axios.get(l))).then(axios.spread(function(...res){
        console.log(res)
        // return res.data
        let result = res.map((r,index)=>{
            if(r!==undefined){
                return {rollNumber:rollNumber[index],result:r.data}
            }else{
                return undefined
            }
        })
        console.log(result)
        return result;
    }))
    console.log(result)
    if (result !=undefined){
        res.json(result);
    }else{
        res.sendStatus(404)
    }

});

app.listen(process.env.PORT||PORT,()=>{
    console.log(`Server Listning to port ${process.env.PORT||PORT}`);
})