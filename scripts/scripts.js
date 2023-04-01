let themechanger = document.querySelector(".theme");
console.log(themechanger);

function NoteTheme(event) {
  document.body.classList.toggle("darkTheme");
  document.querySelector(".notes").classList.toggle("NotesDarkTheme");
//You can call classlist on line 6 if you saved this into a variable. 
  console.log(themechanger.textContent);
  if (themechanger.textContent === "Dark Theme") {
    themechanger.textContent = "Light Theme";
  } else {
    themechanger.textContent = "Dark Theme";
  }
}

themechanger.addEventListener("click", NoteTheme);

// Cancel Button - Should hide the text area.
//querySelector the button known as "cancel"
let textArea = document.querySelector("#textbox");

function hideTextRelated(event) {
  //three querySelectors for each Text Area, Save, and Cancel.
  //document.querySelector("").classList.add
  //we need to use add due to the fact we are not toggling.
}

function newNotation(event) {
  //if else statement where
    //check the hideTextRelated variables with contains() to see if they have class "hideElements"
    //only should remove if contains() states it is there. 
    //textArea.classList.remove
    //document.querySelector("#textbox").value = '' -- to clear the textbox if there is anything shown.
}

let notes1 = {
    title:"note one",
    body:"this is my first note"
}

let notes2 = {
    title:"note two",
    body:"this is my second note"
}

let notesArray = [notes1, notes2]

let noteSaverbutton = document.querySelector(".save")

function noteSaver(event) {
    let userInput = prompt('What is the title of the note you want to save?')
    let newNote = {
        title: userInput,
        text: textArea.value,
    }
    notesArray.push(newNote)
    //Find where my lists of notes are stored -- in this case it is in the class "noteslist"
    //Create a new li for the newNote
    //Update the textContent of the new li for newNote. userInput becomes the textContent.
    //Add it to the notesList section of the li. 
}
 
noteSaverbutton.addEventListener('click', noteSaver)