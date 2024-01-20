<template>
    <div class="d-flex flex-column gap-3">
        <input :value="modelValue" @input="updateInput" type="text" class="input" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: "my-input",
    props: {
        placeholder: [String],
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e){
            this.$emit('update:modelValue', e.target.value )
        }

    }

}
</script>

<style lang="sass" scoped>

.input
  width: 100%
  padding: 10px
  border: 1px solid darkblue

</style>