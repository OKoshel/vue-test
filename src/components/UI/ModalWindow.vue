<template>
    <div class="modal-window" v-if="showForm" @click="closeWindow">
        <div class="modal-window-content" @click.stop>
        <div class="modal-header d-flex align-items-center">
            <slot name="header"></slot>
            <div @click="closeWindow" class="cursor-pointer">
                <svg-icon type="mdi" :path="path"></svg-icon>
            </div>
        </div>
        <div class="modal-text">
            <slot name="text"></slot>
        </div>
        <div class="modal-buttons">
            <slot name="actions"></slot>
        </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiClose} from "@mdi/js";

export default {

    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiClose,
        }
    },
    props: {
        showForm: Boolean,
        closeWindow: Function,
        default: false,
    },


}
</script>

<style lang="sass" scoped>

.modal-window
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


.modal
  &-header
    margin-bottom: 24px

</style>