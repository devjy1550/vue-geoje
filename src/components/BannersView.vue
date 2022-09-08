<template>
  <!-- banners -->
  <section class="banners">
    <div class="inner clearfix">
      <div class="banners-left">
        <h2>배너모음</h2>
        <div class="banner-control clearfix">
          <button class="sw-banner-prev">
            <i class="fas fa-angle-left"></i>
          </button>
          <button class="sw-banner-pause" >
            <span class="material-icons"  @click="controlSlide" >
              <!-- play_arrow  -->
              {{slideState}}
            </span>
          </button>
          <button class="sw-banner-next">
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div class="banners-right">
        <Swiper :modules="modules" :slides-per-view="3" :space-between="20" :autoplay="{
              delay: 1000,
              disableOnInteraction: false
          }" :loop="true" :breakpoints="{
            '1400': {
              slidesPerView: 6,
            },
            '1260': {
              slidesPerView: 5,
            },
            '1000': {
              slidesPerView: 4,
            },
            '860': {
              slidesPerView: 3,
            },
          }" :navigation="{
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next'
          }" @swiper="swBanner" class="sw-banner">

          <SwiperSlide class="swiper-slide"><a href="#" class="banner-01"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-02"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-03"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-04"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-05"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-06"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-07"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-08"></a></SwiperSlide>
          <SwiperSlide class="swiper-slide"><a href="#" class="banner-09"></a></SwiperSlide>

        </Swiper>

        <!-- <div class="swiper-container sw-banner">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><a href="#" class="banner-01"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-02"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-03"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-04"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-05"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-06"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-07"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-08"></a></div>
              <div class="swiper-slide"><a href="#" class="banner-09"></a></div>
            </div>
          </div> -->
      </div>

    </div>
  </section>
</template>

<script>
  import {
    ref
  } from 'vue'
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue'

  import 'swiper/css'

  import {
    Autoplay,
    Navigation
  } from 'swiper'

  import 'swiper/css/navigation'


  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const slide = ref(null);
      const swBanner = (swiper) => {
        // console.log(swiper);
        slide.value = swiper;
      }

      // Swiper의 start, stop을 제어
      const slideState = ref('pause');
      const controlSlide = () => {

        if (slide.value.autoplay.running == true) {
        //만약에 slider의 running  == true
          slide.value.autoplay.stop();
          //구글 아이콘을 변경시키기 위한 글자
          slideState.value = 'play_arrow';
        } else {
          slide.value.autoplay.start();
          slideState.value = 'pause';
        }
        // console.log(slide.value.autoplay);slide.value.autoplay.running = true
        // slide.value.autoplay.running = false;
      }
      return {
        modules: [
          Autoplay,
          Navigation
        ],
        swBanner,
        controlSlide,
        slideState
      }
    }
  }
</script>

<style scoped>
  /* 배너 */
  .banners {
    position: relative;
    display: block;
    padding: 25px 0;
  }

  .banner .inner {
    position: relative;
    display: block;
  }

  .banners-left {
    position: relative;
    display: block;
    float: left;
    width: 170px;
    margin-top: 13px;
  }

  .banners-left h2 {
    position: relative;
    display: block;
    font-size: 20px;
    columns: #3d3d3d;
    font-weight: 600;
  }

  .banner-control {
    position: absolute;
    top: 3px;
    right: 0;
    display: block;
    width: 73px;
    height: 25px;
    border: 1px solid #ececec;
  }




  .sw-banner-prev {
    position: relative;
    display: block;
    width: 23px;
    height: 23px;
    background-color: #fff;
    border: 0;
    border-right: 1px solid #ececec;
    text-align: center;
    color: #979797;
    line-height: 23px;
    float: left;
    cursor: pointer;
  }


  .sw-banner-pause {
    position: relative;
    display: block;
    width: 23px;
    height: 23px;
    background-color: #fff;
    border: 0;
    text-align: center;
    line-height: 23px;
    float: left;
    cursor: pointer;
  }

  .sw-banner-pause span {
    display: block;
    color: #979797;
    font-size: 16px;
  }

  .sw-banner-next {
    position: relative;
    display: block;
    width: 23px;
    height: 23px;
    text-align: center;
    background-color: #fff;
    border: 0;
    border-left: 1px solid #ececec;
    color: #979797;
    line-height: 23px;
    float: left;
    cursor: pointer;
  }

  .banners-right {
    position: relative;
    display: block;
    float: right;
    width: 83.6%;
  }

  .sw-banner a {
    position: relative;
    display: block;
    height: 57px;
    border: 1px solid #e9e9e9;
  }

  .banner-01 {
    background: url('@/assets/images/img_banner01.gif') no-repeat center;
    background-size: cover;
  }

  .banner-02 {
    background: url('@/assets/images/img_banner02.gif') no-repeat center;
    background-size: cover;
  }

  .banner-03 {
    background: url('@/assets/images/img_banner03.gif') no-repeat center;
    background-size: cover;
  }

  .banner-04 {
    background: url('@/assets/images/img_banner04.gif') no-repeat center;
    background-size: cover;
  }

  .banner-05 {
    background: url('@/assets/images/img_banner05.gif') no-repeat center;
    background-size: cover;
  }

  .banner-06 {
    background: url('@/assets/images/img_banner06.gif') no-repeat center;
    background-size: cover;
  }

  .banner-07 {
    background: url('@/assets/images/img_banner07.gif') no-repeat center;
    background-size: cover;
  }

  .banner-08 {
    background: url('@/assets/images/img_banner08.gif') no-repeat center;
    background-size: cover;
  }

  .banner-09 {
    background: url('@/assets/images/img_banner09.gif') no-repeat center;
    background-size: cover;
  }

  /* 배너 pc 영역 */
  /* 배너 반응형 */
  @media all and (max-width:1400px) {
    .banner .inner {
      width: 97%;
    }
  }

  @media all and (max-width:1100px) {
    .banners-right {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>