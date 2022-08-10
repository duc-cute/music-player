/*
1.Render Song=>Ok
2.Play/pause/peek=>Ok
3.Cd rotate=>Ok
4.Next/prev=Ok
6.Random=>Ok
7.Next when ended=>Ok
8.Active song
9.scroll active song into view
10.Play song onclick
*/

const $ =document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

const playList=$('.playlist');
const player=$('.app')
const cdThumb=$('.cd-thumb');
const cd=$('.cd');
const heading=$('.title');
const author=$('.author');
const audio=$('#audio');
const totalDurationTime=$('.total-duration');
const currentTimeBar=$('.current-time');
const seekSlider=$('.seek-slider');
// Controls
const repeatBtn=$('.btn-repeat');
const randomBtn=$('.btn-random');
const playBtn=$('.btn-toggle-play');
const nextBtn=$('.btn-next');
const prevBtn=$('.btn-prev');


const app = {
    currentSongIndex:0,
    isPlaying:false,
    isRandom:false,
    isRepeat:false,
    listSongPlayed:[],
    songs : [
        {
            name:'Stay With Me',
            singer:'Chanyeol,Punch',
            path:'./asset/music/song1.mp3',
            image:'./img/song1.jpg'
        },
        {
            name:'Because I\'m Stupid',
            singer:'Kim Hyun Joong',
            path:'./asset/music/song2.mp3',
            image:'./img/song2.jpg'
        },
        {
            name:'This Love',
            singer:'Davichi',
            path:'./asset/music/song3.mp3',
            image:'./img/song3.jpg'
        },
        {
            name:'Everytime',
            singer:'Chen x Punch',
            path:'./asset/music/song4.mp3',
            image:'./img/song4.jpg'

        },
        {
            name:'I miss you',
            singer:'Soyou',
            path:'./asset/music/song5.mp3',
            image:'./img/song5.jpg'
        },
        {
            name:'Once Again',
            singer:'Mad Clown,Kim Na Young',
            path:'./asset/music/song6.mp3',
            image:'./img/song6.jpg'
        },
        {
            name:'Sunset',
            singer:'Davichi(Crash landing on you)',
            path:'./asset/music/song7.mp3',
            image:'./img/song7.jpg'
        },
        {
            name:'Haru Haru',
            singer:'BigBang',
            path:'./asset/music/song8.mp3',
            image:'./img/song8.jpg'
        },
        {
            name:'Lalisa',
            singer:'LISA',
            path:'./asset/music/song9.mp3',
            image:'./img/song9.jpg'
        },
        {
            name:'Solo',
            singer:'JENNIE',
            path:'./asset/music/song10.mp3',
            image:'./img/song10.jpg'
        },
        {
            name:'Du Du Du',
            singer:'Black Pink',
            path:'./asset/music/song11.mp3',
            image:'./img/song11.jpg'
        },
        {
            name:'Kill This Love',
            singer:'Black Pink',
            path:'./asset/music/song12.mp3',
            image:'./img/song12.jpg'
        },
        {
            name:'Love Scenario',
            singer:'iKon',
            path:'./asset/music/song13.mp3',
            image:'./img/song13.jpg'
        } 
    ],
    render:function() {
        const htmls=this.songs.map((song,index) => {
            return `
            <div data-index="${index}" class="song ${index === this.currentSongIndex ? 'active' :''}">
            <div class="song-serial">${index < 9 ? `0${index+1}` : `${index+1}`}</div>
            <div class="song-thumb" style="background-image:url('${song.image}') ;"></div>
            <div class="animate-music">
                <svg fill="#fff" viewBox="0 0 512 512" class="icon-music icon-music-1">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" class="icon-music icon-music-2">
                <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 512 512" class="icon-music icon-music-3">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" class="icon-music icon-music-4">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
            </div>
            <div class="song-body">
                <h3 class="song-title">${song.name}</h3>
                <p class="song-author">${song.singer}</p>
            </div>
            <div class="song-wave ">
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
            </div>
        </div>
        `        
        })
        playList.innerHTML=htmls.join('');

    },
    defineProperties:function() {
        Object.defineProperty(this,'currentSong', {
            get:function() {
                return this.songs[this.currentSongIndex];
            }
        })
    },
    activeSong:function() {
        _this=this;
        
        const listSongPlay=$$('.song');
        listSongPlay.forEach(function(song,index) {
            if(_this.currentSongIndex===index ) {
                //Xóa loader and animate music ở song active cũ
                $('.song.active .song-wave').classList.remove('loader');
                $('.song.active').classList.remove('active');
                //Thêm active và loader ở song được active mới
                song.classList.add('active');
                song.querySelector('.song-wave').classList.add('loader');
                
            }
        })
    },
    handleEvents:function() {
        _this=this
        // Play bài hát
        playBtn.onclick=function() {
            if(_this.isPlaying) {
                audio.pause();
            }else {
                audio.play();
            }
        }
        //Khi next song
        nextBtn.onclick=function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.nextSong();
            }
            audio.play();
            _this.activeSong();
            _this.scrollToView();
            _this.newBackground();

        }
        //Khi prev song
        prevBtn.onclick=function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
             audio.play();
            _this.activeSong();
            _this.scrollToView();
            _this.newBackground();

        }
        //Khi song được play
        audio.onplay=function() {
            _this.isPlaying=true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        //Khi song bị pause
        audio.onpause=function() {
            _this.isPlaying=false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        //Khi quay Cd ở Dashboard
        const cdThumbAnimate=cdThumb.animate([
            {transform:'rotate(360deg)'}
        ],
        {   
            duration:10000,
            iterations:Infinity
        })
        cdThumbAnimate.pause();

        //Xử lí tiến độ song hiện tại
        audio.ontimeupdate=function() {
            let seekPosition=0;
            if(audio.currentTime) {
                seekPosition=Math.floor(audio.currentTime*100/audio.duration);
                seekSlider.value=seekPosition;
                let currentMinutes=Math.floor(audio.currentTime/60);
                let currentSeconds=Math.floor(audio.currentTime-currentMinutes*60);
                let durationMinutes=Math.floor(audio.duration/60);
                let durationSeconds=Math.floor(audio.duration-durationMinutes*60);
                
                if(currentSeconds < 10) {currentSeconds ='0'+currentSeconds };
                if(currentMinutes < 10) {currentMinutes ='0'+currentMinutes };
                if(durationSeconds <10) {durationSeconds='0'+durationSeconds};
                if(durationMinutes <10) {durationMinutes='0'+durationMinutes};
                currentTimeBar.textContent=`${currentMinutes}:${currentSeconds}`;
                totalDurationTime.textContent=`${durationMinutes}:${durationSeconds}`
            }
        }
        //Xử lí khi song tua
        seekSlider.oninput=function(e) {
            const seekTime=audio.duration*e.target.value/100;
            audio.currentTime=seekTime;
        }
        //Xử lí khi song ended
        audio.onended=function() {
            if(_this.isRepeat) {
                audio.play();
            }else {
                nextBtn.onclick();
            }
            cdThumbAnimate.cancel();
        }
        //Xử lí Random
        randomBtn.onclick=function() {
            _this.isRandom=!_this.isRandom;
            randomBtn.classList.toggle('active',_this.isRandom);
        }
        //Xử lí Repeat
        repeatBtn.onclick=function() {
            _this.isRepeat=!_this.isRepeat;
            repeatBtn.classList.toggle('active',_this.isRepeat);
        }
        //Xử lí khi click vào Song
        playList.onclick=function(e) {
            const songNode=e.target.closest('.song:not(.active)');
            if(songNode) {
                _this.currentSongIndex=Number(songNode.dataset.index);
                _this.loadCurrentSong();
                audio.play();
            }
        }
           // Xử lí thu/phóng CD
           const cdWidth=cd.offsetWidth;
           document.onscroll=function() {
               const scrollTop=window.scrollY || document.documentElement.scrollTop;
               const newCdWidth=cdWidth-scrollTop;
               cd.style.width=newCdWidth > 0 ? newCdWidth +'px' : 0;
               cd.style.opacity=newCdWidth/cdWidth;      
           }
        
 
    },
    scrollToView:function() {
        setTimeout(function() {
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block:'end'
            });
        },200)
    },
    newBackground:function() {
        let hex =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
        // let current;
        function codeColer(current) {
            for(let i=0;i<6;i++) {
                let index=Math.floor(Math.random()*14);
                let y=hex[index];
                current+=y;
            }
            return current;
        } 
        let Color1=codeColer('#');
        let Color2=codeColer('#');
        var angle='to right';
        let gradient =`linear-gradient(${angle},${Color1},${Color2})`;
        document.body.style.background=gradient;
        console.log(angle,Color1,Color2);
        console.log('hello');
    },
    nextSong:function() {
        this.currentSongIndex++;
        if(this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex=0;
        }
        this.loadCurrentSong();


    },
    playRandomSong:function() {
        if(this.listSongPlayed.length == this.songs.length) {
            this.listSongPlayed=[];
        }
        let newIndex;
        do {
            newIndex=Math.floor(Math.random()*this.songs.length)
        }while(this.listSongPlayed.includes(newIndex));
        this.listSongPlayed.push(newIndex);
        this.currentSongIndex=newIndex;
        this.loadCurrentSong();

    },
   
    prevSong:function() {
        this.currentSongIndex--;
        if(this.currentSongIndex < 0) {
            this.currentSongIndex=this.songs.length-1;
        }
        this.loadCurrentSong();

    },

    loadCurrentSong : function() {
        cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`
        heading.innerText=this.currentSong.name;
        author.innerText=this.currentSong.singer;
        audio.src=`${this.currentSong.path}`;
        this.activeSong();
    },

    start:function() {
        //Định nghĩa các thuộc tính mới cho Obj
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvents();
        this.render();

        this.activeSong();
        this.newBackground();
    }

}
app.start();