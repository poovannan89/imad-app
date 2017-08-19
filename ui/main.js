
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


var submit_cmt1 = document.getElementById('submit_cmt1');
submit_cmt1.onclick = function() {
    var request = new XMLHttpRequest();
    var cmtInput= document.getElementById('commentBodyField1');
    var cmt = cmtInput.value;
    request.open('GET','http://poovannancse.imad.hasura-app.io/article-one/submit-comment1?cmt=' + cmt,true);
    request.send(null);
}; 
//Submit name 

