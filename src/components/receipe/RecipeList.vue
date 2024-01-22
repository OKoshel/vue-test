<template>
    <div class="recipe-list">
        <div v-if="lists.length > 0">
        <div v-for="recipe in lists">
            <div class="item-border" @click="$emit('select', recipe.id)">
                <h2 class="mb-3">{{recipe.title}}</h2>
                <h2 class="mb-3">{{recipe.description}}</h2>
            </div>
        </div>
        </div>
        <h4 v-else>Currently you haven't recipes</h4>
    </div>
</template>

<script>
export default {
    props:{
        lists: {
            type: Array,
            required: true
        }
    }

}
</script>

<style lang="sass" >

.recipe-list
    border: 1px solid grey
    padding: 24px
    width: 400px


.item-border
    border: 1px solid grey
    padding: 24px
    margin-bottom: 20px
</style>