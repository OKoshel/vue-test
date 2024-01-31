<template>
        <v-text-field
            clearable
            :label="label"
            :variant="variant"
            :model-value="modelValue"
            @input="updateInput"


        />
        <!--        <input :value="modelValue" @input="updateInput" type="text" class="input" :placeholder="placeholder">-->

</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
        label: {
            type: String,
            default: "Search"
        },
        variant: {
            type: String,
            default: 'outlined'
        }

    },
    methods: {
        updateInput(e){
            this.$emit('update:modelValue', e.target.value )
        }

    }

}
</script>

<style lang="sass">

.input
  width: 100%
  padding: 10px
  border: 1px solid darkblue

</style>