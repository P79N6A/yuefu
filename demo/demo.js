const yuefu = new Yuefu({
  container: document.getElementById("player1"),
});

class Test {
  constructor(player, options) {
    console.log("player: ", player);
  }
  static get name() {
    return "test";
  }
}

yuefu.install(Test);

// yuefu.addModule(Yuefu.import('progress'), {
//   // timeFormat: 'MM:ss'
// })
// yuefu.addModule(Yuefu.import('list'), {
//   audios: [{
//     name: "peace sign",
//     artist: "JAKI",
//     type: "normal",
//     url: "http://lwio.me/api/storeroom/1526123245516.mp3",
//     cover: "",
//     lrc: "http://cdn.lwio.me/yuefu/lrc/demo.lrc",
//   }, {
//     name: "胖子非野子",
//     artist: "JAKI",
//     type: "normal",
//     url: "http://lwio.me/api/storeroom/1528112620919.mp3",
//     cover: "",
//     lrc: "http://cdn.lwio.me/yuefu/lrc/demo2.lrc",
//   }]
// })

// yuefu.addModule(Yuefu.import('controller'), {
//   controllers: [{
//     name: 'play',
//     // 这里tag和HTML需不需要合并？tag有必要么
//     tag: 'button',
//     innerHTML: '播放',
//     handler: (player) => {
//       player.play()
//     }
//   }, {
//     name: 'pause',
//     // 这里tag和HTML需不需要合并？tag有必要么
//     tag: 'button',
//     innerHTML: '暂停',
//     handler: (player) => {
//       player.pause()
//     }
//   }]
// })

// yuefu.addModule(Yuefu.import('lrc'), {

// })
