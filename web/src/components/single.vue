<template>
  <div class="fd-item-item" @click.stop="$coment.handlePlay(song, songList)">
    <div class="fd-img">
      <img v-lazy="song.album.picUrl" >
    </div>
    <div class="fd-details">
      <div class="fd-left">
        <div class="fd-tops">
          <div class="fd-name fd-textOverflow">{{song.name}}</div>
          <div class="fd-author fd-textOverflow">- {{song.artists[0].name}}</div>
        </div>
        <div class="fd-bottom">
          <span class="fd-flag">独家</span>
          <div class="fd-text fd-textOverflow" v-if="comType">{{hotComments[1]}}</div>
        </div>
      </div>
      <div class="fd-right">
        <div class="fd-item">
          <i class="iconfont fd-icon-item">&#xe60f;</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    songList: {
      type: Array,
      default: () => []
    },
    song: {
      type: Object,
      default: () => {} 
    },
    comType: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hotComments: [
        '我想做一个能在你的葬礼上描述你一生的人',
        '每个人的裂痕，最后都会变成故事的花纹',
        '你那么孤独，却说一个人真好',
        '当你觉得孤独无助时，想一想还有十几亿的细胞只为了你一个人而活',
        '一个人久了，煮个饺子看见两个粘在一起的也要给它分开',
        '校服是我和她唯一穿过的情侣装，毕业照是我和她唯一的合影',
        '我在最没有能力的年纪，碰见了最想照顾一生的人',
        '理想就是离乡',
        '世界如此广阔，人类却走进了悲伤的墙角',
        '谢谢你陪我校服到礼服',
        '喜欢这种东西，捂住嘴巴，也会从眼睛里跑出来',
        '年轻时我想变成任何人，除了我自己'
      ]
    }
  },
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>
$lenght: 120px;
$widthLen: calc(100% - 120px);
.fd-img{
  float: left;
  width: $lenght;;
  height: $lenght;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.fd-details{
  width: $widthLen;
  height: $lenght;
  padding: 0 30px 0 10px;
  float: left;
  display: flex;
  .fd-left{
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .fd-tops{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .fd-name{
        max-width: 70%;
        padding-right: 20px;
        font-size: 30px;
      }
      .fd-author{
        max-width: 30%;
        font-size: 23px;
        color: #818181;
      }
    }
    .fd-bottom{
      display: flex;
      align-items: center;
      .fd-flag{
        font-size: 15px;
        border: 1.5px solid #ff2f2b;
        color: #ff2f2b;
        display: inline-block;       
        padding: 0px 3px;
        font-weight: bold;
        margin-right: 10px;
        white-space: nowrap;                          
      }
      .fd-text{
        font-size: 23px;
        color: #818181;
      }
    }
  }
  .fd-right{
      width: 60px;
      color: #ff2b3c;
      display: flex;
      align-items: center;
      justify-content: center;
      .fd-item{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #ebebeb;
        box-shadow: 0px 0px 3px #888888;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont{
          font-size: 25px;
        }
      }
  }
}
</style>