<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination
                                v-model="selectedPage"
                                class="my-4"
                                :length="total"

                        ></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'my-pagination',
    props:{
        page: {
            type: Number,
            required: false,
            default: 1
        },
        total: {
            type: Number,
            required: false,
            default: 5
        }
    },
    data() {
        return {
            selectedPage: this.page
        };
    },
    watch: {
        selectedPage(newPage) {
            this.$emit('change', newPage);
        },
        page(newPage) {
            this.selectedPage = newPage;
        }
    }

}
</script>

<style lang="sass" scoped>

</style>