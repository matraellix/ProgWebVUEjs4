<template>

    <div class="superHeroCard">
        <div class="cardAll">
            <div class="cardImage">
                <img :src="imageUrl" :alt="name">
            </div>
            <div class="cardContent">
                <div v-if="sortType === 'AZsort' || sortType === 'ZAsort'">
                    <h2>{{ name }} </h2>
                    <h3 v-if="biography.fullName !== ''"> Full name : {{ biography.fullName }}</h3>
                    <h4>ID : {{ id }} </h4>
                </div>
                <div v-if="sortType === 'strength(StrongestToWeakest)' || sortType === 'strength(WeakestToStrongest)'">
                    <h2>{{ name }} </h2>
                    <h3>Strength (from 1 to 100) : {{ powerstats.strength }}</h3>
                </div>
                <div v-if="sortType === 'Intelligence(SmartestToDumbest)' || sortType === 'Intelligence(DumbestToSmartest)'">
                    <h2>{{ name }} </h2>
                    <h3>Intelligence (from 1 to 100) : {{ powerstats.intelligence }}</h3>
                </div>
            </div>
        
        </div>
    </div>


</template>

<script>
    
    export default {
        name: 'superHeroCard',
        props: {
            biography : {type: Object, required: true},
            sortType: {type: String, required: true},
            powerstats: { type: Object, required: true },
            id: { type: Number, required: true },
            name: {type: String, required: true},
            imageUrl: {type:String, required:true, default:"https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"}
        }

    }
</script>



<style scoped>
    .superHeroCard{
        padding: 1em;
        max-width: 16em;
        
        
    }
    h2{
        color : rgba(245, 210, 53,0.8);
        
    }
    .cardAll{
       
        background-clip: padding-box;
        border-radius: 6% /4%;
        filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.3));
        transition: .4s;
        overflow: hidden;
        background-color : rgb(40, 40, 42);
        height : 23.5em;
        

    }
    .cardAll:hover{
        filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.4));
        transform: translate(-3px, -3px);
        
    }

    .cardImage img {
       
        border-radius: 20%;
        aspect-ratio: 1;
        width : 200px;
        object-fit: cover;
        padding: 30px;
        

        outline: 100px solid rgba(0, 30, 49, 0.2);
        outline-offset: -130px;
        transition: .4s;

    }

    .cardImage img:hover {
        border-radius: 15%;
        outline: 2px solid rgba(203, 144, 77,0.2);
        outline-offset: -1em;

    }
    
    .cardContent {
        font-size: 0.8em;
        padding : 1em;
        
    }
    .cardAll *{
        background-color : rgb(40, 40, 42);

    }
</style>