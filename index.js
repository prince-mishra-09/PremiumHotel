function createWarning(warn) {
    let warningDiv = document.createElement("div");
    warningDiv.className = "warning-box";
    warningDiv.innerHTML = warn
    document.body.appendChild(warningDiv);
    warningDiv.style.display = "block";
    setTimeout(() => {
        warningDiv.remove();
    }, 3000);
}

function checkValidation(c, d,n,p,r) {
    if (c != "chitrakoot") {
        createWarning("Rooms are available only in Chitrakoot.")
        return false
    }
    // let today = new Date()
    // let arr = today.toLocaleDateString().split('/')
    // d = d.split('-')
    // if (d[0] >= arr[2] && d[1] >= arr[0]) {
    //     createWarning("Enter Valid Date!")
    //     return false
    // }
    if(n<0 || !Number(n)){
        createWarning("Enter proper duration!")
        return false
    }
    if(p<0 || !Number(p)){
        createWarning("Enter proper persons count!")
        return false
    }
    if(r<0 || !Number(r)){
        createWarning("Enter proper room count!")
        return false
    }
    return true
}
let goback
function findHotels() {
    let city = document.querySelector('#city').value
    let date = document.querySelector('#date').value
    let nights = document.querySelector('#nights').value
    let persons = document.querySelector('#persons').value
    let rooms = document.querySelector('#rooms').value

    if (checkValidation(city, date, nights, persons, rooms)) {
        document.querySelector(".master1").style.display = "none"
        document.querySelector(".master2").style.display = "none"
        document.querySelector(".master3").style.display = "none"
        goback = document.createElement("div");
        goback.className = "goback";
        goback.innerHTML = `<button onclick="returnMasters()">Goback</button>`;
        document.body.appendChild(goback);
        goback.style.display = "block";

        let priceArr = document.querySelectorAll('.price')
        for (i = 0; i < 16; i++) {
            temp = priceArr[i].textContent
            temp = Number(temp[0] + temp[1] + temp[2]) * Number(nights)
            priceArr[i].textContent = temp + "rs"
        }
    }

}
function returnMasters() {
    document.querySelector(".master1").style.display = "block"
    document.querySelector(".master2").style.display = "flex"
    document.querySelector(".master3").style.display = "flex"
    document.querySelector(".goback").remove()
}