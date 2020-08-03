import { criminalList } from "./criminals/criminalList.js"
import {crimeSelect} from './convictions/convictionSelect.js'
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./ShowNotesButton.js"
import "./notes/NoteList.js"
import {showWitnessButton, showWitnesses} from "./ShowWitnessButton.js"

//import { officerList } from "./officers/officerList.js"

//officerList()
crimeSelect()
criminalList()
officerSelect()
NoteForm()
ShowNoteButton()
showWitnessButton()
showWitnesses()
