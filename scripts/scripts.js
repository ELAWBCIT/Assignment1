//Task 1) Dark Theme Implementation
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

//Task 2) Cancel Button and Text Area Implementation + Re-Implementation 

// Cancel Button - Should hide the text area.
//querySelector the button known as "cancel"
let cancelToggle = document.querySelector(".cancel");
let textArea = document.querySelector("#textbox");
let saveToggle = document.querySelector(".save");

let newNoteToggle = document.querySelector(".newnote")

function hideTextRelated(event) {
  //three querySelectors for each Text Area, Save, and Cancel.
  cancelToggle.classList.add("hideElements")
  //document.querySelector("").classList.add
  textArea.classList.add("hideElements")
  //we need to use add due to the fact we are not toggling.
  saveToggle.classList.add("hideElements")
  document.querySelector("#textbox").value = ''
}

cancelToggle.addEventListener("click", hideTextRelated)

function newNotation(event) {
  //if else statement where
  //check the hideTextRelated variables with contains() to see if they have class "hideElements"
  //only should remove if contains() states it is there. 
  //textArea.classList.remove
  if (cancelToggle.classList.contains("hideElements")) {
    cancelToggle.classList.remove("hideElements")
  }
  if (textArea.classList.contains("hideElements")) {
    textArea.classList.remove("hideElements")
  }
  if (saveToggle.classList.contains("hideElements")) {
    saveToggle.classList.remove("hideElements")
  }
}

newNoteToggle.addEventListener("click", newNotation)
    //document.querySelector("#textbox").value = '' -- to clear the textbox if there is anything shown.

//Task 3) Save Button Linkage and List appendage. 


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
        body: textArea.value,
    }
    // console.log(newNote);
    notesArray.push(newNote)
    //Find where my lists of notes are stored -- in this case it is in the class "noteslist"
    let notationList = document.querySelector(".noteslist")
    //Create a new li for the newNote
    let newLi = document.createElement("li")
    //Update the textContent of the new li for newNote. userInput becomes the textContent.
    newLi.textContent = userInput
    //Add it to the notesList section of the li. 
    notationList.appendChild(newLi)
    console.log(notesArray)
}
 
noteSaverbutton.addEventListener('click', noteSaver)

// Task 4) List items on sidebar clicked searches through notesArray, finds JS object property equal to text of clicked item. 
let notationClick = document.querySelector(".noteslist")
// Make the list items clickable - addEventListener
function noteClicker(event) {
    console.log(event.target);
// For loop through our notesArray to look for whatever object is the same as our title. 
    for (let item of notesArray) {
        if (item['title'] == event.target.innerHTML) {
            console.log(event.target.innerHTML);
            textArea.value = item['body'];
        } 
    } 
    // for (let i = 0; i < notesArray.length; i++) {
    //   if (notesArray[i]['title'] == event.target.innerHTML) {
    //     console.log(notesArray[i]);
    //     textArea.value = notesArray[i]['body'];
    //   }
    // }
// document.querySelector("#textbox").value = textArea.value 
}

notationClick.addEventListener('click', noteClicker) 
