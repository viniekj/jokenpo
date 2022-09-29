const choiceButtons = document.querySelectorAll('[data-choices]');

choiceButtons.forEach(choiceBtn => {
    choiceBtn.addEventListener('click',() => {
        const choiceName = choiceBtn.dataset.choices;
        makeaChoice(choiceName);
    })
})
function makeaChoice(choice){
    console.log(choice)
}
