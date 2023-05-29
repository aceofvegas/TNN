var donate = { 
     // name 
     l1 : "Your donation's will help this great organization grow and continue spreading truth", 
     l2 : "Bitcoin: bc1qgf6fcsgrmjd6pkwg3yvwwxm8x5a9tup7espa9a", 
     l3 : "Ethereum: 0xd69a52d48DB1907289056f0D5399D80f56eEA9F6", 
     l4 : "Litecoin: ltc1qh3cuqxlf4trfpvjxlau4v6ctn40xc3f38kat4q", 
     l5 : "Monero: 48P18F4pHDPbr5Acs9j5DCCjW4ENnsDDecN6vtZQiZDdVkYboEWPVMr1Csf68AAz1aKaFArpfKiiBVyYBn2rKYkAVBxPZgG",
     //l5 : "More", 
     // links 
     link1 : 'index.html',  // simply change these to change menu for whole site 
     link2 : "about.html", 
     link3 : "portfolio.html", 
     link4 : "news.html", 
     link5 : "contact.html",
     link5 : "idk.html", 
    
     // (B) INITIALIZE GAME 
     init : () => { 
         // (B1) GET HTML ELEMENTS 
         donate.one = document.getElementById("donate-text1"); 
         donate.two = document.getElementById("addr1"); 
         donate.three = document.getElementById("addr2"); 
         donate.four = document.getElementById("addr3"); 
         donate.five = document.getElementById("addr4"); 
  
         donate.start() 
     },   
  
     start : () => { 
         // place bet when round starts  
         donate.one.innerHTML = donate.l1; 
         donate.two.innerHTML = donate.l2; 
         donate.three.innerHTML = donate.l3; 
         donate.four.innerHTML = donate.l4; 
         //donate.five.innerHTML = donate.l5; 
         //menu.one = document.getElementById("menu1").href = menu.link1; 
         //menu.two = document.getElementById("menu2").href = menu.link2; 
         //menu.three = document.getElementById("menu3").href = menu.link3; 
         //menu.four = document.getElementById("menu4").href = menu.link4; 
         //menu.five = document.getElementById("menu5").href = menu.link5; 
  
     }, 
  
 }; 
     window.addEventListener("DOMContentLoaded", donate.init);