<template>
    <div class="modal" v-if="show" @click="this.$emit('update:show', false)">
        <div class="modal-content" @click.stop>
            <h4 class="mb-3">{{title}}</h4>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: Boolean,
        default: false,
        title: String
    },


}
</script>

<style lang="sass" scoped>
.modal
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(0,0,0,0.5)
  position: fixed
  display: flex
  &-content
    margin: auto
    border-radius: 10px
    background-color: white
    min-height: 50px
    max-width: 60%
    padding: 24px



</style>