function GetFormInputs(){
    var name = $('#name').val();
    var title = $('#title').val();
    var message  = $('#message').val();
    var imageUrl=$('#url').val();
    var link =$('#link').val();
    var image = $("#image")[0].files[0];
    var imageType = /image.*/;
    var todayDate = new Date();
    var year = todayDate.getFullYear();
    var day = todayDate.getDate();
    var month= todayDate.getMonth()+1;
    var hours = todayDate.getHours();
    var minutes = todayDate.getMonth();
    var seconds = todayDate.getSeconds();
    var milliseconds = todayDate.getMilliseconds();

    var timestamp = year + '-' + month + '-' + day + '-' + hours + '-' + minutes + '-' + seconds + '-' + milliseconds;

    imageUrl = addsHttp(imageUrl);
    link = addsHttp(link);

    if (imageUrl.length != 0){
        message = message + ' !['+ title +'](' + imageUrl +')';
    }

    if(image && image.type.match(imageType)) {
        var fileName = timestamp+'-'+image.name;
        message = message +' !['+ title +'](' + 'https://raw.github.com/rememberaaronsw/rememberaaronsw/master/images/'+fileName +')';
        var reader = new FileReader();
        reader.onload = function(e) {
            writeToRepo('images/'+fileName, Base64.encode(reader.result), 'New one year message from '+name+' @ '+ timestamp+'[image]', 'base64');
        };
        reader.readAsBinaryString(image);
    }
    var content = '---\nauthor: ' + name + '\ntitle: "' + title + '"\ndate: ' + timestamp + '\ntype: post\nlayout: default\nlink: '+link+'\n---\n'+message;
    title = title.replace(/\s+/g, '-');
    writeToRepo('oneyearlater/_posts/'+ timestamp +'-'+ title+'.md', content, 'New one year message from '+name+' @ '+ timestamp+'[message]', 'utf-8');
    alert("Thank you. Your message will be displayed shortly.");
    clearFormFields();
}

function writeToRepo(path, content, commitMessage, encoding){
    var github = new Github({
        username: "rememberaaronswartz",
        password: "aaronjan11",
        auth: "basic"
    });

    var repo = github.getRepo('rememberaaronswartz', 'rememberaaronsw');
    var pull = {
        title: commitMessage,
        body: "This request is automatically generated.",
        base: "master"
    };
    repo.writePullRequest(pull, 'master', path, content, encoding, commitMessage, function(err) {
        if(err) {
            alert('There was an error, please try again later.');
            return false;
        }
    });
}

function clearFormFields() {
    document.getElementById('name').value="";
    document.getElementById('title').value="";
    document.getElementById('message').value="";
    document.getElementById('url').value="";
    document.getElementById('link').value="";
    document.getElementById('image').value="";
}

function addsHttp(link){
    if (link.indexOf("http") == -1 && link.length >0){
        link="http://"+link;
    }
    return link;
}

$(window).bind('resize', function() {
    if($(window).width() > 500) {
        $('#left-side').css('width', '50%');
        $('#right-side').css('width', '47%');
    } else {
        $('#left-side').css('width', '100%');
        $('#right-side').css('width', '100%');
    }
});
