
const fs = require('fs');
const express = require('express');
const path = require('path');
const exp = require('constants');

const app =express();
const port = 80;



app.use('/static' , express.static('static'));
app.use(express.urlencoded())


app.set('view engine' , 'pug')

app.set('views' , path.join(__dirname , 'views'))

app.get('/' ,(req ,res)=>
{
    res.status(200).render('first_page.pug' );
} )
app.get('/Academics' , (req ,res)=>
{
    res.status(200).render('Academics.pug' );
})

app.get('/Gallery' , (req,res)=>
{
    res.status(200).render('GalleryPage.pug' );

}
)
app.get('/login_page' , (req,res)=>
{
    res.status(200).render('login_page.pug' );

}
)
app.post('/login_page' , (req,res)=>
{ 
    form = (req.body) 
    let outputTOWrite = JSON.stringify(form)
    fs.appendFileSync('new.txt', "\n"+outputTOWrite );
   
    res.status(200).render('login_page.pug');

    res.send("Your query is submitted")

   
}
)

app.get('/About' , (req,res)=>
{
    res.status(200).render('About.pug' );

}
)
app.get('/P-PA' , (req ,res)=>
{
    res.status(200).render('pre-primaryAcadmics.pug' );
})

app.listen(port , ()=>
{
    console.log(`The Application started succesfully on port ${port}`);
})       

