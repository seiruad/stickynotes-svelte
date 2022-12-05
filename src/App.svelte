<script lang="ts">
  import { LocalAPI } from './api/LocalAPI';
  import Note from './components/Note.svelte'


  // const notes = [
  //   {
  //     id: 'p0b2wy',
  //     content: 'Заметочка-переметочка 💩',
  //     color: 'redv1'
  //   },
  //   {
  //     id: 'dkxuy8',
  //     content: '🚀 Ракета Чемпиона',
  //     color: 'greenv1'
  //   },
  //   {
  //     id: '8yctmo',
  //     content: 'Сергей сделал чудо, хвала Сергею! 💕💕',
  //     color: 'defaultv1'
  //   },
  //   {
  //     id: '6t4p86',
  //     content: 'Мама, привет\n👻👻',
  //   },
  // ]


  let notes: Array<any> = LocalAPI.getNotes()

  function deleteIt(event) {
    // const isDelete = confirm('Вы хотите удалить эту заметку?')
    // if (!isDelete) {
    //     return
    // }

    const id = event.detail.id
    notes = notes.filter(note => note.id !== id)
    LocalAPI.deleteNote(id)
  }

  function updateContent(event) {
    LocalAPI.updateNoteContent(event.detail.id, event.detail.content)
  }

  function updateColor(event) {
    if(notes === undefined) {return}
    const id = event.detail.id
    const color = event.detail.color
    LocalAPI.updateNoteColor(event.detail.id, event.detail.color)
    notes = LocalAPI.getNotes()
  }

</script>

<main>
  {#each notes as note, i (note.id)}
    <Note 
      note={note} 
      on:updateContent={updateContent}
      on:updateColor={updateColor}
      on:delete={deleteIt}/>
  {/each}

  <button 
    class="add-note" 
    type="button"
    on:click={() => {
      const note = LocalAPI.addNote()
      notes = [...notes, note]
    }}>+</button>


</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, 218px);
    justify-content: center;
    padding: 24px;
    gap: 30px 24px;
    font-family: 'Comfortaa', cursive; 
  }

  .add-note {
    height: 200px;
    margin-top: 18px;
    border: none;
    outline: none;
    background: rgba(0,0,0,.1);
    border-radius: 10px;
    font-size: 120px;
    color: rgba(0,0,0,.5);
    cursor: pointer;
    transition: background 0.08s;
  }

  .add-note:hover {
    color: rgba(0,0,0,.6);
    background: rgba(0,0,0,.2);
  }


</style>