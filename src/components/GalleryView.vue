<template>
  <!-- gallery -->
  <section class="gallery">
    <div class="inner clearfix">
      <div class="gallery-activity">
        <h3>활동갤러리</h3>
        <a href="#" class="gallery-more">전체보기</a>
        <ul class="gallery-list">
          <li v-for="(item, index) in galleryData" :key="index">
            <a :href="item.link"><span class="gl-img" :style="{
            backgroundImage:`url(${item.imgurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}" :data-bg-mb="item.mbimgurl" :data-bg="item.imgurl">
              </span>
            </a>
            <p class="gl-content">
              <span class="glc-title">{{item.title}}</span>
              <span class="glc-date">{{item.date}}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="gallery-video">
        <h3>동영상 갤러리</h3>
        <a href="#" class="gallery-more">전체보기</a>
        <div class="gallery-vid">
          <iframe width="100%" height="100%" :src="movieData.movie_url"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    computed,
  } from 'vue'
  import {
    useStore
  } from 'vuex';



  export default {
    setup() {
      const store = useStore();
      // getters의 galleryData computed로 받아옴
      const galleryData = computed(() => store.getters.galleryData);

      const movieData = computed(() => store.getters.movieData);
      return {
        galleryData,
        movieData
      }
    }
  }
</script>

<style scoped>
  /* 갤러리영역 */
  .gallery {
    position: relative;
    display: block;
    background: url('@/assets/images/img_bottombg.jpg') no-repeat center center;
    background-size: cover;
    padding: 90px 0;
  }

  .gallery h3 {
    position: relative;
    display: block;
    font-size: 22px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 25px;
  }

  .gallery-more {
    position: absolute;
    top: 5px;
    right: 0;
    display: block;
    color: #fff;
    font-size: 15px;
    padding-left: 18px;
  }

  .gallery-more::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 12px;
    display: block;
    width: 11px;
    height: 2px;
    background-color: azure;
  }

  .gallery-more::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 8px;
    display: block;
    width: 3px;
    height: 10px;
    background-color: azure;
  }

  .gallery-activity {
    display: block;
    position: relative;
    width: 67%;
    /* height: 415px; */
    float: left;
  }

  .gallery-list {
    position: relative;
    display: block;
  }

  .gallery-list li {
    position: relative;
    display: block;
    float: left;
    width: 32%;
    margin-right: 2%;
  }

  .gallery-list li:last-child {
    margin-right: 0;
  }

  .gallery-list li a {
    position: relative;
    display: block;
    background-color: #000;
    transition: all 0.5s;
  }

  .gallery-list li a:hover {
    box-shadow: 15px 15px 34px rgba(0, 0, 0, 0.28);
  }

  .gallery-list li a:hover .gl-img {
    opacity: 0.75;
  }

  /* 관리자가 새로운 게시물을 업로드할때,
이미지
타이틀
날짜 */
  .gl-img {
    position: relative;
    display: block;
    width: 100%;
    height: 195px;
    transition: all 0.5s;
  }


  .gl-img1 {
    background: url('@/assets/images/3월\ 인문학\ 특강\ [우리\ 삶에\ 철학이\ 필요한\ 이유].jpg') no-repeat center;
    background-size: cover;
  }

  .gl-img2 {
    background: url('@/assets/images/tmb_data_file_52_20211214112755_0.jpg') no-repeat center;
    background-size: cover;
  }

  .gl-img3 {
    background: url('@/assets/images/tmb_data_file_53_20211214112958_0.jpg') no-repeat center;
    background-size: cover;
  }

  .gl-content {
    position: relative;
    display: block;
    background-color: #fff;
    padding: 20px 40px;
    text-align: center;
  }

  .glc-title {
    position: relative;
    display: block;
    font-size: 16px;
    color: #444;
    font-weight: 400;
  }

  .glc-date {
    position: relative;
    display: block;
    font-size: 15px;
    color: #5f5f15;
    margin-top: 20px;
  }

  .gallery-video {
    display: block;
    position: relative;
    width: 29%;
    /* height: 415px; */
    float: right;
  }

  .gallery-vid {
    position: relative;
    display: block;
    width: 100%;
    height: 327px;
    background-color: #282828;
  }

  /* 갤러리 pc 레이아웃 */
  /* 갤러리 반응형 레이아웃 */
  @media all and (max-width:1400px) {
    .gallery {
      padding: 6.42vw 0;
    }

    .gallery .inner {
      width: 96%;
    }

    .gl-content {
      position: relative;
      display: block;
      background-color: #fff;
      padding: 30px 2.85vw;
      text-align: center;
    }
  }

  @media all and (max-width:1100px) {
    .glc-title {
      font-size: 15px;
    }
  }

  @media all and (max-width:1080px) {
    .gallery-activity {
      width: 100%;
      margin-bottom: 20px;
    }

    .gallery-video {
      width: 100%;
    }

    .gallery-vid {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 50px;
    }
  }

  @media all and (max-width:660px) {
    .gallry-list li {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
</style>