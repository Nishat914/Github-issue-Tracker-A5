document.getElementById('SignInBtn').addEventListener('click',function(){
    const inputUsername=document.getElementById('inputUsername');
    const inputPassword=document.getElementById('inputPassword');
    
    const userName=inputUsername.value;
    const password=inputPassword.value;

    if(userName==='admin' && password==='admin123'){
        window.location.assign('./home.html');
    }
    else{
        alert('Wrong info!');
        return;
    }

})

