<template>
  <div>
    <MoreWrap />
    <MbWrap />
    <div class="wrap">
      <!-- header -->
      <Header />
      <!-- visual -->
      <Visual />
      <!-- quick menu -->
      <QuickMenu />
      <!-- community -->
      <Community />
      <!-- gallery -->
      <Gallery />
      <!-- banners -->
      <Banners />
      <!-- footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
  import MoreWrap from '@/components/MoreWrapView.vue'
  import MbWrap from '@/components/MbWrap.vue'
  import Header from '@/components/HeaderView.vue'
  import Visual from '@/components/VisualView.vue'
  import QuickMenu from '@/components/QuickMenuView.vue'
  import Community from '@/components/CommunityView.vue'
  import Gallery from '@/components/GalleryView.vue'
  import Banners from '@/components/BannersView.vue'
  import Footer from '@/components/FooterView.vue'

  import {
    useStore
  } from 'vuex'

  export default {
    name: 'App',
    components: {
      Header,
      Visual,
      QuickMenu,
      Community,
      Gallery,
      Banners,
      Footer,
      MoreWrap,
      MbWrap,
    },

    setup() {
      const store = useStore();
      store.dispatch('fetchGetMenu')
      store.dispatch('fetchGetVisual')
      store.dispatch('fetchGetGallery')
      store.dispatch('fetchGetMovie')
      store.dispatch('fetchGetNews')
      store.dispatch('fetchGetInfo')
      store.dispatch('fetchGetBanner')


      return {
        Header,
        Visual,
        QuickMenu,
        Community,
        Gallery,
        Banners,
        Footer,
        MoreWrap,
        MbWrap,
      }
    }
  }
</script>

<style>
  @charset 'utf-8';

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }



  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #f7f7f7;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }



  html {
    font-size: 16px;
  }

  body {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.6px;
    line-height: 1.6;
    font-family: 'Open Sans', GmarketSansMedium, GmarketSansLight, GmarketSansBold, '맑은 고딕', '돋움', Dotum, '굴림', Gulim, Sans-serif;
  }


  /* left,top 등등을 붙일때는 relative말고 그냥 absolute를써라. relative를써서 제대로출력될수도 있으나, 나중에 문제를 일으킬소지가 존재하기때문이다. */

  /* Common */

  .clearfix::after {
    content: '';
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1400px;
    min-width: 480px;
    /* 그냥 1400px을 주어도 가능하긴하지만 max-width 로 지정해줌으로써 반응형이 대한 대응이 가능해진다. */
    margin: 0 auto;
    /* 0은 위아래를 의미 auto는 좌우를 의미, 레이아웃(내용을 담고 있는 레이아웃)을 중앙에 배치하란뜻을 의미한다. */
  }



  /* container 또는 contents 라고 하는사람도 많음 */



  /* after의 의미는 <선택자>~~~~요기!!!</선택자>, 즉 선택자가 닫히기 바로전단계까지를 말한다.*/
</style>