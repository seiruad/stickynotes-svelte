<script lang="ts">
  import { fade } from 'svelte/transition';
  import lockIcon from '../assets/icons/lock.svg'
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const colors = {
    reddv1:'redv1',
    greenv1:'greenv1',
    premium:'premium',
    defaultv1:'defaultv1',
  }

  export let activeColor

  function handleUpdate(color) {
    if (color === colors.premium) return
    if (color === activeColor) dispatch('return')
    dispatch('updateColor', {color})
  }

</script>


<main 
  class="color-picker"
  in:fade="{{
    delay: 80,
    duration: 80
  }}">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class:active={activeColor===colors.reddv1} class="picker picker-red" on:click={() => handleUpdate('redv1')} ></div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class:active={activeColor===colors.greenv1} class="picker picker-green" on:click={() => handleUpdate('greenv1')}></div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class:active={activeColor===colors.premium } class="picker picker-premium" on:click={() => handleUpdate('premium')}>
    <div class="filter">
      <img 
      class="logo logo-close" 
      src={lockIcon} 
      alt="x"  />
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class:active="{!activeColor || activeColor===colors.defaultv1}" class="picker picker-default" on:click={() => handleUpdate('defaultv1')}></div>
</main>

<style>
.color-picker {
    position: relative;
    height: 80px;
    width: 150px;
    /* margin-top: 25px; */
    display: flex;
    flex-wrap: wrap;
    /* flex-direction:column; */

    /* background: #000; */
}

.picker {
    border: 1px solid #BDBDBD;
    transition: .2s 0s;
}

.picker:hover {
    box-shadow: 0 0 4px 2px rgba(0,0,0,.25);
    cursor: pointer;
}

.picker.active:hover {
  cursor: auto;
}

.picker-red {
    height: 55px;
    width: 100px;
    background-color: #BF360C;
    background-color: rgba(191, 54, 12, .2);
    border-radius: 10px 0 0 0;
}

.picker-red.active {
  box-shadow: -2px -2px 4px 0 rgba(0,0,0,.225);
  background-color: rgba(191, 54, 12, .87);
}

.picker-green  {
    height: 25px;
    width: 50px;

    background-color: rgba(220, 237, 200, .6);
    border-radius: 0 10px 0 0;
}

.picker-green.active {
  background-color: rgba(220, 237, 200, 1);
  box-shadow: 2px -2px 4px 0 rgba(0,0,0,.225);
}


.picker-premium {
    height: 25px;
    width: 100px;
    background: linear-gradient(315deg, #EC407A, #051937);

    border-radius: 0 0 0 10px;
}
.picker-premium:hover {
    cursor:not-allowed;
}

.picker.picker-premium:hover {
    box-shadow: none;
}

.picker-premium > .filter {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0 0 0 10px;
}

.picker-default {
    position: absolute;
    height: 55px;
    width: 50px;

    top: 25px;
    left: 100px;

    background-color: #f5f5f5;
    border-radius: 0 0 10px 0;
}

.picker-default.active {
  background-color: #fafafa;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,.225);
}


.logo {
  height: 16px;
  width: 16px;
  padding: 0;
}

</style>