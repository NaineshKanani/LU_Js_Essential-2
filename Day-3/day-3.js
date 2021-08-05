function doSomething(){

    let name=document.querySelector("#name").value;
    let city=document.querySelector("#city").value;
    // console.log(name);

    document.querySelector("#sec").innerHTML=`<h1>${name} <br> ${city}</h1>`;
    document.querySelector("#name").value="";
    document.querySelector("#city").value="";

}
