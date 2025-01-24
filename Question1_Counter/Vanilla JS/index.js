let clicks_count = 0
const element = document.getElementById("button")
element.addEventListener("click",myFunction)
function myFunction(){
    const textElement = document.getElementById('count')
    textElement.textContent=`${++clicks_count}`
}