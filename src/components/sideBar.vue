<template>
    <div style="margin:0%; padding: 0%;" class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <topNav />
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-2">
                <div class="sidebar">
                    <a href="my-recording"><button class="search"><span class="shift"><i
                                class="fas fa-film"></i></span><span>My Recordings</span></button></a>
                                
                    <button class="search"><span class="shift"><i class="fas fa-share-alt"></i></span><span>Requested</span></button>
                </div>
            </div>
            <div class="col-md-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from './topNav.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        topNav
    }

}
</script>

<style lang="scss" scoped>

    @media (min-width:320px) and (max-width: 1200px) {
        .sidebar {
            display:none;
        }
    }
.sidebar {
    width: 100%;
    height: 100vh;
    background-color: #EBF2F6;
    padding: 4rem 1rem;
    margin-right: 100px;

    .search {
        width: 100%;
        height: 53px;
        background: #E2E5ED 0% 0% no-repeat padding-box;
        border: 1px solid #0DABD838;
        border-radius: 10px;
        opacity: 1;
        font: normal normal 300 16px/25px Poppins;
        letter-spacing: 0px;
        color: #21455E;
        opacity: 1;
        margin: 4px;

        .shift{
            margin-right: 1rem; 
            font-size: 20px;
        }
    }

    .search2 {
        width: 100%;
        height: 53px;
        background: none 0% 0% no-repeat padding-box;
        // border: 1px solid #0DABD838;
        border-radius: 10px;
        opacity: 1;

        font: normal normal 300 16px/25px Poppins;
        letter-spacing: 0px;
        color: #21455E;
        opacity: 1;
    }
}

</style>