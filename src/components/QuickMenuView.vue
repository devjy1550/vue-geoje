<template>
     <!-- quick menu -->
    <section class="quick-menu">
      <div class="inner">
        <ul class="qm-list clearfix">
          <li><a href=""><img :src="require('@/assets/images/img_icon01.png')" alt="">청년정책검색</a></li>
          <li><a href=""><img :src="require('@/assets/images/img_icon02.png')" alt="">청년뉴스</a></li>
          <li><a href=""><img :src="require('@/assets/images/img_icon03.png')" alt="">공간 예약</a></li>
          <li><a href=""><img :src="require('@/assets/images/img_icon04_new.png')" alt="">구인·구직등록</a></li>
          <li><a href=""><img :src="require('@/assets/images/img_icon05_new.png')" alt="">청년다락</a></li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
 setup (){
    return {
      
    }
  }
}
</script>

<style>

.quick-menu {
  position: relative;
  display: block;
  background-color: #f2f4f7;
  padding: 15px 0;
}

.quick-menu .inner {
  position: relative;
  display: block;
}

.qm-list {
  position: relative;
  display: block;
}

.qm-list li {
  position: relative;
  display: block;
  width: 20%;
  float: left;
  border-right: 1px solid #d9dbde;
}

.qm-list li:last-child {
  border-right: 0px;
}

.qm-list li a {
  position: relative;
  display: block;
  line-height: 85px;
  text-align: center;
  font-size: 17px;
  color: #333;
  font-weight: 500;
  transition: transform 0.3s ease;
  white-space: nowrap;
}

.qm-list li a>img {
  width: auto;
  height: 58px;
  /* mix-blend-mode: multiply; 배경을 없애주는 css기능 */
  margin-right: 20px;
}

.qm-list li a:hover {
  transform: translateX(-5%);
}


/* quick menu pc */
/* 퀵메뉴 반응형 */
@media all and (max-width:990px) {
  .quick-menu {
    padding: 0;
  }


  .qm-list li:nth-child(1),
  .qm-list li:nth-child(2),
  .qm-list li:nth-child(3) {
    width: calc(100% / 3);
    border-bottom: 1px solid #d9dbde;
  }

  .qm-list li:nth-child(4),
  .qm-list li:nth-child(5) {
    width: 50%;
  }
}

@media all and (max-width:760px) {
  .qm-list li a {
    line-height: 60px;
    font-size: 16px;
  }

  .qm-list li a img {
    height: 35px;
  }
}

@media all and (max-width:640px) {
  .qm-list li {
    width: 50% !important;
    border-bottom: 1px solid #d9dbde;
  }

  .qm-list li:last-child {
    border-bottom: none;
  }
}
</style>