let name = prompt("Adinizi giriniz") //kullanıcıdan adını almak için
let myName = document.querySelector("#myName") //kullanıcının adını ekleyeceğimiz kısıma ulaşıyoruz
myName.innerHTML= `${name}` //ve adı ekliyoruz

let x = new Date()  
let date = x.toUTCString(); //güncel tarihi alıyoruz

let myClock = document.querySelector("#myClock") //tarihin ekleneceği kısıma ulaşıyoruz
myClock.innerHTML=`${date}` //ve tarihi ekliyoruz
