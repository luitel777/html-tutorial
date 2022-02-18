// select all the panel classes including panel-active
// and return arrays
const panels = document.querySelectorAll('.panel')

// this is the weirdest loop I've ever seen
panels.forEach(panel =>{
        // on click function. Pretty self explanatory
        panel.addEventListener('click', () =>{
                removeActiveClasses()
                panel.classList.add('active')
        })
})

// revmoves old active classes
function removeActiveClasses(){
        panels.forEach(panel => {
                panel.classList.remove('active')
        })
}