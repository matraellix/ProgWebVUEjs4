<template>
    <div class="superhero-card">
        <img class="image" src="https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"/>
        <div>
        <h2 class="name">{{name}}</h2>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'SuperHeroCard',
        props: {
            name: {type: String, required: true},
            image: {type:String, default:"https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"}
        }
    }
</script>

<style scoped>
    .picture {
        width:10em;
        height:10em;
    }
    .superhero-card {
        display: flex;
    }

    h2 {
        font-size: 20px;
    }
</style>