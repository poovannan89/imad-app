var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article One | Pooh',
    heading: 'Article One',
    date: 'Aug 7, 2017',
    content: `<p>
                    India have brought in left-arm spin-bowling allrounder Axar Patel for the Pallekele Test, as a replacement for the suspended Ravindra Jadeja. He will be the third spinner in the squad behind offspinner R Ashwin and left-arm wristspinner Kuldeep Yadav.
                </p>
                <p>
                    Axar is yet to make his debut in Test cricket, but has played 30 ODIs and seven T20 internationals. He has played 23 first-class matches and taken 79 wickets at 30.37. He has just finished playing the 50-over tri-series in South Africa with India A. He finished the team's third-highest wicket-taker in the series with seven wickets in four games and an economy rate of 4.11.
                </p>
    `,
    commentbox: `<textarea name="commentBody" rows="4" cols="50" style="width:100%" id="commentBodyField" placeholder="Enter your comments..."></textarea>`,
    submitcmt: '<input type="submit" value="Post Comment" id="submit_cmt"></input>'
},
'article-two' : {
    title: 'Article Two | Pooh',
    heading: 'Article Two',
    date: 'Aug 8, 2017',
    content: `Content for second article`,
    commentbox: `<textarea name="commentBody" rows="4" cols="50" style="width:100%" id="commentBodyField" placeholder="Enter your comments..."></textarea>`,
    submitcmt: '<input type="submit" value="Post Comment" id="submit_cmt"></input>'
},
'article-three' : {
    title: 'Article One | Pooh',
    heading: 'Article Three',
    date: 'Aug 9, 2017',
    content: `Content for 3rd article
    `,
    commentbox: `<textarea name="commentBody" rows="4" cols="50" style="width:100%" id="commentBodyField" placeholder="Enter your comments..."></textarea>`,
    submitcmt: '<input type="submit" value="Post Comment" id="submit_cmt"></input>'
}
};


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var commentbox = data.commentbox;
    var submitcmt = data.submitcmt;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
                <div>
                    ${commentbox}
                </div>
                ${submitcmt}
            </div>
            
        </body>
    </html>
    `;    
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0
app.get('/counter',function(req,res){
    counter = counter + 1
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submit-name/', function(req, res) { //URL: /submit-name?name=xxxxx
   //Get the name from the request object
   //Extracted the name value
   var name = req.query.name;
   //Concatenate to the list of names  
   names.push(name);
   // JSON : Java script object notation. Convert java script objects into array of strin
   res.send(JSON.stringify(names));
});

var cmtlist1=[];
var cmtlist2=[];
var cmtlist3=[];
app.get('')

app.get('/:articleName',function(req, res){
   var articleName = req.params.articleName;            
   res.send(createTemplate(articles[articleName]));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
