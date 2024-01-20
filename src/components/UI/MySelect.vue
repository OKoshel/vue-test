<template>
    <select class="select" :value="modelValue" @change="optionChange">
        <option value="" disabled>Choose item</option>
        <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
        >
            {{option.name}}

        </option>

    </select>
</template>

<script>
export default {
    name: 'my-select',
    props:{
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }

    },
    methods: {
        optionChange(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }

}
</script>

<style lang="sass" scoped>

.select
  padding: 10px

</style>