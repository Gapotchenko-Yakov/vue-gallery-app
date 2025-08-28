<template>
    <div class="px-[30px] py-[15px] bg-black text-gray-100">
        <div class="flex justify-start items-center">
            <!-- Left -->
            <div class="flex gap-20 justify-start items-center">
                <span class="flex gap-[15px] items-center">
                    <button
                        type="button"
                        class="flex 2xl:hidden"
                    >
                        <app-icon
                            name="menu"
                        />
                    </button>
                    <app-icon
                        name="logo"
                    />
                </span>
                <nav-bar class="hidden 2xl:flex gap-5"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '../NavBar/NavBar.vue';
</script>

<style scoped>
  
</style>