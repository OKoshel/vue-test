<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import Pagination from "@/components/Pagination.vue";
import {ref} from "vue";

export default {
    // setup() {
    //     const count = ref(0)
    //     function increment() {
    //         count.value++
    //     }
    //
    //     return {
    //         count,
    //         increment
    //     }
    //
    // },

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
            posts: [],
            visibleModal: false,
            loading: false,
            selectedSort: '',
            searchInput: '',
            selectedOptions:[
              'title', 'body'
            ],
            page: 1,
            limit: 5,
            totalPages: 0
        }

    },
    methods: {

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
        async fetchPosts(){
            try {
                this.loading = true
                const response=  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    }

                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data
            }
            catch (error){
                console.log(error)
            }
            finally {
                this.loading = false
            }

        },

        async loadMorePosts(){
            try {
                this.page +=1

                const response=  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    }

                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
            }
            catch (error){
                console.log(error)
            }
            finally {

            }

        },

        // changePage(newPage){
        //     this.page = newPage
        //     this.fetchPosts()
        // }
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
        sortedPosts(){
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },

        sortedAndSearch(){
            return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchInput.toLowerCase()))
        }

    },
    watch: {
        selectedSort(newValue) {
            console.log('Selected sort:', newValue);
        }
    },

}

</script>

<template>
    <div class="d-flex align-items-center justify-content-between">
        <h2>The page of posts</h2>
        <div class="d-flex align-items-center gap-3 col-6 justify-content-end">
            <div class="col-4">
                <my-select v-model="selectedSort" :options="selectedOptions" ></my-select>
            </div>
        </div>
    </div>
    <div class="w-fit">
        <my-button @click="openModal" >Add new post</my-button>
    </div>



    <div class="mt-4">
        <my-input v-model="searchInput"  placeholder="Search by title" v-focus />
    </div>

    <my-dialog title="Add new post" v-model:show="visibleModal" >
        <post-form @create="createPost" />
    </my-dialog>


    <post-list :posts="sortedAndSearch" @delete="deletePost" v-if="!loading"/>
    <div v-else>Loading...</div>

    <div class="observer" ref="observer"></div>

  <!-- <div class="mt-4 d-flex justify-content-end gap-2  p-1 pointer-event ">-->
  <!--     <pagination-->
  <!--         v-for="pageNumber in totalPages"-->
  <!--         :page="pageNumber"-->
  <!--         :key="pageNumber"-->
  <!--         :activeClass="{'current-page': this.page === pageNumber}"-->
  <!--         @click="changePage(pageNumber)"-->

  <!--     />-->
  <!-- </div>-->

</template>

<style lang="sass" scoped>

.current-page
  border: 2px solid green

.observer
  height: 30px

</style>
