<template>
    <header>
        <h1>SuperHeroes and Villains Wiki</h1>
        <nav class="navBar">
            <router-link :to="{name: 'gallery'}">
                <div class="searchBar" v-if="$route.name === 'superhero'">
                    <input type="button" value="back to the gallery">
                </div>
            </router-link>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'headerComponent',
}
</script>

<style scoped>
label{
    padding: 1em;
}
.searchBar input{
    border-bottom: 2px solid rgb(30, 30, 32);
}
header{
    padding: 1.5em;
}
</style>