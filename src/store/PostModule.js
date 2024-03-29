import axios from "axios";

export const postModule = {
    state : () => ({
        posts: [],
        loading: false,
        selectedSort: '',
        searchInput: '',
        selectedOptions:[
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By body'}
        ],
        page: 1,
        limit: 5,
        totalPages: 0

    }),
    getters: {
        sortedPosts(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },

        sortedAndSearch(state, getters){
            return getters.sortedPosts.filter((post) => post.title.toLowerCase().includes(state.searchInput.toLowerCase()))
        }

    },

    mutations: {
        setPosts(state, posts){
            state.posts = posts
        },
         setLoading(state, bool){
             state.loading = bool
         },
         setPage(state, page){
             state.page = page
         },
        setSelectedSort(state, selectedSort){
             state.selectedSort = selectedSort
         },
         setSearchInput(state, searchInput){
            state.searchInput = searchInput
         },
         setTotalPages(state, totalPages){
             state.totalPages = totalPages
         },



     },
    actions: {
        async fetchPosts({state, commit}){
            try {
             commit('setLoading', true)
                const response=  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit
                    }

                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data )

            }
            catch (error){
                console.log(error)
            }
            finally {
                commit('setLoading', false)
            }

        },

        async loadMorePosts({state, commit}){
            try {
                commit('setPage', state.page + 1)

                const response=  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit
                    }

                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])

            }
            catch (error){
                console.log(error)
            }
            finally {

            }

        },


    },
    namespaced: true


}