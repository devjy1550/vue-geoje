<template>
  <div class="morebox ">
    <div class="more-wrap">
      <div class="more-menutap">
        <button class="mm-close"><span class="icon-x"></span></button>
        <h2><b>거제청년센터 이룸 </b> 전체메뉴</h2>
        <ul class="more-menu">
          <li><a href="#" class="more-mainmenu">청년센터</a>
            <ul class="more-submenu">
              <li><a href="#">청년센터소개</a></li>
              <li><a href="#">프로그램안내</a></li>
              <li><a href="#">보유도서목록</a></li>
              <li><a href="#">공간안내</a></li>
              <li><a href="#">오시는길</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">청년정책</a>
            <ul class="more-submenu">
              <li><a href="#">정책소식</a></li>
              <li><a href="#">분야별 청년정책</a></li>
              <li><a href="#">청년네트워크 소개</a></li>
              <li><a href="#">청년주요활동</a></li>
              <li><a href="#">청년정책 검색</a></li>
              <li><a href="#">아카이브</a></li>
              <li><a href="#">청년다락</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">청년일자리</a>
            <ul class="more-submenu">
              <li><a href="#">일자리정책</a></li>
              <li><a href="#">구인 및 구직 등록</a></li>
              <li><a href="#">채용정보</a></li>
              <li><a href="#">교육훈련</a></li>
              <li><a href="#">창업정보</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">사업소개</a>
            <ul class="more-submenu">
              <li><a href="#">사업안내</a></li>
              <li><a href="#">사업일정표</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">공간계약</a>
            <ul class="more-submenu">
              <li><a href="#">공간신청</a></li>
              <li><a href="#">공간신청 현황</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">커뮤니티</a>
            <ul class="more-submenu">
              <li><a href="#">이룸소식</a></li>
              <li><a href="#">자유게시판</a></li>
              <li><a href="#">활동갤러리</a></li>
              <li><a href="#">청년뉴스</a></li>
              <li><a href="#">동영상자료</a></li>
            </ul>
          </li>
          <li><a href="#" class="more-mainmenu">청년창업공간(<span class="colorful1">내</span><span
                class="colorful2">꿈</span><span class="colorful3">공</span><span class="colorful4">간</span>)</a>
            <ul class="more-submenu">
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 소개</a></li>
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 대관신청</a></li>
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 대관현황</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    useStore
  } from 'vuex'
  import {
    computed,
    onMounted,
    // ref
  } from 'vue'
  import $ from 'jquery'




  export default {



    setup() {
      onMounted(() => {
        // .more-wrap 저장해서 활용하자.
        let more_wrap = $('.more-wrap');

        // .more-div 저장해서 활용하자.
        let more_div_close = $('.mm-close');
        more_div_close.click(function () {
          more_wrap.fadeOut(300);
        });
        more_wrap.click(function () {
          more_wrap.fadeOut(300);
        });

        $(window).resize(function () {
          // 화면너비를 계산한다.
          let temp = $(window).width();
          // 1000px 보다 크면
          if (temp < 1000) {
            // 모바일 버튼 기능 초기화
            more_wrap.hide();
            }
        })


      });
      const store = useStore();
      const menuData = computed(() => store.getters.menuData)

      return {
        menuData
      }
    }

  }
</script>


<style>
  /* 더보기메뉴 */
  .more-wrap {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .more-wrap-show{
    display: block;
  }

  .more-menutap {
    position: relative;
    display: block;
    width: 90%;

    margin: 0 auto;
    margin-top: 180px;
    /* transform: translateX(-50%);
  transform: translateY(-50%);
  이렇게 쓰면안됨, 뒤에껄 무시해버린다. */
    background-color: #fff;
    padding: 80px 85px;
  }

  .mm-close {
    position: absolute;
    right: 0%;
    top: 0%;
    display: block;
    width: 70px;
    height: 70px;
    border: 0;
    background-color: #2578de;
    cursor: pointer;
  }

  .icon-x {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%) rotate(-45deg);
    transition: transform 0.5s;
  }

  .mm-close:hover .icon-x {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .icon-x::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 9px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }

  .icon-x::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 0px;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #fff;
  }


  .more-menutap>h2 {
    position: relative;
    display: block;
    font-size: 32px;
    color: #222;
    font-weight: 300;
    margin-bottom: 50px;
    white-space: nowrap;
  }

  .more-menutap>h2 b {
    color: #2578de;
    font-weight: 700;
  }

  .more-menu {
    position: relative;
    display: block;
    font-size: 0;
  }

  .more-menu>li {
    position: relative;
    display: inline-block;
    width: calc(100% / 6);
    vertical-align: top;
    padding: 25px 15px;
  }




  .more-mainmenu {
    position: relative;
    display: block;
    padding-bottom: 50px;
  }

  .more-submenu {
    position: relative;
    display: block;
    padding-top: 35px;
    font-size: 14px;
    border-top: 2px solid rgb(68, 68, 68);

  }


  .more-submenu li {
    position: relative;
    display: block;
    margin-bottom: 20px;
  }



  .more-submenu li a {
    position: relative;
    display: block;
    color: #666666;
    white-space: nowrap;
  }

  .more-submenu li:hover .more-mainmenu {
    color: #2578de;
    border-bottom: 2px solid #2578de;
  }

  .more-submenu li a:hover {
    color: #2578de;
  }

  /* 이렇게 할거면 height를 주면 쉽게해결이 가능하다. 다만 display table로 해보자  */
  /* table & table layout fixed, table-cell */
  /* .more-menu>li:last-child(6n) {
  6번째마다 마진없음
  margin-right: 0;
} */
  .more-menu>li:first-child {
    padding-left: 0;

  }

  .more-menu>li:last-child {
    padding-left: 0;

  }

  .more-menu>li>a {
    white-space: nowrap;
  }

  .more-menu {
    position: relative;
    display: block;
    font-size: 19px;
    color: #222;
    padding-bottom: 50px;
  }

  .more-mainmenu {
    position: relative;
    display: block;
  }

  .more-submenu {
    position: relative;
    display: block;
  }

</style>