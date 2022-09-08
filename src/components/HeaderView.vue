<template>
  <!-- header -->
  <header class="header">
    <div class="inner">
      <!-- <span class="ball">공이에요.</span> -->
      <h1 href="#" class="logo"></h1>
      <!-- # 은 현재페이지를 말함 -->
      <div class="gnb">
        <ul class="menu clearfix">
          <li v-for="(item, index) in menuData" :key="index">
            <a :href="item.mainlink" class="mainmenu" v-html="item.maintxt"></a>
            <ul class="submenu">
              <li v-for="(subitem, subindex) in item.submenu" :key="subindex">
                <a :href="subitem.sublink" v-html="subitem.subtxt"></a>
              </li>
            </ul>
          </li>



          <!-- 
          <li><a href="#" class="mainmenu">청년센터</a>
            <ul class="submenu">
              <li><a href="#">청년센터소개</a></li>
              <li><a href="#">프로그램안내</a></li>
              <li><a href="#">보유도서목록</a></li>
              <li><a href="#">공간안내</a></li>
              <li><a href="#">오시는길</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">청년정책</a>
            <ul class="submenu">
              <li><a href="#">정책소식</a></li>
              <li><a href="#">분야별 청년정책</a></li>
              <li><a href="#">청년네트워크 소개</a></li>
              <li><a href="#">청년주요활동</a></li>
              <li><a href="#">청년정책 검색</a></li>
              <li><a href="#">아카이브</a></li>
              <li><a href="#">청년다락</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">청년일자리</a>
            <ul class="submenu">
              <li><a href="#">일자리정책</a></li>
              <li><a href="#">구인 및 구직 등록</a></li>
              <li><a href="#">채용정보</a></li>
              <li><a href="#">교육훈련</a></li>
              <li><a href="#">창업정보</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">사업소개</a>
            <ul class="submenu">
              <li><a href="#">사업안내</a></li>
              <li><a href="#">사업일정표</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">공간계약</a>
            <ul class="submenu">
              <li><a href="#">공간신청</a></li>
              <li><a href="#">공간신청 현황</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">커뮤니티</a>
            <ul class="submenu">
              <li><a href="#">이룸소식</a></li>
              <li><a href="#">자유게시판</a></li>
              <li><a href="#">활동갤러리</a></li>
              <li><a href="#">청년뉴스</a></li>
              <li><a href="#">동영상자료</a></li>
            </ul>
          </li>
          <li><a href="#" class="mainmenu">청년창업공간(<span class="colorful1">내</span><span class="colorful2">꿈</span><span
                class="colorful3">공</span><span class="colorful4">간</span>)</a>
            <ul class="submenu">
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 소개</a></li>
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 대관신청</a></li>
              <li><a href="#"><span class="colorful1">내</span><span class="colorful2">꿈</span><span
                    class="colorful3">공</span><span class="colorful4">간</span> 대관현황</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
      <div class="member">
        <ul class="member-list clearfix">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
        </ul>
        <button class="member-more">더보기</button>
      </div>
    </div>
  </header>
</template>

<script>
  import {
    useStore
  } from 'vuex'
  import {
    computed,
    onMounted
  } from 'vue'

  import $ from 'jquery'

  export default {

    setup() {

      onMounted(() => {
        // .more-wrap 저장해서 활용하자.
        let more_wrap = $('.more-wrap');

        // .member-more 저장해서 활용하자.
        let member_more = $('.member-more');
        member_more.click(function () {
          more_wrap.fadeIn(300);
        });
      });

      const store = useStore();
      const menuData = computed(() => store.getters.menuData);

      return {
        menuData
      }

    }
  }
</script>

