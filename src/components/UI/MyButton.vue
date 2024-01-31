<template>
    <div>
        <v-btn  :color="btnColor">
            <v-icon :icon="iconType"  :color="iconColor"/>
                <slot></slot>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "my-button",
    props:{
        btnColor: {
            type: String,
            default: 'black'
        },
        iconColor: {
            type: String,
            default: 'white'
        },
        iconType: {
            type: String,
            default: 'mdi-plus'
        }

    }
}
</script>

<style lang="sass" scoped>

</style>