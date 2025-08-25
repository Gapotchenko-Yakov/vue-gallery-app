<template>
  <div class="px-[30px] py-[15px] bg-black text-white">
    <div>
        <div class="flex gap-20 items-center">
            <span class="flex gap-[15px] items-center">
                <button
                    type="button"
                    class="flex lg:hidden"
                >
                    <app-icon
                        name="menu"
                    />
                </button>
                <app-icon
                    name="logo"
                />
            </span>
            <nav-bar class="hidden lg:flex"/>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import NavBar from '../NavBar/NavBar.vue';
</script>

<style scoped>
  
</style>