<style>
  /* Specific */
  /* === 헤더영역 === */
  .header {
    position: relative;
    display: block;
    z-index: 9999;
  }

  .header .inner {
    height: 98px;
  }

  /* .header > .inner 라고도 표현할수있는데 되도록이면 >없이하라. 다만 >를 표현할때는!! */
  /* div~~   innner~~~안에 또  innner 등등 같은class로 겹칠경우에는 사용해서 혼란이 없도록 하자. */

  /* .header .inner .ball {
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
}
이렇게 지정하면 글자크기만큼까지만 검은원이 만들어져버린다. 왜냐하면 inline요소이기때문이다. 
그렇기때문에 block을 설정해줘야한다.
그냥 센션에다가 무조건 display:block을 줘라

.header .inner .ball {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #000;
  border-radius: 50%;
} */

  /* 이렇게 할때 relative와 block을 먼저 아래 3개 logo gnb member에다가 다 부여한다. 그리고 넘어가라 */
  .logo {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 12%;
    height: 54px;
    background: url('@/assets/images/img_logo.png') no-repeat center;
    background-size: contain;
    /* 이런식으로 퍼센트로 잡아주면 기존높이가 바뀌더라도 원하는 자리에 위치하게된다. */
  }



  .gnb {
    position: relative;
    display: block;
  }

  .menu {
    position: absolute;
    /* relative에서 수정한거임*/
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: block;
    white-space: nowrap;
    font-size: 0;
  }

  /* 너비를 알면 margin : 0 auto; 해주면 중앙으로간다. 가운데로 보내주는 의미임 */
  /* 너비를 알수 없으면 absolute잡아주고 움직이기!! */
  /* center라는 것도 이용이 가능한데, 이건 inline-block이라는 조건이 잇어야함!! */

  .menu>li {
    position: relative;
    display: inline-block;
    /* 여기서 인라인블록을 설정할때 굉장히 복합한 설명이 부연된다. */
    /* 일단 float:left를 잡아서 빈틈없이 매겨놨더니, 줄넘김이 발생하는경우가 생긴다. */
    /* 그럼 이경우에는 결국에 너비를 잡아줘야하나? 하는 고민이 생기지만 메뉴갯수가 바뀔수도잇고,
반응형에 대응하려면 너비를 잡아주는게 적절치못하다는 결론이 나온다.*/
    /* 어떻게 해결을 할것이냐! 결국 'menu'를 만들때에는 인라인 블럭을 이용해라!!!  */
    /* 1. inline-block을 지정해줘라. 
    2. 줄넘김을 막기위해서는 이제 인라인요소가 되었기때문에 white-space:nowrap을 적용해준다. 
    3. 이렇게까지해주면 되지만 우리가 최대한 float left로 한이유가 바로 틈이없는거기때문잇고, 
    인라인블럭을쓰면 띄어쓰기같은 틈이발생한다. 이는 코딩시 이용하는 enter로 인한것이고 이를
    없애주고자 font-size 제로 까지 적용해준다. 그러고나면 enter에 대한 공백은 사라지나, text로
    쓰여진부분까지 안보이게되기땜에, 그건 따로 내려가서 하나하나 적용해줘야한다.*/
  }

  .mainmenu {
    position: relative;
    display: block;
    height: 98px;
    line-height: 98px;
    text-align: center;
    padding: 0 18px;
    font-size: 19px;
    color: #333;
    border: 0;
  }

  .submenu {
    position: absolute;
    /* relative에서 수정한거*/
    /* 여기서 absoulte가 되면서 부모에는 영향을 주지않게된다.  */
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    top: 70px;
    min-width: 180px;
    visibility: hidden;
    text-align: center;
    display: block;
    font-size: 14px;
    opacity: 0;
    transition: all 0.3s;

    background: #fff;
    border: 1px solid rgba(255, 255, 255, .3);
    border-radius: 3px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  }

  .menu>li>a:hover {
    color: #2578de
  }

  .menu>li:hover .submenu {
    z-index: 999;
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }


  .submenu li {
    position: relative;
    display: block;
  }

  .submenu li a {
    position: relative;
    display: block;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    color: #333;
    font-weight: 400;
    line-height: 46px;
    border-bottom: 1px solid #eaeaea;
    /* 줄내림을 하지마란 명령어 (너비를 지정해서 해결할수도 있고 이렇게도가능) */
  }

  .submenu li:last-child a {
    border: none;
  }

  .menu>li:hover .mainmenu {
    color: #2578de;
  }

  .menu a:hover {
    color: #2578de;
  }

  /* gnb는 되도록이면 제일 마지막에 작업하라. 이게 가장 복합한경우가 대부분이기떄문에*/

  .member {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }

  .member-list {
    position: relative;
    display: block;
    float: left;

  }

  .member-list li {
    position: relative;
    display: block;
    float: left;
    margin-top: 12px;
    margin-right: 15px;
  }

  .member-list li a {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;

  }

  .member-more {
    position: relative;
    display: block;
    width: 45px;
    height: 45px;

    float: left;
    font-size: 0;
    background: url('@/assets/images/img_allmenu.png') no-repeat center;
    background-size: cover;
    border: 0;
    cursor: pointer;
  }


  /* 상단PC버젼 */
  /* 1400보다 작은 경우 반응형 */
  /* 비율 = 원하는값.기준값 (vw : viewport width) */

  @media all and (max-width:1400px) {
    .header .inner {
      height: 90px;
    }

    .logo {
      width: 123px;
      height: 40px;
      margin-left: 15px;
    }

    .menu {
      left: 60%;
      top: 28px;
    }

    .mainmenu {
      font-size: 17px;
      line-height: 65px;
      height: 65px;
      padding: 0 28px;
    }

    .submenu {
      top: 60px;
    }

    .member {
      top: 20%;
    }

    .member-more {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      margin-top: 5px;
    }
  }

  @media all and (max-width:1160px) {
    .mainmenu {
      padding: 0 14px;
    }
  }


  @media all and (max-width:1000px) {
    .mb-btn {
      display: block;
    }

    .header .inner {
      height: 70px;
    }

    .gnb {
      display: none;
    }

    .member {
      display: none;
    }
  }
</style>