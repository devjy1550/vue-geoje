<template>
  <!-- 모바일메뉴내용 -->
  <a href="#" class="mb-btn mb-btn-open">
    <span class="line"></span>
    <!-- <span class="line"></span>
    <span class="line"></span> -->
  </a>
  <div class="mb-wrap">
    <div class="mbw-top clearfix">
      <a href="#">로그인</a>
      <a href="#">회원가입</a>
    </div>
    <div class="mbw-main">
      <ul class="mb-menu clearfix">
        <li v-for="(item, index) in menuData" :key="index">
          <a :href="item.mainlink" class="mb-mainmenu" v-html="item.maintxt"></a>
          <ul class="mb-submenu">
            <li v-for="(subitem, subindex) in item.submenu" :key="subindex">
              <a :href="subitem.sublink" v-html="subitem.subtxt"></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="mb-dim">
  </div>
</template>


<script>
  import {
    computed,
    onUpdated
    // ref
  } from 'vue'
  import $ from 'jquery'
  import {
    useStore
  } from 'vuex'

  export default {
    setup() {

      const store = useStore();
      const menuData = computed(() => store.getters.menuData);

      onUpdated(() => {

        $(window).ready(function () {
          $('.mb-btn').removeClass('mb-btn-open');
          $('.mb-wrap').removeClass('mb-wrap-open');
        })

        let mbBT = $('.mb-btn');
        mbBT.click(function (event) {
          event.preventDefault();
          if (mbBT.hasClass('mb-btn-open') == false) {
            $(this).addClass('mb-btn-open');
            $('.mb-dim').addClass('mb-dim-open');
            $('.mb-wrap').addClass('mb-wrap-open');
          } else {
            $('.mb-btn').removeClass('mb-btn-open');
            $('.mb-dim').removeClass('mb-dim-open');
            $('.mb-wrap').removeClass('mb-wrap-open');
          }
        });
        // 화면사이즈 체크
        $(window).resize(function () {
          // 화면너비를 계산한다.
          let temp = $(window).width();
          // 1000px 보다 크면
          if (temp > 1000) {
            // 모바일 버튼 기능 초기화
            $('.mb-btn').removeClass('mb-btn-open');
            $('.mb-dim').removeClass('mb-dim-open');
            $('.mb-wrap').removeClass('mb-wrap-open');
            mb_li.height(60);
            mb_submenu.removeClass('mb-submenu-show');
            mb_mainmenu.css('color', '#333')
          }
        });


        // let mb_mainmenu = $('.mb-mainmenu');
        let mb_mainmenu = $('.mb-mainmenu');
        // 2.모바일서브메뉴 저장
        let mb_submenu = $('.mb-submenu');
        // let mb_mainmenu = $('.mb_mainmenu');
        // 3.펼쳐질 서브메뉴의 높이값
        let mb_submenu_height = [];
        // 높이값 계산을 실행 
        $.each(mb_submenu, function (index) {
          // 각각의 .mb_submenu로 가서 li의 개수를 파악한다.
          let count = $(this).find('li').length //length는 숫자(갯수)를 말해준다.
          // 최종결과를 저장 (56*count)
          mb_submenu_height[index] = (56 * count); //56X갯수를 index(순서값)에다가 보관하라는 이야기.
        });
        // console.log(mb_menu_high);

        // 최종결과
        let mb_li = $('.mb-menu > li');
        $.each(mb_mainmenu, function (index) {
          $(this).click(function (event) {
            event.preventDefault();

            let temp = mb_submenu_height[index];

            if (mb_li.eq(index).height() != 60) {
              mb_li.eq(index).height(60);
              mb_submenu.removeClass('mb-submenu-show');
              mb_mainmenu.css('color', '#333');
            } else {
              mb_li.height(60);
              mb_li.eq(index).height(temp + 60);
              mb_submenu.removeClass('mb-submenu-show');
              mb_submenu.eq(index).addClass('mb-submenu-show');
              mb_mainmenu.css('color', '#333');
              mb_mainmenu.eq(index).css('color', '#2578de');
            }
          })
        })

        let mbDim = $('.mb-dim');

        mbDim.click(function () {
          $('.mb-btn').removeClass('mb-btn-open');
          $('.mb-dim').removeClass('mb-dim-open');
          $('.mb-wrap').removeClass('mb-wrap-open');
          mb_li.height(60);
          mb_submenu.removeClass('mb-submenu-show');
          mb_mainmenu.css('color', '#333')
        })
      })
      return {
        menuData
      }
    }
  }
</script>


<style>
  /* 모바일관련 */
  /* 모바일메뉴 */
  .mb-btn {
    position: fixed;
    right: 20px;
    top: 24px;
    display: none;
    width: 24px;
    height: 22px;
    z-index: 99999;
    /* header보가 커야함 */
  }

  .mb-btn::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  .line {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
    /* 트랜지션을 여기다가 지정해줘야함 */
  }

  .mb-btn::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  /* 이렇게 before 그리고 중간 , after 이 3개에다가 지정해주고,  모두다 ease를 줌으로써 가속도를 붙인다는의미이다.
  사실 여기서는 큰의미는 없는게 시간을 0.3s로 지정해놧기에 어차피 스르륵 변화된다.*/

  .mb-btn-open::before {
    top: 50%;
    height: 3px;
    transform: rotate(45deg);
  }

  .mb-btn-open .line {
    width: 0;
    height: 3px;
  }

  .mb-btn-open::after {
    top: 50%;
    height: 3px;
    transform: rotate(-45deg);
  }

  @media all and (max-width: 1000px) {
    .mb-btn {
      display: block;
    }
  }

  /* 모바일메뉴내용 */
  .mb-wrap {
    position: fixed;
    right: -400px;
    /* 본인만큼 옆으로 치워져있는다는의미*/
    top: 0;
    display: block;
    width: 400px;
    height: 100%;
    background-color: #fff;
    z-index: 99998;
    transition: all 0.3s;
    padding: 0 20px;
  }

  /* mb-btn보다는 아래에나와야하기땜에 99998 */
  /* z인덱스가 높은게 제일 위로온다. */
  /* 모바일메뉴 가림막 */

  .mb-wrap-open {
    right: 0;
  }

  .mbw-top {
    position: relative;
    display: block;
    padding-top: 80px;
    margin-bottom: 20px;
  }

  .mbw-top a {
    position: relative;
    display: block;
    float: left;
    font-size: 13px;
    color: #999;
    border: 2px solid #eee;
    line-height: 45px;
    margin-right: 10px;
    padding: 0 20px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.0);
    transition: background-color 0.5s;
  }

  .mbw-top a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .mbw-main {
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    background-color: #f5f5f5;
    width: 100%;
  }

  .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 18px;
    color: #333;
    line-height: 60px;
    background-color: #fff;
  }

  .mb-mainmenu>li {
    position: relative;
    display: none;
  }

  .mb-mainmenu>li.toggle {
    display: block;
  }

  .mb-submenu {
    position: relative;
    display: none;
    padding: 0 20px;
  }

  .mb-submenu-show {
    display: block;
  }

  .mb-submenu li {
    position: relative;
    display: block;
    border-bottom: 1px solid#e9e9e9;
  }

  .mb-submenu>li>a {
    position: relative;
    display: block;
    font-size: 15px;
    color: #666;
    line-height: 55px;
  }

  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: #000;
    z-index: 99997;
  }

  .mb-dim-open {
    display: block;
  }

  /* 기존거엔 none을하고 -open을 붙이면서 display:block을 하면 나타나게됨 */
</style>