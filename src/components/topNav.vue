<template>
    <nav class="navbar navbar-expand-lg">
        <!-- <div class="container-fluid"> -->
        <div style="margin-right: 12rem;">
            <img class="logo" src="SENCOR_Logo.jpg" width="130" height="130" ALT="" ALIGN=CENTER> 
           <span class="text">Adilo</span>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li style="color: #000" class="nav-item">
                    <a style="color: #21455E; font-weight: normal;" class="nav-link active" aria-current="page"
                        href="#">Projects</a>
                </li>
                <li class="nav-item dropdown">
                    <a style="color: #21455E; font-weight: 500;" class="nav-link dropdown-toggle" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Tools & App
                    </a>
                    <ul class="dropdown-menu dropdownStyle">
                        <li><a class="dropdown-item" href="/my-recording">Snapbyte Recorder</a>
                        </li>
                        <hr class="fillup">
                        <li><a class="dropdown-item" href="#">AudioBounce
                                </a></li>
                        <hr class="fillup">
                        <li><a class="dropdown-item" href="#">Sugar Voice
                                </a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a style="color: #21455E; font-weight: normal;" class="nav-link" href="#">Channels</a>
                </li>
                <li class="nav-item">
                    <a style="color: #21455E; font-weight: normal;" class="nav-link" href="#">Contacts</a>
                </li>
                <li class="nav-item">
                    <a style="color: #21455E; font-weight: normal;" class="nav-link" href="#">Analytics</a>
                </li>
                <li class="nav-item">
                    <a style="color: #21455E; font-weight: normal;" class="nav-link" href="#">Settings</a>
                </li>
                
            </ul>
        </div>
        <div style="display: flex; justify-content:space-between; align-items:center">
            <div style="border-right: 2px solid grey; margin-right: 1rem;">
                <a style="color: #21455E; font-size: 20px; font-weight: 500;" class="navbar-brand" href="#">Help</a>
            </div>
            <div style="margin-right: 1rem;">
                <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
            </div>
            <div>
                <h3 style="color: #21455E; font-weight: normal;" class="nav-link" >Cody Fisher</h3>
                <h3 style="color: #21455E; font-weight: normal;" class="nav-link" >Cody Fisher@gmail.com</h3>
            </div>
        </div>
        <!-- </div> -->
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
    padding: 1rem 6rem;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
    
}
.navbar-nav{
    margin: -10%;
}
@media (min-width:320px) and (max-width: 1200px) {
    .navbar {
        padding: 1rem 3rem;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
        
    }
    .navbar-nav{
        margin: -2%;
    }
    .nav-item {
        color: #000;
        margin-right: 1%;
    }
}

.navbar li:hover {
    border-top: 4px solid #0DABD8;
    border-radius: 3px;

    .dropdownStyle li:hover{
        border-top: 0px solid #0DABD8 !important;
    }
}
.logo {
    margin-bottom: -8px;
    height: 30px;
    width: 30px;
    background: #FBBD71 0% 0% no-repeat padding-box;
    border-radius: 50%;
    display: inline-block;
    color:#FFF;
    font-size:8px;
    font-weight:bold;
    margin: 10px;

    .text{
        font: normal normal bold 38px/32px Helvetica;
        letter-spacing: 0px;
        color: #21455E;
        font-weight:bold;
    }
  }
  @media (min-width:320px) and (max-width: 1200px) {
    .logo {
        margin-bottom: -3px;
        height: 30px;
        width: 30px;
        background: #FBBD71 0% 0% no-repeat padding-box;
        border-radius: 50%;
        display: inline-block;
        color:#FFF;
        font-size:8px;
        font-weight:bold;
        margin: 4px;
    
        .text{
            font: normal normal bold 20px/26px Helvetica;
            letter-spacing: 0px;
            color: #21455E;
            font-weight:bold;
        }
      }
}

  .dot-inner {
    margin: 7px;
    height: 15px;
    width: 15px;
    background: #FFF 0% 0% no-repeat padding-box;
    border-radius: 50%;
    display: inline-block;
    color:#FFF;
    font-size:8px;
    font-weight:bold;
  }
.nav-item {
    color: #000;
    margin-right: 2%;
}

ul li {
    margin: 0 2rem;
}
.dropdownStyle{
    top: 64px;
    left: 409px;
    width: 206px;
    height: 204px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 24px #0000001A;
    border: 1px solid #E2E5ED;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;

    a {
        color: #21455E;
    }
    a:hover{
        color: #0DABD8 !important;
        border-radius: 0px;
        background: #FFF;
    }
    
    li {
        margin-top: 10%;
        margin-left: 0%;
    }
    .fillup{
        margin-left: -15%;
    }
}

</style>