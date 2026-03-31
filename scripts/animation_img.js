const elementImage = document.getElementById("imgAnimation");

function shadowInitial() {
    elementImage.style.transition = "1.0s"
    elementImage.style.boxShadow = "0px 10px 100px  #FCA31180";
};

function shadowFinal() {
    elementImage.style.transition = "1.0s"
    elementImage.style.boxShadow = "0px 10px 20px  #FCA31180";
};
        
setInterval(shadowInitial, 1000);
setInterval(shadowFinal, 2000);