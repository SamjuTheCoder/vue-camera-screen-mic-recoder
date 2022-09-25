<template>
    <div class="container-fluid">
        <div class="row no-gutters">
            <div style="background: #fff" class="col-lg-12">
                <div class="main">
                    <div class="container">
                        <div class="row no-gutters py-10">
                            <div class="bread-crumb">
                                <ul class="breadcrumb">
                                    <li><a href="#">Snapbyte</a></li>&nbsp;&nbsp;
                                    <li><a href="#">&nbsp;&nbsp;My Recordings</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <p class="recording-text">My Recordings <span>25</span></p>
                            </div>
                            <div class="col-lg-8">
                                <div style="display: flex; justify-content:space-evenly">
                                    <button class="one"> <span><i class="fas fa-calendar-alt"></i></span> &nbsp;My Date</button>
                                    <button class="one"> <span><i class="fas fa-filter"></i></span> &nbsp;Add Filter</button>
                                    <button class="two"> <span><i class="fas fa-video" style='color: white'></i></span>&nbsp; New Request</button>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="three" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"> <span class="dot">REC</span>
                                        Start Recording
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">New Recording</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="formDiv">
                                                        <div class="mb-10 formInput">
                                                            <label for="exampleFormControlInput1"
                                                                class="form-label">Save the recording in</label>
                                                            <select v-model="projects" class="form-select mb-3 selectInput"
                                                                aria-label=".form-select-lg example">
                                                                <option value="" selected>Select a project</option>
                                                                <option value="1">Project 1</option>
                                                                <option value="2">Project 2</option>
                                                                <option value="3">Project 3</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-3 formInput">
                                                            <div style="display:flex; justify-content:space-between"
                                                                class="form-check form-switch">
                                                                <div class="itemText">
                                                                    <p class="reced">Record screen</p>
                                                                </div>
                                                               
                                                                <input v-model="screen" class="form-check-input" type="checkbox"
                                                                    role="switch" id="flexSwitchCheckChecked" :value="screen" >
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 formInput">
                                                            <div style="display:flex; justify-content:space-between"
                                                                class="form-check form-switch">
                                                                <div class="itemText">
                                                                    <p class="reced">Record camera</p>
                                                                </div>

                                                                <input v-model="camera" class="form-check-input" type="checkbox"
                                                                    role="switch" id="flexSwitchCheckChecked" value="camera" >
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 formInput">
                                                            <div style="display:flex; justify-content:space-between"
                                                                class="form-check form-switch">
                                                                <div class="itemText">
                                                                    <p class="reced">Record mic</p>
                                                                </div>
                                                                <input v-model="mic" class="form-check-input" type="checkbox"
                                                                    role="switch" id="flexSwitchCheckChecked" :value="mic">
                                                            </div>
                                                        </div>
                                                        <div
                                                            style="display: flex; justify-content:center; align-items:center">
                                                            <button class="btnRecod" @click="startRecording" data-bs-dismiss="modal">Start Recording</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="table table-image table-responsive">
                        <thead>
                            <tr>
                                <th class="thead" scope="col">Recordings</th>
                                <th class="thead" scope="col">Title</th>
                                <th class="thead" scope="col">Views</th>
                                <th class="thead" scope="col">Size</th>
                                <th class="thead" scope="col">Last Modified</th>
                                <th class="thead" scope="col">Shares</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i, index) in recordings" :key="index">
                                <td class="w-0">
                                    <div>
                                        <img class="img-responsive img-fluid"  src="../assets/gettyimages-1127409044.jpg" alt="" srcset="">
                                        <div class="rectime">2:00</div>
                                    </div>
                                </td>
                                <td class="tdata">
                                    <h5>{{i.title}}</h5>
                                    <p class="tpara">{{i.desc}}</p>
                                </td>
                                <td class="tdata">{{i.views}}</td>
                                <td class="tdata">{{i.size}}</td>
                                <td class="tdata">{{i.lastmodified}}</td>
                                <td class="tdata">
                                    <button>
                                        <span><i class="fas fa-2x fa-ellipsis-h"></i></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert2';
//import $ from 'jquery';
export default {

    data() {
        return {
        
        video: '',
        camera: '',
        screen: '',
        mic:'',
        mediatype:'',
        projects: '',
        recordings: [
            {'title':"Getting it right the first time", 'desc': 'The Video description is shown here if the user has added it.', "views":'324',"size":"120kb","lastmodified":"2months"},
            {'title':"Getting it right the first time", 'desc': 'The Video description is shown here if the user has added it.', "views":'324',"size":"120kb","lastmodified":"2months"},
            {'title':"Getting it right the first time", 'desc': 'The Video description is shown here if the user has added it.', "views":'324',"size":"120kb","lastmodified":"2months"},
            {'title':"Getting it right the first time", 'desc': 'The Video description is shown here if the user has added it.', "views":'324',"size":"120kb","lastmodified":"2months"},
            {'title':"Getting it right the first time", 'desc': 'The Video description is shown here if the user has added it.', "views":'324',"size":"120kb","lastmodified":"2months"},
        ],
    }

},

mounted(){
    //console.log(this.recordings);
},

methods:{
 
   async startRecording(){

     if(this.camera == true){
        this.mediatype = "camera"; 
     }
     if(this.screen == true){
        this.mediatype = "screen";
     }
     if(this.mic == true){
        this.mediatype = "mic";
     }
     if(this.projects == ""){
        swal.fire({
            icon: 'warning',
            title: 'Error...',
            width:450,
            height:2,
            text: 'Please select project to save in',
        })
        return;
     }
     if((this.camera == false) &&(this.screen == false) && (this.mic == false)){
        swal.fire({
            icon: 'warning',
            title: 'Error...',
            width:450,
            height:2,
            text: 'Please select record mode',
        })
        return;
     }
     this.$router.push('/start-record/'+this.mediatype);
    
    }
}


   

}
</script>

