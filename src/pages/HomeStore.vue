<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import Pagination from "@/components/Pagination.vue";
import { mapState, mapActions, mapGetters, mapMutations} from "vuex"

export default {
    components: {
        Pagination,
        MyInput,
        MySelect,
        MyButton,
        MyDialog,
        PostList,
        PostForm
    },
    data() {
        return{
            visibleModal: false,
        }

    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchInput: 'post/setSearchInput',
            setSelectedSort: 'post/setSelectedSort'

        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'

        }),
        createPost(post){
            this.posts.push(post)
            this.visibleModal = false

        },

        deletePost(post){
            this.posts = this.posts.filter((item) => post.id !== item.id)

        },
        openModal(){
            this.visibleModal = true
        },

    },
    mounted() {
        this.fetchPosts()
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) =>{
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts()
            }
        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)
    },

    computed: {
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearch: 'post/sortedAndSearch'


        }),
        ...mapState({
            posts: state => state.post.posts,
            loading: state => state.post.loading,
            selectedSort: state => state.post.selectedSort,
            searchInput: state => state.post.searchInput,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            selectedOptions: state => state.post.selectedOptions,

        })
    }

}




</script>

<template>
<!--    <div class="mb-4">{{$store.state.isAuth ? "Authorized" : "Login here"}}</div>-->
<!--    <div>Likes: {{ $store.state.likes}}</div>-->
<!--    <div class="d-flex gap-3">-->
<!--        <my-button @click="$store.commit('incrementLikes')">Increment</my-button>-->
<!--        <my-button @click="$store.commit('decrementLikes')">Decrement</my-button>-->
<!--    </div>-->

    <div class="d-flex align-items-center justify-content-between">
        <h2>The page of posts</h2>
        <div class="d-flex align-items-center gap-3">
            <my-button @click="openModal" >Add new post</my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value = 'setSelectedSort'
                :options="selectedOptions"></my-select>
        </div>
    </div>

    <div class="mt-4">
        <my-input
            :model-value="searchInput"
            @update:model-value="setSearchInput"
            placeholder="Search by title"
            v-focus />
    </div>

    <my-dialog title="Add new post" v-model:show="visibleModal">
        <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearch" @delete="deletePost" v-if="!loading"/>
    <div v-else>Loading...</div>
    <div class="observer" ref="observer"></div>


</template>

<style lang="sass" scoped>

.current-page
    border: 2px solid green

.observer
    height: 30px

</style>
