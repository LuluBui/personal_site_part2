console.log("Hello World");
const navButtons = document.getElementsByTagName('li');
// if(li.matches(':hover')){
//     console.log("hmm");
// }
for(let i = 0; i < navButtons.length; i++) {
    if(navButtons[i].matches(':hover')) {
        console.log("hmm");
    }
}