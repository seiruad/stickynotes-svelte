import { IDGenerator } from "../helpers/IDGenerator";

const localstorageName = 'stockynotes-notes'



/* API */
export class LocalAPI {

    static getNotes() { 
        return JSON.parse(localStorage.getItem(localstorageName) || '[]')
    }
    

    static saveNotes(notes) {
        localStorage.setItem(localstorageName, JSON.stringify(notes))
    }


    static updateNote(id, content) {
        const notes = this.getNotes();
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes[i].content = content
            }
        } 
        this.saveNotes(notes);
    }


    static addNote() {
        const notes = this.getNotes()
        const note = {
            id: IDGenerator.generateID(),
            content: ''
        }
        notes.push(note)
        this.saveNotes(notes)
        return note
    }


    static deleteNote(id) {
        const notes = this.getNotes()
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes.splice(i, 1);
                break
            }
        } 
        this.saveNotes(notes)
    }
    
}