<style lang="scss" scoped>

.dot {
        height: 20px;
        width: 20px;
        background-color: #FFF;
        border-radius: 50%;
        display: inline-block;
        color:#000000;
        font-size:8px;
        font-weight:bold;
      }

thead{
    font-weight:bold;
    font-size: 18px;
    }

.img-fluid {
    width: 160px;
    height: 90px;
    border-radius: 6px;
    opacity: 1;
}
.rectime{
    font: normal normal normal 16px/17px Poppins;
    color: #FFFFFF;
    width: 41px;
    height: 28px;
    background-color: #000000 0% 0% no-repeat padding-box;
    border-radius: 2px;
    margin-left: 120px;
    margin-top: -30px;

}

.recording-text {
    font: normal normal 300 24px/35px Poppins;
    letter-spacing: 0px;
    color: #000000;
    height: 33px;

    span {
        font: normal normal 600 24px/35px Poppins;
        letter-spacing: 0px;
        color: #637C8E;
    }
}
.modal-dialog-centered{
    width: 457px;
}
.formInput{
    margin-left: 10px;
    margin-right: 20px;
}
.selectInput{
    width: 100%;
    height: 49px;
    background: #F8FAFB 0% 0% no-repeat padding-box;
    border: 1px solid #E2E5ED;
    border-radius: 8px;
}
.formDiv{
    padding-left: 10px;
}
.itemText{
    margin-left: -10%;
}
.main {
    width: 85%;
    height: 100vh;
    margin: 0%;
    margin-left:6%; 
    padding: 1rem 2rem;

}

.btnRecod {
    width: 289px;
    height: 51px;
    /* UI Properties */
    background: #0DABD8 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.reced {
    text-align: left;
    font: normal normal medium 18px/27px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
}

.thead {
    text-align: left;
    font: normal normal medium 18px/27px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
}

.one {
    width: 118px;
    height: 42px;
    border: 1px solid #E2E5ED;
    border-radius: 28px;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #637C8E;
    opacity: 1;
}

.two {
    width: 164px;
    height: 42px;
    background: #0DABD8 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.three {
    width: 179px;
    height: 42px;
    background: #EF5350 0% 0% no-repeat padding-box;
    border-radius: 28px;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

}

.tdata {
    width: auto;
    padding: 2%;
    text-align: left;
    font: normal normal normal 18px/21px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;

    .tpara {
        text-align: left;
        font: normal normal normal 14px/18px Poppins;
        letter-spacing: 0px;
        color: #A3BAC6;
        opacity: 1;
    }
}
.bread-crumb{
    margin-left: -2%;
    margin-top: -3%;
}
ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    background-color: none;
  }
  ul.breadcrumb li {
    display: inline;
    font-size: 18px;
  }
  ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "\203A";
  }
  ul.breadcrumb li a {
    color: #637C8E;
    text-decoration: none;
  }
  ul.breadcrumb li a:hover {
    color: #637C8E;
    text-decoration: underline;
  }

  @media (min-width:320px) and (max-width: 1200px) {
    .bread-crumb{
        margin-left: -10%;
        margin-top: -15%;
    }
    ul.breadcrumb {
        padding: 10px 16px;
        list-style: none;
        background-color: none;
        width:120%
    }
    ul.breadcrumb li {
        
        font-size: 13px;
    }
    ul.breadcrumb li+li:before {
        padding: 8px;
        color: black;
        content: "\203A";
    }
    ul.breadcrumb li a {
        color: #637C8E;
        text-decoration: none;
    }
    ul.breadcrumb li a:hover {
        color: #637C8E;
        text-decoration: underline;
    }

    .main {
        width: 85%;
        height: 100vh;
        margin: 0%;
        margin-left:-2%; 
        padding: 1rem 2rem;
    
    }
    .no-gutters{
        width:120%
    }
    .one {
        height: 25px;
        border: 1px solid #E2E5ED;
        border-radius: 10px;
        font: normal normal normal 10px/11px Poppins;
        letter-spacing: 0px;
        color: #637C8E;
    }
    
    .two {
        height: 25px;
        background: #0DABD8 0% 0% no-repeat padding-box;
        border-radius: 10px;
        font: normal normal normal 10px/11px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
    }
    .three {
        height: 25px;
        background: #EF5350 0% 0% no-repeat padding-box;
        border-radius: 20px;
        font: normal normal normal 10px/11px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
    
    }
    table {
        width:50%;
        font-size: 10px;
    }
    thead{
        font-weight:bold;
        font-size: 12px;
     }
     .tdata {
        padding: 2%;
        width: auto;
        text-align: left;
        font: normal normal normal 10px/12px Poppins;
        letter-spacing: 0px;
        color: #21455E;
        .tpara {
            text-align: left;
            font: normal normal normal 12px/13px Poppins;
            letter-spacing: 0px;
            color: #A3BAC6;
        }
    }
    .img-fluid {
        width: 60px;
        height: 30px;
        border-radius: 3px;
    }

    .rectime{
        font: normal normal normal 9px/10px Poppins;
        color: #FFFFFF;
        width: 41px;
        height: 28px;
        background-color: #000000 0% 0% no-repeat padding-box;
        border-radius: 2px;
        margin-left: 35px;
        margin-top: -12px;
    
    }
}


</style>