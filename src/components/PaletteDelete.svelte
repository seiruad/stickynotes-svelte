<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>


<div 
  in:fade="{{
    delay: 80,
    duration: 80
  }}"
  class="open-body delete" >
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div 
    on:click={() => dispatch('delete')}
    class="yes">
    <div class="text">Да</div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div 
    on:click={() => dispatch('return')}
    class="no">
    <div class="text">Нет</div>
  </div>
</div>

<style>
  .open-body.delete {
    height: 63px;
    /* margin-top: 10px; */
    /* padding: 15.5px 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-family: 'Roboto Slab', serif; */
  }

  .open-body.delete > * {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;
    user-select: none;
  }

  .open-body.delete > *:hover {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.15);
  }

  .open-body.delete .text {
    /* font-family: 'Roboto Slab', serif; */

  }

  .open-body.delete > .yes {
    width: 48px;
    background-color: #FFA17A;
    background-color: rgb(255, 161, 122, .25);

    border-radius: 10px 0 0 10px;
    color: #212121;
    color: #C97B63;
    font-weight: 700;
    border: 2px solid #FFAB91;
    border-right-width: 0;
  }

  .open-body.delete > .no {
    width: 100px;
    background-color: #D7FFD9;
    background-color: rgb(215, 255, 217,.25);
    background: linear-gradient(270deg, rgba(165, 214, 167, .25), rgba(215, 255, 217, .25));
    

    border-radius:0 10px 10px 0;
    color: #212121;
    color: #75A478;
    font-weight: 700;
    border: 2px solid #A5D6A7;
    border-left-width: 1px;
  }

  .open-body.delete > .yes:hover {
    box-shadow: -2px 0 4px 0 rgba(0,0,0,.15);
  }

  .open-body.delete > .no:hover {
    box-shadow: 2px 0 4px 0 rgba(0,0,0,.15);
  }


</style>