<template>
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-lg-12">
                <div class="main">
                    <span><i class='fas fa-record-vinyl' style='color:red'></i> Live Preview</span>
                    <div class="record-video" id="preview-video" style="display:block">
                        <video id="preview" width="960" height="518" autoplay ></video>
                    </div>
                    <div class="record-video" id="recording-video" style="display:none">
                        <video id="recording" width="960" height="518" controls></video>
                    </div>
                    <div class="row">
                        <div class="col-md-3">

                        </div>
                        <div class="col-md-3">
                            <span>
                                <button id="startButton"  class="start-recording" @click="start" style="display:block"> Start Recording</button>
                                <button id="stopButton" class="start-recording" @click="stopRecording" style="display:none"> Stop Recording</button>
                            </span>
                        </div>
                        <div class="col-md-6">

                        </div>
                    </div>
                   
                    <div id="log"></div>
                    <div id="downloadButton"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
        
        video: '',
        constraints: '',
        stream: null,
        boolean: true,
        mediatype:'',
        mediaRecorder: '',
      
    }

},

mounted(){
  
   this.mediatype = this.$route.params.media; // call the url param and assigned to mediatype
   if(this.mediatype=="screen"){
        //initialised screen functions
        this.recordScreen() // 
   }
   if(this.mediatype=="camera"){
        // initialised for camera
        this.initialiseDevice(true, true)
   }  
   if(this.mediatype=="mic"){
        // initialised for audio
        this.initialiseDevice(false, true)
   }   
   
},

