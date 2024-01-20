<template>
    <div class="border-pagination" :class="this.activeClass">
        {{page}}
    </div>
</template>

<script>
export default {
    props: {
        page: [Number],
        activeClass: [Boolean],
        required: true
    }
}
</script>

<style lang="sass" scoped>

.border-pagination
    border: 1px solid black
    padding: 10px
    height: 30px
    width: 30px
    display: flex
    align-items: center
    justify-content: center

</style>