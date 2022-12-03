
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import NoteMenu from './NoteMenu.svelte'
    // 

    export let note;
    let value = note.content

    $: {
      dispatch('update', {
        id: note.id,
        content: value
      });
    }

    function deleteEvent() {
      dispatch('delete', {
        id: note.id
      })
    }

    let active = false
    let focus = false

        
</script>

<main
  on:mouseenter={() => {
    active = true
  }}
  on:mouseleave ={() => {
    active = false || focus
  }}
>
    <textarea 
        class:defaultv1="{note.color === 'defaultv1' || !note.color}"
        class:greenv1="{note.color === 'greenv1'}"
        class:redv1="{note.color === 'redv1'}"
        class:active={active}
        class="note"
        on:focusin={() => {
          focus = true
          active = true
        }}
        on:focusout ={() => {
          focus = false 
          active = false
        }}
        bind:value></textarea>

    <NoteMenu 
      active={active}
      on:delete={deleteEvent} />
</main>
  
<style>
  main {
      height: 218px;
      position: relative;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      /* background-color: #f5f5f5; */
      /* background-color: rgba(245, 245, 245, .1); */
  }

  textarea {
    resize: none;
  }

  .note {
    top: 18px;  
    height: 200px;
    width: 200px;
    position: absolute;
    padding: 12px;
    padding-top: 30px;
    resize: none;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.08);
    outline: none;
    color: #000;
    background-color: #f5f5f5;
    background-color: var(--color-note-defaultv1);

    font-family: sans-serif;
    font-family: 'Comfortaa', cursive;
    font-weight: 500;
    font-size: 1rem;

    /* caret-color: transparent; */


    transition: box-shadow .08s 0s;

  }

  .note::selection {
    background: #e1f5fe;
  }

  .note.active {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.15);
  }

  .note.defaultv1 {
    background-color: var(--color-note-defaultv1);
  }
  
  .note.redv1 {
    border: 1px solid #870000;
    background-color: var(--color-note-redv1);
    color: #fff;

    
  }

  .note.redv1::selection {
    background: #212121;
  }

  .note.greenv1 {
    background-color: var(--color-note-greenv1);
  }

</style>