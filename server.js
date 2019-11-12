const express = require('express');
const members = require('./members');
const uuid = require('uuid');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => 
res.render('index',{
  title: 'käyttäjät',
  members
 })
 );


app.post('/', (req, res) => {
     const newMember = {
         id: uuid.v4(),
         name: req.body.fname,
         lastname: req.body.lname
     };
     members.push(newMember);
     res.redirect('/');
     console.log(newMember);
     console.log(members);
 });

 app.get('/', (req, res) => res.json(members));




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));




