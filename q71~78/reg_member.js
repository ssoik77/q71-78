var id_check;
var pw_check;
var pw_re_check;
var name_check;
var email_check;

var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSexes;    // 주의
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var name;
var email;
var birth_y;
var birth_m;
var birth_d;
var tel_1;
var tel_2;
var tel_3;

var sex;

window.onload = function () {

    id_check = document.getElementById("id")
    pw_check = document.getElementById("pw")
    pw_re_check = document.getElementById("pw_re")
    name_check = document.getElementById("user_name")
    email_check = document.getElementById("email")
    ipBirth_y = document.getElementById("birth_y");
    ipBirth_m = document.getElementById("birth_m");
    ipBirth_d = document.getElementById("birth_d");
    ipTel_1 = document.getElementById("tel_1");
    ipTel_2 = document.getElementById("tel_2");
    ipTel_3 = document.getElementById("tel_3");

    ipSexes = document.getElementsByName("sex");

}

function alam() {

    id = id_check.value
    pw = pw_check.value
    pw_re = pw_re_check.value
    name = name_check.value
    email = email_check.value
    birth_y = ipBirth_y.value;
    birth_m = ipBirth_m.value;
    birth_d = ipBirth_d.value;
    tel_1 = ipTel_1.value;
    tel_2 = ipTel_2.value;
    tel_3 = ipTel_3.value;


    for (var i = 0; i < ipSexes.length; i++) {
        if (ipSexes[i] == true) {
            sex = ipSexes.value;
        }
    }

    var user_info =
        "id: " + id + "\n"
        + "pw: " + pw + "\n"
        + "pw_re: " + pw_re + "\n"
        + "userName: " + name + "\n"
        + "email: " + email + "\n"
        + "birth_y: " + birth_y + "\n"
        + "birth_m: " + birth_m + "\n"
        + "birth_d: " + birth_d + "\n"
        + "tel_1: " + tel_1 + "\n"
        + "tel_2: " + tel_2 + "\n"
        + "tel_3: " + tel_3 + "\n"
        + "sex: " + sex;

        alert(user_info);

if(check_id()&&check_pw()&&check_pw_re()&&check_pw_pw_re()&&check_name()&&check_email()){
    alert("회원가입 완료.");
}else{
    alert("입력된 정보가 틀렸습니다.");
}


}


function check_id() {
    if (id.length >= 6 && id.length <= 15) {
        return true;
    } else {
        return false;
    }
}

function check_pw() {
    if (pw.length >= 6 && pw.length <= 15) {
        return true;
    } else {
        return false;
    }
}

function check_pw_re() {
    if (pw_re.length >= 6 && pw_re.length <= 15) {
        return true;
    } else {
        return false;
    }
}

function check_pw_pw_re() {
    if (pw == pw_re) {
        return true
    } else {
        return false
    }

}

function check_name() {
    if (name.length >= 2 && name.length <= 20) {
        return true;
    } else {
        return false;
    }
}

function check_email() {
    if (email.length >= 10 && email.length <= 20) {
        return true;
    } else {
        return false;
    }
}

