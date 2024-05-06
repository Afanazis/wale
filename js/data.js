const namaSaya = 'mico andreas';
let usia = 30.2
console.log(namaSaya);
console.log(usia)

// alert ('silahkan login')

// username&pass

function func(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if ( user == "micoandreas" && pass == "123456"){
        window.location.assign('main-menu.html')
        alert ('berhasil login !')
        
    }
    else {
    alert ('username atau password salah')
    }
}

