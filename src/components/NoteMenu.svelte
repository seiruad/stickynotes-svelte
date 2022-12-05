<script lang="ts">
    // import svelteLogo from './assets/svelte.svg'
  import { fade, fly } from 'svelte/transition';
  import PaletteColor from './PaletteColor.svelte'
  import PaletteDelete from './PaletteDelete.svelte'
  import paletteIcon from '../assets/icons/palette.svg'
  import svelteLogo from '../assets/icons/delete-s1.svg'
  import returnIcon from '../assets/icons/return.svg'

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let active;
  export let color;


  let status: 'none'|'delete'|'color' = 'none'
  let open = false
  let header = ''
  let hiddden = false
  const headerDict = {
    none: '',
    delete: 'Удалить?',
    color: 'Выберете'
  }


  // $: {
  //   header = headerDict[status]
  //   console.log(status, header)
  // }




  function deleteIt() {
    if (active) {
      dispatch('delete')
    }
  }

  function handleClick() {

    
  }

</script>


<div 
  class:hidden="{!active}"
  class:active="{active}"
  class:open="{status !== 'none'}"
  class:close="{status === 'none'}"
  class:delete="{status === 'delete'}"
  
  class="note-menu"
  >

    {#if status === 'none' || !status}
      <button
        in:fade="{{
          delay: 80,
          duration: 80
        }}"
        class="button button-close color" 
        on:click={() => status = 'color'}>
        <img 
          class="logo logo-close" 
          src={paletteIcon} 
          alt="x"  />
      </button>
      <button
        in:fade="{{
          delay: 80,
          duration: 80
        }}"
        class="button button-close delete" 
        on:click={() => status = 'delete'}>
        <img 
          class="logo logo-close" 
          src={svelteLogo} 
          alt="x"  />
      </button>
    {:else}
      <div 
        in:fade="{{
          delay: 80,
          duration: 80
        }}"
        class="nav">
        <span class="header">{headerDict[status]}</span>
        <button
        class="button button-open return" 
        on:click={() => status = 'none'}>
          <img 
            class="logo logo-open" 
            src={returnIcon} 
            alt="x"  />
        </button>
      </div>
    {/if}

    {#if status === 'delete'}
      <PaletteDelete 
        on:return={() => status = 'none'}
        on:delete />
    {:else if status === 'color'}
      <PaletteColor
        activeColor={color}
        on:updateColor
      />
    {/if}
     
</div>

  
<style>
  .note-menu {
    top: 0px;
    position: absolute;
    display: flex;
    justify-content:space-around;
    align-items: center;
    /* border: 1px solid #c2c2c2; */
    border-radius: 10px;
    background-color: #fff;
    background-color: rgba(255,255,255,.82);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.08);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    transition: all .08s 0s;
  }

  .note-menu.close {
    height: 36px;
    width: 100px;
    
  }

  .note-menu.active {
    /* transition: box-shadow .08s 0s; */
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.15);
  }

  .note-menu.open {
    /* left: 16px; */
    position: absolute;
    display: block;
    background-color: rgba(255,255,255,.87);
    width: 172px;
    height: 140px;
    padding: 0 12px;
    position: absolute;
    border-radius: 10px;

  }

  .nav {
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .header {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    user-select: none;
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
  }

  .button-close {
    visibility: visible;
  }

  .logo {
    height: 22px;
    width: 22px;
    padding: 0;
  }

  .logo-close {
    visibility: visible;
    opacity: 1;


    transition: opacity .08s 0s;
  }

  

  @media only screen and not (hover: none) {
    .hidden .button-close,
    .hidden .logo-close {
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





