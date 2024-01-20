<template>
    <div class="navbar-wrapp">
        <div class="navbar-items">
            <ul class="d-flex align-items-center gap-3 list-unstyled">
                <li>
                    <router-link to="/" class="text-decoration-none text-black">Posts + Store</router-link>
                    </li>
                <li>
                    <router-link to="/posts" class="text-decoration-none text-black">Posts</router-link>
                </li>
<!--                <li>Account</li>-->
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    name: 'navbarItems',


    data() {
        return {

        };
    },

}


</script>

<style lang="sass" scoped>

ul
    margin-bottom: 0px

.navbar-wrapp
    height: 60px
    width: 100%
    display: flex
    justify-content: flex-end
    align-items: center
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24)
    padding: 10px 36px 10px 10px
    border-bottom: 1px solid rgba(145, 158, 171, 0.24)
    background-color: aliceblue
    margin-bottom: 24px


.icon
    height: 25px
    width: 25px
</style>