// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

function main(){
    // main entry point
    let message = "Hello World!";


    document.getElementById("message2").innerHTML = message;
    document.getElementById("message1").innerHTML = "My first JS Program...";
    document.getElementById("message3").innerHTML = "by Sandhu";

    console.log("test");


}

main();