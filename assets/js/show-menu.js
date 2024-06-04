document.querySelector(".hamburguer").addEventListener("click", ()=>
document.querySelector(".container").classList.toggle("show")
);


document.querySelector(".nav").addEventListener("click", ()=>
document.querySelector(".container").classList.remove("show"),
document.querySelector(".container").classList.toggle("close-menu")
);


const button=document.getElementById("open-modal")
const modal= document.querySelector("dialog")
const buttonClose=document.querySelector("dialog button")

button.onclick= function() {
    modal.showModal()
}

buttonClose.onclick= function(){
    modal.close()
}

const button2=document.getElementById("open-modal2")
const modal2= document.querySelector("dialog")
const buttonClose2=document.querySelector("dialog button")

button2.onclick= function() {
    modal2.showModal()
}

buttonClose2.onclick= function(){
    modal2.close()
}

const button3=document.getElementById("open-modal3")
const modal3= document.querySelector("dialog")
const buttonClose3=document.querySelector("dialog button")

button3.onclick= function() {
    modal3.showModal()
}

buttonClose3.onclick= function(){
    modal3.close()
}

const button4=document.getElementById("open-modal4")
const modal4= document.querySelector("dialog")
const buttonClose4=document.querySelector("dialog button")

button4.onclick= function() {
    modal4.showModal()
}

buttonClose4.onclick= function(){
    modal4.close()
}

const button5=document.getElementById("open-modal5")
const modal5= document.querySelector("dialog")
const buttonClose5=document.querySelector("dialog button")

button5.onclick= function() {
    modal5.showModal()
}

buttonClose5.onclick= function(){
    modal5.close()
}