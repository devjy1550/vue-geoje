import {
  createStore
} from "vuex"
//vuex는 데이터를 보관하고,  업데이트 한 이후에,   컴포넌트에서 필요한 데이터를 참조함.
// 공통 데이터 저장소(state)

import axios from 'axios'

export default createStore({
  // 데이터
  state: {
    menuDataArr: [],
    visualDataArr : [],
    galleryDataArr : [],
    movieData : {},
    newsDataArr : [],
    infoDataArr : [],
    bannerDataArr : [],
  },

  // 외부 json 및 서버연동
  // axios 호출시점
  // mutation을 commit으로 호출하면서, 데이터를 전달함
  actions: {

    //menu data 가져오기
    fetchGetMenu({
      commit
    }) {
      axios.get('./data/menu.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_MENU_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetVisual({
      commit
    }) {
      axios.get('./data/visual.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_VISUAL_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetGallery({
      commit
    }) {
      axios.get('./data/gallery.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_GALLERY_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetMovie({
      commit
    }) {
      axios.get('./data/movie.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_MOVIE_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetNews({
      commit
    }) {
      axios.get('./data/news.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_NEWS_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetInfo({
      commit
    }) {
      axios.get('./data/info.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_INFO_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
    fetchGetBanner({
      commit
    }) {
      axios.get('./data/banner.json')
        .then(res => {
          // console.log(res.data);
          commit('UPDATE_BANNER_DATA', res.data);
        })
        .catch(err => console.log(err))
    },
  },

  // actions로 부터 데이터를 전송받고, state를 업데이트함.
  mutations: {
    UPDATE_MENU_DATA(state, payload) {
      state.menuDataArr = payload
    },
    UPDATE_VISUAL_DATA(state, payload) {
      state.visualDataArr = payload
    },
    UPDATE_GALLERY_DATA(state, payload) {
      state.galleryDataArr = payload
    },
    UPDATE_MOVIE_DATA(state, payload) {
      state.movieData = payload
    },
    UPDATE_NEWS_DATA(state, payload) {
      state.newsDataArr = payload
    },
    UPDATE_INFO_DATA(state, payload) {
      state.infoDataArr = payload
    },
    UPDATE_BANNER_DATA(state, payload) {
      state.bannerDataArr = payload
    }
  },

  // 외부 컴포넌트에서 state를 참조할때 활용
  // state가 바뀌면 즉시 반영을 위해서 외부 컴포넌트는 computed로 받는게 일반적임
  getters: {
    menuData(state) {
      return state.menuDataArr;
    },
    visualData(state) {
      return state.visualDataArr;
    },
    galleryData(state) {
      return state.galleryDataArr;
    },
    movieData(state) {
      return state.movieData;
    },
    newsData(state) {
      return state.newsDataArr;
    },
    infoData(state) {
      return state.infoDataArr;
    },
    bannerData(state) {
      return state.bannerDataArr;
    }
  }
});