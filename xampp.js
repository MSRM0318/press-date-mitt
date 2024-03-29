alert("¡Hola esto es xampp!");

var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
const darkModeSwitch = document.querySelector('#dark-mode-switch')
  
const activateTab = tabnum => {
    
    tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    
    tabContents.forEach( tabContent => {
        tabContent.classList.remove('active')
    })
  
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})

darkModeSwitch.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('darkmode')
    localStorage.setItem('jstabs-darkmode', JSON.stringify(!darkmode))
})

let darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'))
const opentab =  JSON.parse(localStorage.getItem('jstabs-opentab')) || '3'

if (darkmode === null) {
    darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches 
}
if (darkmode) {
    document.querySelector('body').classList.add('darkmode')
    document.querySelector('#dark-mode-switch').checked = 'checked'
}
activateTab(opentab)