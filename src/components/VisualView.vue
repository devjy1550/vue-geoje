<template>
  <!-- visual -->
  <section class="visual">
    <Swiper :modules="modules" :autoplay="{
        delay: 1000,
        disableOnInteraction: false
      }" :loop="true" :pagination="{
        el: '.sw-visual-pgnt',
        clickable: 'true'
      }" :effect="'fade'" @swiper="visualSlide" class="sw-visual">
      <!-- <SwiperSlide class="swiper-slide" v-for="(item,index) in visualData" :key="index"><a :href="item.link" class="vs-1"></a></SwiperSlide> -->
      <SwiperSlide class="swiper-slide" v-for="(item,index) in visualData" :key="index">
        <!-- <a :href="item.link" 
          :style="{backgroundImage:'url(' + require( `@/assets/images/${item.imgurl}` ) + ')' ,  backgroundSize: 'cover'}"> -->
        <a :href="item.link" :style="{
            backgroundImage:`url(${ resW ? item.imgurl : item.mbimgurl })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}" :data-bg-mb="item.mbimgurl" :data-bg="item.imgurl">
        </a></SwiperSlide>
      <div class="sw-visual-control clearfix">
        <div class="sw-visual-pgnt"></div>
        <button class="sw-visual-bt">
          <!-- 슬라이더를 클릭시 play, pause를 하기원함 -->
          <span class="material-icons" @click="controlSlide">
            <!-- 클릭을 했을때에, 아이콘모양을 바꾸기 위해작성 -->
            <!-- 구글아이콘인경우임.  -->
            <!-- pause -->
            {{slideState}}
          </span>
        </button>
      </div>
    </Swiper>
  </section>
</template>

<script>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue'

  import 'swiper/css'

  import {
    Autoplay,
    EffectFade,
    Pagination
  } from 'swiper'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-fade'
  import {
    useStore
  } from 'vuex'




  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      //state의 visualData를 받아옴
      const store = useStore();
      // getters의 visualData를 computed로 받아옴
      const visualData = computed(() => store.getters.visualData);
      // style의 바인딩을 이용함. v-bind:style="내용"



      // swiper 슬라이드를 저장하려는 용도
      const slide = ref(null);
      // swiper 슬라이드 객체를 저장하기위함.
      const visualSlide = (swiper) => {
        //ref이기에 value로 저장
        slide.value = swiper;
        //1번부터 실행
        slide.value.slideTo(1);
}

      // 아이콘변경을 위한 문자열저장
      const slideState = ref('pause');
      // 버튼 아이콘을 클릭할때마다 실행
      const controlSlide = () => {
        // 상태파악후 start/ pause 로 아이콘모양변경
        if (slide.value.autoplay.running == true) {
          //만약에 slider의 running  == true
          slide.value.autoplay.stop();
          //구글 아이콘을 변경시키기 위한 글자
          slideState.value = 'play_arrow';
        } else {
          slide.value.autoplay.start();
          slideState.value = 'pause';
        }
      }

      // 현재 1400보다 크면 true, 작으면 false
      const resW = ref(true);

      onMounted(() => {
        //resW 체크 메서드
        const checkWin = () => {
          // 윈도우너비체크
          let w = window.innerWidth;
          if (w <= 1400) {
            resW.value = false;
          } else {
            resW.value = true;
          }
          // console.log(w)
          // console.log(resW.value)
        }

        // 윈도우에 resize 이벤트를 연결
        window.addEventListener('resize', checkWin);
        // $(window).on('resize', function(){})
        // $(window).resize(function(){})

        // 최초1회실행
        checkWin();
      })


      return {
        modules: [
          Autoplay,
          EffectFade,
          Pagination
        ],
        //swiper를 template에 사용햇음으로 전달해줌.
        visualSlide,
        controlSlide,
        slideState,
        visualData,
        resW
      }
    }
  }
</script>



<style>
  /* ===visual=== */
  .visual {
    position: relative;
    display: block;
    height: 477px;
  }


  .sw-visual {
    width: 100%;
    height: 100%;
  }

  .sw-visual a {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .vs-1 {
    background: url('@/assets/images/banner_1_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .vs-2 {
    background: url('@/assets/images/banner_2_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }


  .vs-3 {
    background: url('@/assets/images/banner_4_20200915_0.jpg') no-repeat center;
    background-size: cover;
  }

  .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    display: block;
    z-index: 9;
  }


  .sw-visual-control .sw-visual-pgnt {
    float: left;
  }

  .sw-visual-pgnt .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    top: 10px;
    background-color: #fff;
    opacity: 0.5;
    margin-right: 10px;
  }

  .sw-visual-pgnt .swiper-pagination-bullet-active {
    opacity: 1;
    /* 이건 액티브됏을때 진하게보이겟다! */
  }



  .sw-visual-bt {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 120%;
    top: -5px;
    background: transparent;
    background: url('@/assets/images/img_banner_stop.png') no-repeat center;
    cursor: pointer;
    border: 0;
    float: left;
    color: #fff;
    font-family: 'Material Icons';
    font-size: 10px;
  }

  .sw-visual-bt-play {
    background: url('@/assets/images/img_banner_play.png') no-repeat center;
    /* background: url('@/assets/images/img_banner_play.png') no-repeat center; */
    /* 클릭을하면 플레이로 바뀌게!! */
  }

  /* 보통 html페이지를 만들때 섹션내에서 내용을 자리잡게하기때문에, 각 영역이 기준대비 움직이는게 많다.
그렇기에 position:relative를 각 영역이 내용물의 기준점이 된다.*/

  /* visual PC 버젼 */
  /* visual 반응형 버젼 */
  /* 비율 = 원하는값.기준값 (vw : viewport width) */

  @media all and (max-width: 1400px) {

    /* and 앞뒤로띄어쓰기 무조건해줘야함 */
    .visual {
      height: 45vw;
    }
  }
</style>