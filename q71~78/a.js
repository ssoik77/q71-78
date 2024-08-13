var input_id = "";
var input_pw = "";


var id_box;
var password_box;
var divlog;

window.onload = function () {

    id_box = document.getElementById("id");
    password_box = document.getElementById("password");
    divlog = document.getElementById("log_box");
}






function op() {
    var idText = id_box.value;
    var pwText = password_box.value;
    
    alert("id: " + idText + " password: " + pwText);
if(idText == "qwer" && pwText == "asdf"){
    
    divlog.innerHTML = idText+"고객님 반갑습니다."
}else{
    alert("로그인 실패");
    
}


}








