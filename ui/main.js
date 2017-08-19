var button = document.getElementById('counter');
button.onclick = function() {
    
    
    
    

};

var submitcmt = document.getElementById('submit_cmt');
submitcmt.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var listofcmts = '';
                for(var i=0; i<comments.length;i++) {
                    listofcmts += '<li>' + comments[i] + '</li>';
                }
                var ul = document.getElementById('commentlist');
                ul.innerHTML = listofcmts;
            }
        }
    };
    request.open('GET','http://poovannancse.imad.hasura-app.io/submit-comment', true);
    request.send(null);
};
//Submit name 

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if (request.status == 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;                      
            }
        }
            
    };
    //Make a request to the server and send the name
    //Capture the list of names and render it as a list
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://poovannancse.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};