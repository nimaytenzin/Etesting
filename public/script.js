const shopName =document.getElementById('shopName');
const zoneName = document.getElementById('zoneName');
const shopKeeper = document.getElementById('nameShopkeeper');
const cid = document.getElementById('cidShopkeeper');
const phoneNumber = document.getElementById('phoneNumber');
const dateofTest = document.getElementById('dateofTest');

const printName = document.getElementById('shopNamePrint');
const printZone = document.getElementById('zoneNamePrint');
const printShopkeeper= document.getElementById('nameShopkeeperPrint');
const printCid= document.getElementById('cidShopkeeperPrint');
const printPhoneNumber= document.getElementById('phoneNumberPrint');
const printDateTest= document.getElementById('dateofTestPrint');


function generate(){
  printName.innerText = shopName.value
  printZone.innerText = zoneName.value
  printShopkeeper.innerText = shopKeeper.value
  printCid.innerText = cid.value
  printPhoneNumber.innerText = phoneNumber.value
  printDateTest.innerText = dateofTest.value

  const main = document.getElementById('main')
  html2canvas(document.querySelector("#capture")).then(canvas => {
      main.appendChild(canvas)
  });

}

function download(){
   location.reload();
    const download = document.getElementById("download")
    let image = document.querySelector("canvas").toDataURL("image/png")
    .replace("image/png", "image/octet-stream")
    download.setAttribute("href", image)
}