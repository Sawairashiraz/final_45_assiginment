

function make_shirt(size:string= "large" ,message:string ="i love typescript"){
    console.log(`making a ${size}t_shirt with the message "${message}" print on it`);

}
make_shirt();//Default large and message
make_shirt("medium");//Default message,medium size
make_shirt("small","Dive into coding"); //Coustom message,small size