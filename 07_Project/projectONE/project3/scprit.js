const re = document.querySelector("#clock")



setInterval(function(){
    let date  = new Date();
    // console.log(date.toLocaleTimeString());

    re.innerHTML = date.toLocaleTimeString();
},1000)


