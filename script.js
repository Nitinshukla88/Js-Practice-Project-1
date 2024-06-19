outerdiv = document.querySelector('.con')

outerdiv.addEventListener('mousemove',function(event){
    var val = outerdiv.getBoundingClientRect()
    if((event.clientX-val.left)<val.width/2){
        outerdiv.style.backgroundColor = "#"+(255).toString(16)+(20).toString(16)+(20).toString(16)
    }else{
        outerdiv.style.backgroundColor = "green"
    }
})

outerdiv.addEventListener("mouseout",function(){
    outerdiv.style.backgroundColor = "white"
})




