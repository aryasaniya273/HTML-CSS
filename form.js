// const { use } = require("react");

function saniya() {
    var user_name = document.getElementById("Uname").value;
    var Password = document.getElementById("Password").value;


    // document.writeln(user_name);
    // document.writeln(Password);
    var status = false
    var c = 0;
    for (var i = 0; i < user_name.length; i++) {
        if (user_name[i] >= 'a' && user_name[i] <= 'z' || user_name[i] >= 'A' && user_name[i] <= 'Z' || user_name[i] == ' ') {
            status = true;

        }
        else {
            status = false
        }
    }
    if (status == true) {
        document.getElementById("uname_spn").style.display = "none";
    }
    else {
        document.getElementById("uname_spn").style.display = "inline";
    }

}