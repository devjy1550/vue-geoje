<template>
  <!-- community -->
  <section class="community">
    <div class="inner clearfix">
      <div class="community-box">
        <div class="comu-top bg-line">
          <h3>이룸소식</h3>
          <a href="" class="comu-more">전체보기</a>
        </div>
        <div class="comu-main">
          <ul class="comu-list">
            <li v-for="(item , index) in newsData" :key="index">
              <a :href="item.link">{{item.newstitle}}</a>
              <span class="date">{{item.newsdate}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="community-box">
        <div class="comu-top bg-line">
          <h3>청년정책 새소식</h3>
          <a href="" class="comu-more">전체보기</a>
        </div>
        <div class="comu-main">
          <ul class="comu-list">
            <li v-for="(item,index) in infoData" :key="index">
              <a :href="item.link">{{item.infotitle}}</a>
              <span class="date">{{item.infodate}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="community-box calender bg-line">
        <div class="comu-top">
          <h3>센터일정</h3>
          <a href="" class="comu-more">전체보기</a>
          <div class="comu-main"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    useStore
  } from 'vuex'

  import {
    computed
  } from 'vue'
  export default {
    setup() {
      const store = useStore();
      const newsData = computed(() => store.getters.newsData);
      const infoData = computed(() => store.getters.infoData);
      return {
        newsData,
        infoData
      }
    }
  }
</script>

<style scoped>
  .community {
    position: relative;
    display: block;
    padding: 70px 0;
  }

  .community .inner {
    position: relative;
    display: block;
  }

  .community-box {
    position: relative;
    display: block;
    float: left;
    width: 32.5%;
    height: 372px;
    margin-right: 1.5%;
    overflow: hidden;
    padding: 30px;
    /**/
    border: 1px solid #e6e8eb;
    /* 여기서 일단 높이를 잡는이유 : 높이를 주지않으면 게시판에 내용이 하나도 없을경우, 텅비게되면서 높이줄게 없어져서 모양이 잡히지않게된다. 그래서 높이를 여기서는 구체적으로 줄필요가 반드시있다. */
    /* 이에 더해서 반대로 overflow hidden을 줌으로써 게시판에 보여질 내용이 너무많을경우는 안보이게도 만들어줘야한다. */
  }

  .calender {
    width: 32%;
    margin-right: 0;
  }

  .comu-top {
    position: relative;
    display: block;
    padding-bottom: 20px;
  }

  .bg-line {
    background: url('@/assets/images/img_bg_line.png') repeat-x;
    background-position: 0 100%;
  }

  .comu-top h3 {
    position: relative;
    display: block;
    font-size: 22px;
    color: #0e62b2;
    font-weight: 300;
    white-space: nowrap;
  }

  .comu-more {
    position: absolute;
    right: 0px;
    top: 6px;
    display: block;
    padding-left: 18px;
    /* 이것도 설명이 필요하다. */
    white-space: nowrap;
    font-size: 18px;
    color: #333;
  }

  .comu-more::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 14px;
    display: block;
    width: 8px;
    height: 2px;
    background-color: #131313;
  }

  .comu-more::after {
    content: '';
    position: absolute;
    left: 9px;
    top: 11px;
    display: block;
    width: 2px;
    height: 8px;
    background-color: #131313;
  }

  /* 여기보면 before,after를 보면 absolute이고 그 윗태그인 comu-more도 absolute이다. */
  /* 그럼 이상황에서 b,a는 어디를 기준으로 가느냐?? 그냥 바로 윗부모 태그를 기준이 되어버린다. */
  /* 조금 다르게 설명하자면, absolute는 기준값이 되는 relative를 찾는데에는 결국 기준좌표값을 찾는다라고 표현할수도 있는데... 그렇다면 윗부모의 absolute는 그 윗태그에대해서 포지션을 지정해주었고
그렇기에 윗부모absolute는 포지션 정해지게 된셈이다. 그렇기에 내가지정한 b,a의 absolute는 그 윗태그 absolute를 기준으로하게된다는 말이된다. */





  .comu-main {
    position: relative;
    display: block;
    padding-top: 25px;
  }

  .comu-list {
    position: relative;
    display: block;
  }

  .comu-list li {
    position: relative;
    display: block;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
    line-height: 53px;
  }

  .comu-list li:last-child {
    border-bottom: none;
  }

  .comu-list li a {
    position: relative;
    display: block;
    float: left;
    font-size: 16px;
    color: #444;
    font-weight: 300;

    /* 말줄임표 ... 코드 */
    width: 75%;
    /* 너비존재해야함*/
    overflow: hidden;
    /*넘어가면안보이게*/
    text-overflow: ellipsis;
    /*생략*/
    white-space: nowrap;
    /*줄내림없기*/
  }



  .comu-list li span {
    position: relative;
    display: block;
    float: right;
    font-size: 15px;
    color: #444;
  }

  /* 커뮤니티 pc버젼 */
  /* 커뮤니티 반응형 */

  @media all and (max-width:1140px) {

    .community {
      padding: 5vw 0;
    }

    .community-box:nth-child(1) {
      width: 49%;
      margin-right: 1%;
      margin-bottom: 30px;
    }

    .community-box:nth-child(2) {
      width: 49%;
      margin-left: 1%;
      margin-right: 0;
      margin-bottom: 30px;
    }

    .community-box:nth-child(3) {
      width: 100%;
      margin-right: 0;
    }
  }

  @media all and (max-width:760px) {
    .community-box:nth-child(1) {
      width: 100%;
      margin: 0;
      margin-bottom: 20px
    }

    .community-box:nth-child(2) {
      width: 100%;
      margin: 0;
      margin-bottom: 20px
    }

    .community-box:nth-child(3) {
      width: 100%;
    }
  }
</style>