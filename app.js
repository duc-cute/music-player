/**
 * 1.Render Song=>Ok
 * 2.Play/pause/peek=>Ok
 * 3.Cd rotate=>Ok
 * 4.Next/prev=Ok
 * 6.Random=>Ok
 * 7.Next when ended=>Ok
 * 8.Active song=>Ok
 * 9.scroll active song into view=>Ok
 * 10.Play song onclick=>Ok
 *
 * @format
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = "Duccute";

const playList = $(".playlist");
const playlistType = $(".list-type");
const player = $(".app");
const cdThumb = $(".cd-thumb");
const cd = $(".cd");
const heading = $(".title");
const author = $(".author");
const audio = $("#audio");
const totalDurationTime = $(".total-duration");
const currentTimeBar = $(".current-time");
const seekSlider = $(".seek-slider");
// Controls
const repeatBtn = $(".btn-repeat");
const randomBtn = $(".btn-random");
const playBtn = $(".btn-toggle-play");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");

const app = {
  currentSongIndex: 0,
  isPlaying: false,
  isChecked: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(this.localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  listSongPlayed: [],
  kpop: [
    {
      name: "Stay With Me",
      singer: "Chanyeol,Punch",
      path: "./asset/music/song1.mp3",
      image: "./img/song1.jpg",
    },
    {
      name: "Because I'm Stupid",
      singer: "Kim Hyun Joong",
      path: "./asset/music/song2.mp3",
      image: "./img/song2.jpg",
    },
    {
      name: "This Love",
      singer: "Davichi",
      path: "./asset/music/song3.mp3",
      image: "./img/song3.jpg",
    },
    {
      name: "Everytime",
      singer: "Chen x Punch",
      path: "./asset/music/song4.mp3",
      image: "./img/song4.jpg",
    },
    {
      name: "I miss you",
      singer: "Soyou",
      path: "./asset/music/song5.mp3",
      image: "./img/song5.jpg",
    },
    {
      name: "Once Again",
      singer: "Mad Clown,Kim Na Young",
      path: "./asset/music/song6.mp3",
      image: "./img/song6.jpg",
    },
    {
      name: "Sunset",
      singer: "Davichi(Crash landing on you)",
      path: "./asset/music/song7.mp3",
      image: "./img/song7.jpg",
    },
    {
      name: "Haru Haru",
      singer: "BigBang",
      path: "./asset/music/song8.mp3",
      image: "./img/song8.jpg",
    },
    {
      name: "Lalisa",
      singer: "LISA",
      path: "./asset/music/song9.mp3",
      image: "./img/song9.jpg",
    },
    {
      name: "Solo",
      singer: "JENNIE",
      path: "./asset/music/song10.mp3",
      image: "./img/song10.jpg",
    },
    {
      name: "Du Du Du",
      singer: "Black Pink",
      path: "./asset/music/song11.mp3",
      image: "./img/song11.jpg",
    },
    {
      name: "Kill This Love",
      singer: "Black Pink",
      path: "./asset/music/song12.mp3",
      image: "./img/song12.jpg",
    },
    {
      name: "Love Scenario",
      singer: "iKon",
      path: "./asset/music/song13.mp3",
      image: "./img/song13.jpg",
    },
    {
      name: "How You Like That",
      singer: "Black Pink",
      path: "./asset/music/song14.mp3",
      image: "./img/song14.jpg",
    },
    {
      name: "Ko Ko Bop",
      singer: "EXO",
      path: "./asset/music/song15.mp3",
      image: "./img/song15.jpg",
    },
    {
      name: "Way Back Home",
      singer: "SHAUN",
      path: "./asset/music/song16.mp3",
      image: "./img/song16.jpg",
    },
    {
      name: "SAVE ME",
      singer: "DREAM",
      path: "./asset/music/song17.mp3",
      image: "./img/song17.jpg",
    },
    {
      name: "Start",
      singer: "GAHO(ITAEWON CLASS)",
      path: "./asset/music/song18.mp3",
      image: "./img/song18.jpg",
    },
    {
      name: "Bboom Bboom",
      singer: "MOMOLAND",
      path: "./asset/music/song19.mp3",
      image: "./img/song19.jpg",
    },
    {
      name: "Pink Venom",
      singer: "Black Pink",
      path: "./asset/music/song20.mp3",
      image: "./img/song20.jpg",
    },
    {
      name: "Any Song",
      singer: "Zico",
      path: "./asset/music/song21.mp3",
      image: "./img/song21.jpg",
    },
  ],
  vpop: [
    {
      name: "Replay Trên Con Guây ft. Đan Ni",
      singer: "Phúc Du",
      path: "./asset/music/song22.mp3",
      image: "./img/song22.jpg",
    },
    {
      name: "từ chối nhẹ nhàng thôi",
      singer: "Bích Phương feat Phúc Du",
      path: "./asset/music/song23.mp3",
      image: "./img/song23.jpg",
    },
    {
      name: "Điều khác lạ",
      singer: "ĐạtG",
      path: "./asset/music/song24.mp3",
      image: "./img/song24.jpg",
    },
    {
      name: "Muốn được cùng em",
      singer: "FREAKY x CM1X",
      path: "./asset/music/song25.mp3",
      image: "./img/song25.jpg",
    },

    {
      name: "25",
      singer:
        "Mashup by Wikin 25 Táo x Young H x Sol'Bass x Nah x B Ray x Chú 13",
      path: "./asset/music/song26.mp3",
      image: "./img/song26.jpg",
    },
    {
      name: "Tại vì sao",
      singer: "RPT MCK",
      path: "./asset/music/song27.mp3",
      image: "./img/song27.jpg",
    },
    {
      name: "Way back home",
      singer: "Bray",
      path: "./asset/music/song28.mp3",
      image: "./img/song28.jpg",
    },
    {
      name: "Cao ốc 20",
      singer: "B RAY x DatG",
      path: "./asset/music/song29.mp3",
      image: "./img/song29.jpg",
    },
    {
      name: "Tình Ka",
      singer: "DANHKA",
      path: "./asset/music/song30.mp3",
      image: "./img/song30.jpg",
    },
    {
      name: "Xin",
      singer: "Đạt G, B Ray, Masew",
      path: "./asset/music/song31.mp3",
      image: "./img/song31.jpg",
    },
    {
      name: "Có chàng trai đang thất tình",
      singer: "Đạt G ft. Binz",
      path: "./asset/music/song32.mp3",
      image: "./img/song32.jpg",
    },
    {
      name: "Cause I Love You",
      singer: "Noo Phước Thịnh",
      path: "./asset/music/song33.mp3",
      image: "./img/song33.jpg",
    },
    {
      name: "Như Phút Ban Đầu",
      singer: "Noo Phước Thịnh",
      path: "./asset/music/song34.mp3",
      image: "./img/song34.jpg",
    },
    {
      name: "Gạt Đi Nước Mắt",
      singer: "Noo Phước Thịnh",
      path: "./asset/music/song35.mp3",
      image: "./img/song35.jpg",
    },
    {
      name: "Anh Thương Em Nhất Mà?",
      singer: "Lã. x Log x TiB",
      path: "./asset/music/song36.mp3",
      image: "./img/song36.jpg",
    },
    {
      name: "Đổi Thay",
      singer: "Hồ Quang Hiếu",
      path: "./asset/music/song37.mp3",
      image: "./img/song37.jpg",
    },
    {
      name: "Buông Đôi Tay Nhau Ra",
      singer: "Sơn Tùng MTP",
      path: "./asset/music/song38.mp3",
      image: "./img/song38.jpg",
    },
    {
      name: "Nếu Là Anh",
      singer: "The men",
      path: "./asset/music/song39.mp3",
      image: "./img/song39.jpg",
    },
    {
      name: "Ba Da Bum",
      singer: "Bray",
      path: "./asset/music/song40.mp3",
      image: "./img/song40.jpg",
    },
    {
      name: "Từng Quen",
      singer: "WREN EVANS",
      path: "./asset/music/song41.mp3",
      image: "./img/song41.jpg",
    },
    {
      name: "W/n - id 072019 | 3107 ft 267",
      singer: "W/n",
      path: "./asset/music/song42.mp3",
      image: "./img/song42.jpg",
    },
    {
      name: "Hẹn Một Mai",
      singer: "Bùi Anh Tuấn",
      path: "./asset/music/song43.mp3",
      image: "./img/song43.jpg",
    },
    {
      name: "W/n - id 2022 ft. 267",
      singer: "W/n",
      path: "./asset/music/song44.mp3",
      image: "./img/song44.jpg",
    },
    {
      name: "BUỒN HAY VUI",
      singer: "VSOUL x MCK x Obito x Ronboogz x Boyzed",
      path: "./asset/music/song45.mp3",
      image: "./img/song45.jpg",
    },
    {
      name: "NGÀY MAI NGƯỜI TA LẤY CHỒNG",
      singer: "THÀNH ĐẠT x ĐÔNG THIÊN ĐỨC",
      path: "./asset/music/song46.mp3",
      image: "./img/song46.jpg",
    },
    {
      name: "CHÚNG TA CỦA TƯƠNG LAI",
      singer: "SƠN TÙNG M-TP",
      path: "./asset/music/song47.mp3",
      image: "./img/song47.jpg",
    },
    {
      name: "BẠN ĐỜI",
      singer: "KARIK - (FT. GDUCKY)",
      path: "./asset/music/song48.mp3",
      image: "./img/song48.jpg",
    },
    {
      name: "Nụ hôn Bisou",
      singer: "Mikelodic",
      path: "./asset/music/song49.mp3",
      image: "./img/song49.jpg",
    },
    {
      name: "TỪNG LÀ",
      singer: "VŨ CÁT TƯỜNG",
      path: "./asset/music/song50.mp3",
      image: "./img/song50.jpg",
    },
  ],
  songs: [],
  loadConfig: function () {
    this.isChecked ? (this.songs = this.vpop) : (this.songs = this.kpop);
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
    this.isChecked = this.config.isChecked;
    repeatBtn.classList.toggle("active", this.isRepeat);
    randomBtn.classList.toggle("active", this.isRandom);
    // this.songs = this.kpop;
    playlistType.classList.toggle("active", this.isChecked);
  },
  render: function () {
    this.isChecked ? (this.songs = this.vpop) : (this.songs = this.kpop);
    console.log("check", this.isChecked);
    const htmls = this.songs.map((song, index) => {
      return `
            <div data-index="${index}" class="song ${
        index === this.currentSongIndex ? "active" : ""
      }">
            <div class="song-serial">${
              index < 9 ? `0${index + 1}` : `${index + 1}`
            }</div>
            <div class="song-thumb" style="background-image:url('${
              song.image
            }') ;"></div>
            <div class="animate-music">
                <svg fill="#ee3131" viewBox="0 0 512 512" class="icon-music icon-music-1">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#ee3131" viewBox="0 0 384 512" class="icon-music icon-music-2">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
                <svg fill="#ee3131" viewBox="0 0 512 512" class="icon-music icon-music-3">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#ee3131" viewBox="0 0 384 512" class="icon-music icon-music-4">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
            </div>
            <div class="song-body">
                <h3 class="song-title ellipsis">${song.name}</h3>
                <p class="song-author ellipsis">${song.singer}</p>
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
        `;
    });
    playList.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        this.isChecked ? (this.songs = this.vpop) : (this.songs = this.kpop);

        return this.songs[this.currentSongIndex];
      },
    });
  },
  activeSong: function () {
    _this = this;

    const listSongPlay = $$(".song");
    listSongPlay.forEach(function (song, index) {
      if (_this.currentSongIndex === index) {
        //Xóa loader and animate music ở song active cũ
        if ($(".song.active")) {
          $(".song.active .song-wave").classList.remove("loader");
          $(".song.active").classList.remove("active");
          //Thêm active và loader ở song được active mới
        }
        song.classList.add("active");
        song.querySelector(".song-wave").classList.add("loader");
      }
    });
  },
  handleEvents: function () {
    _this = this;
    // Play bài hát
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    //Khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.activeSong();
      _this.scrollToView();
      // _this.newBackground();
    };
    //Khi prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.activeSong();
      _this.scrollToView();
      // _this.newBackground();
    };
    //Khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    //Khi song bị pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    //Khi quay Cd ở Dashboard
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    //Xử lí tiến độ song hiện tại
    audio.ontimeupdate = function () {
      let seekPosition = 0;
      if (audio.currentTime) {
        seekPosition = Math.floor((audio.currentTime * 100) / audio.duration);
        seekSlider.value = seekPosition;
        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(
          audio.currentTime - currentMinutes * 60
        );
        let durationMinutes = Math.floor(audio.duration / 60);
        let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

        if (currentSeconds < 10) {
          currentSeconds = "0" + currentSeconds;
        }
        if (currentMinutes < 10) {
          currentMinutes = "0" + currentMinutes;
        }
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
        if (durationMinutes < 10) {
          durationMinutes = "0" + durationMinutes;
        }
        currentTimeBar.textContent = `${currentMinutes}:${currentSeconds}`;
        totalDurationTime.textContent = `${durationMinutes}:${durationSeconds}`;
      }
    };
    //Xử lí khi song tua
    seekSlider.oninput = function (e) {
      const seekTime = (audio.duration * e.target.value) / 100;
      audio.currentTime = seekTime;
    };
    //Xử lí khi song ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.onclick();
      }
      cdThumbAnimate.cancel();
    };
    //Xử lí Random
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    //Xử lí Repeat
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    //Xử lí khi click vào Song
    playList.onclick = function (e) {
      const songNode = e.target.closest(".song");
      if (songNode) {
        _this.currentSongIndex = Number(songNode.dataset.index);

        _this.loadCurrentSong();
        audio.play();
        // _this.newBackground();
      }
    };
    // Xử lí thu/phóng CD
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lí khi chuyển đổi list type
    playlistType.onclick = function () {
      _this.isChecked = !_this.isChecked;

      _this.setConfig("isChecked", _this.isChecked);
      playlistType.classList.toggle("active", _this.isChecked);

      // _this.newBackground();
      _this.render();
    };
  },
  scrollToView: function () {
    setTimeout(function () {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 200);
  },
  // newBackground: function () {
  //   let hex = [
  //     "0",
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //     "a",
  //     "b",
  //     "c",
  //     "d",
  //     "e",
  //   ];
  //   // let current;
  //   function codeColer(current) {
  //     for (let i = 0; i < 6; i++) {
  //       let index = Math.floor(Math.random() * 14);
  //       let y = hex[index];
  //       current += y;
  //     }
  //     return current;
  //   }
  //   let Color1 = codeColer("#");
  //   let Color2 = codeColer("#");
  //   var angle = "to right";
  //   let gradient = `linear-gradient(${angle},${Color1},${Color2})`;
  //   document.body.style.backgroundImage = gradient;
  // },
  nextSong: function () {
    this.currentSongIndex++;
    if (this.currentSongIndex >= this.songs.length) {
      this.currentSongIndex = 0;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    if (this.listSongPlayed.length == this.songs.length) {
      this.listSongPlayed = [];
    }
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (this.listSongPlayed.includes(newIndex));
    this.listSongPlayed.push(newIndex);
    this.currentSongIndex = newIndex;
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentSongIndex--;
    if (this.currentSongIndex < 0) {
      this.currentSongIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  loadCurrentSong: function () {
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    document.body.style.backgroundImage = `url('${this.currentSong.image}')`;

    heading.innerText = this.currentSong.name;
    author.innerText = this.currentSong.singer;
    audio.src = `${this.currentSong.path}`;
    this.activeSong();
  },

  start: function () {
    //Gán cấu hình từ config sang app
    this.loadConfig();
    //Định nghĩa các thuộc tính mới cho Obj
    this.defineProperties();

    //Tải thông tin bài hát
    this.loadCurrentSong();

    //Xử lí sự kiện
    this.handleEvents();

    //Render ra bài hát
    this.render();

    //Active song
    this.activeSong();

    //Random background cho app
    // this.newBackground();

    console.log(this.kpop);
    console.log(this.songs);
  },
};
app.start();
