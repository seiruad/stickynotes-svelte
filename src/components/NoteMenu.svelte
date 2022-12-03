<script lang="ts">
    // import svelteLogo from './assets/svelte.svg'
  import svelteLogo from '../assets/icons/delete-s1.svg'

  export let active;


  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();


  function deleteIt() {
    if (active) {
      dispatch('delete')
    }
  }

</script>


<div 
  class:hidden="{!active}"
  class:active={active}
  class="note-menu note-menu-close"
  >
  <!-- <button 
    class="delete"
    on:click={deleteIt}>delete</button> -->

    <!-- <button 
      class="button delete"
      on:click={deleteIt}><svg xmlns="http://www.w3.org/2000/svg" height="22px" width="22px"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg></button> -->

      <!-- <object type="image/svg+xml" data="./" class="logo">
        Kiwi Logo 
      </object> -->
      
      <button
        class="button" 
        on:click={deleteIt}>
        <img 
          class="logo"
          src={svelteLogo} 
          alt="x" 
          />
      </button>
     
</div>

  
<style>
  .note-menu {
    position: absolute;
    height: 36px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #c2c2c2; */
    border-radius: 10px;
    background-color: #fff;
    background-color: rgba(255,255,255,.82);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.08);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .note-menu.active {
    transition: box-shadow .08s 0s;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.15);
  }

  .button {
    height: 22px;
    width: 22px;
    padding: 0;
    display: inline-block;
    border: none;
    color: white;
    background-color: #4CAF50; 
    background: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    visibility: visible;
  }



  .logo {
    height: 22px;
    width: 22px;
    padding: 0;
    visibility: visible;
    opacity: 1;


    transition: opacity .08s 0s;
  }

  @media only screen and not (hover: none) {
    .hidden .button,
    .hidden .logo {
      opacity: 0;
      height: 0;
      width: 0;
      visibility:hidden;
  }



  
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo:hover {
    filter: drop-shadow(0 0 6em #ff3e00aa);
  }



}
  
  
</style>