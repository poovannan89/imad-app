var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | Pooh',
    heading: 'Article One',
    date: 'Aug 9, 2017',
    content: `<p>
                    India have brought in left-arm spin-bowling allrounder Axar Patel for the Pallekele Test, as a replacement for the suspended Ravindra Jadeja. He will be the third spinner in the squad behind offspinner R Ashwin and left-arm wristspinner Kuldeep Yadav.
                </p>
                <p>
                    Axar is yet to make his debut in Test cricket, but has played 30 ODIs and seven T20 internationals. He has played 23 first-class matches and taken 79 wickets at 30.37. He has just finished playing the 50-over tri-series in South Africa with India A. He finished the team's third-highest wicket-taker in the series with seven wickets in four games and an economy rate of 4.11.
                </p>
    `
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
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
            </div>
        </body>
    </html>
    `;    
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req, res){
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