methods:{

    // function to initialise video and mic
    initialiseDevice(param, param2){
        navigator.mediaDevices.getUserMedia({
        video: param,
        audio: param2
        })
    },

    // call to start recording if mediatype == camera, record camera. 
    // if mediatype ==screen, record screen.
    // it mediatype == mic record audio.
    async start(){

        if( this.mediatype == "camera"){
               // camera recording procesing
                let preview = document.getElementById("preview");
                let recording = document.getElementById("recording");
                let downloadButton = document.getElementById("downloadButton");
                let recordingTimeMS = 30000;

                navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
                }).then((stream) => {
                preview.srcObject = stream;
                downloadButton.href = stream;
                preview.captureStream = preview.captureStream || preview.mozCaptureStream;
                return new Promise((resolve) => preview.onplaying = resolve);
            }).then(() => this.startRecording(preview.captureStream(), recordingTimeMS))
            .then ((recordedChunks) => {
                let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                recording.src = URL.createObjectURL(recordedBlob);
                downloadButton.href = recording.src;
                downloadButton.download = "RecordedVideo.webm";

                this.log(`Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`);
                document.getElementById("preview-video").style.display="none"
                document.getElementById("recording-video").style.display="block"

            })
            .catch((error) => {
                if (error.name === "NotFoundError") {
                this.log("Camera or microphone not found. Can't record.");
                } else {
                this.log(error);
                }
            });
        }
        if( this.mediatype == "screen"){
            // screen record processing
                let stream = await this.recordScreen();
                let mimeType = 'video/webm';
                this.mediaRecorder = this.createRecorder(stream, mimeType);
            let node = document.createElement("p");
                node.textContent = "Started recording";
                document.body.appendChild(node);
        }
        if( this.mediatype == "mic"){
            // mic record processing
            let preview = document.getElementById("preview");
                let recording = document.getElementById("recording");
                let downloadButton = document.getElementById("downloadButton");
                let recordingTimeMS = 30000;

                navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true
                }).then((stream) => {
                preview.srcObject = stream;
                downloadButton.href = stream;
                preview.captureStream = preview.captureStream || preview.mozCaptureStream;
                return new Promise((resolve) => preview.onplaying = resolve);
            }).then(() => this.startRecording(preview.captureStream(), recordingTimeMS))
            .then ((recordedChunks) => {
                let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                recording.src = URL.createObjectURL(recordedBlob);
                downloadButton.href = recording.src;
                downloadButton.download = "RecordedVideo.webm";

                this.log(`Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`);
                document.getElementById("preview-video").style.display="none"
                document.getElementById("recording-video").style.display="block"
            })
            .catch((error) => {
                if (error.name === "NotFoundError") {
                this.log("Camera or microphone not found. Can't record.");
                } else {
                this.log(error);
                }
            });
        }
    },

    // funtion to commence recrding of video and audio
     startRecording(stream, lengthInMS) {
        let recorder = new MediaRecorder(stream);
        let data = [];

        recorder.ondataavailable = (event) => data.push(event.data);
        recorder.start();
        this.log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

        document.getElementById("startButton").style.display="none"
        document.getElementById("stopButton").style.display="block"

        let stopped = new Promise((resolve, reject) => {
            recorder.onstop = resolve;
            recorder.onerror = (event) => reject(event.name);
        });

        let recorded = this.wait(lengthInMS).then(
            () => {
            if (recorder.state === "recording") {
                recorder.stop();
            }
            },
        );

        return Promise.all([
            stopped,
            recorded
        ])
        .then(() => data);
    },

    // function to stop recordng of video / mic / screen share
    stopRecording(){
        if( this.mediatype == "camera"){
            let preview = document.getElementById("preview");
            this.stop(preview.srcObject);

            this.log(`stopping recording..`);
            document.getElementById("startButton").style.display="block"
            document.getElementById("stopButton").style.display="none"
        }
        if(this.mediatype == "screen"){
            // screen record processing
            this.stopScreenshare();
        }
    },

    stop(stream) {
        stream.getTracks().forEach((track) => track.stop());
    },
    log(msg) {
    let logElement = document.getElementById("log");
    logElement.innerHTML += `${msg}\n`;
    },

    wait(delayInMS) {
    return new Promise((resolve) => setTimeout(resolve, delayInMS));
    },

    // function to stop screen share
    stopScreenshare(){
        this.mediaRecorder.stop();
        let node = document.createElement("p");
        node.textContent = "Stopped recording";
        document.body.appendChild(node);

    },

    // function to start record screen
    async recordScreen() {
        return await navigator.mediaDevices.getDisplayMedia({
            audio: true, 
            video: { mediaSource: "screen"}
        });
    },

    // record screen
  // eslint-disable-next-line
  createRecorder (stream, mimeType) {
    // the stream data is stored in this array
    let recordedChunks = []; 
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
        recordedChunks.push(e.data);
     }  
    };
    mediaRecorder.onstop = function () {
    this.saveFile(recordedChunks);
    recordedChunks = [];
    };
    mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return mediaRecorder;

},

    // function save screen recorded file
    saveFile(recordedChunks){
        const blob = new Blob(recordedChunks, {
            type: 'video/webm'
        });

        let filename = window.prompt('Enter file name'),
            downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = `${filename}.webm`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            URL.revokeObjectURL(blob); // clear from memory
            document.body.removeChild(downloadLink);

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
    font: normal normal normal 11px/17px Poppins;
    color: #FFFFFF;
    width: 41px;
    height: 28px;
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 2px;
    margin-left: -25px;
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
.no-gutters {
    width: 1600px;
    height: 811px;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-left: 0%;
    margin-right: 0%;
    padding: 1rem 2rem;
    background: transparent linear-gradient(117deg, #0DABD8 0%, #EAFAFF 0%, #D3F5FE 100%) 0% 0% no-repeat padding-box;
    opacity: 0.25;
   

}
.start-recording {
    margin: 2%;
    width: 234px;
    height: 63px;
    background: #0DABD8 0% 0% no-repeat padding-box;
    border-radius: 32px;
    color:#FFF;
}
.main{
    margin-top: 50px;
}
.record-video {
    width: 965px;
    height: 518px;
    background: #21455E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    
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


@media (min-width:320px) and (max-width: 1200px) {
    .main{
        margin-top: 50px;
    }

    .record-video {
        width: 25%;
        height: 50%px;
        background: #21455E 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        
    }
    .start-recording {
        margin: 2%;
        width: 20%;
        height: 60px;
        background: #0DABD8 0% 0% no-repeat padding-box;
        border-radius: 30px;
        color:#FFF;
    }
}


</style>