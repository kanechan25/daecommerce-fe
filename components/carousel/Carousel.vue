<template>
  <div class="w-full px-16 mt-4">
    <VueSlickCarousel v-bind="settings" class="h-[200px] cursor-pointer">
      <div class="h-[200px] w-full bg-green"></div>
      <div class="h-[200px] w-full bg-red"></div>
      <div class="h-[200px] w-full bg-grey_dark"></div>
      <div class="h-[200px] w-full bg-blue"></div>
      <div class="h-[200px] w-full bg-gold"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        responsive: []
      }
    }
  }
}
</script>
<style>
button.slick-prev:before,
button.slick-next:before {
  background: #51bafc !important;
  border-radius: 50%;
  font-size: 30px;
}
button.slick-next {
  right: -25px;
}
button.slick-prev {
  left: -35px;
}
</style>
