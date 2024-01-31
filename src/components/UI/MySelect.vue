<template>
    <v-select
        clearable
        label="Select"
        variant="underlined"
        v-model="selectedValue"
        :items="options"
        @change="optionChange"
    />
</template>

<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selectedValue: this.modelValue
        };
    },
    watch: {
        modelValue(newValue) {
            this.selectedValue = newValue;
        },
        selectedValue(newValue) {
            this.$emit('update:modelValue', newValue);
        }
    },
    methods: {
        optionChange() {
            this.$emit('update:modelValue', this.selectedValue);
        }
    }
};
</script>

<style scoped>
/* Ваш стиль */
</style>
