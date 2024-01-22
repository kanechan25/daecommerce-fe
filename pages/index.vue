<template>
  <div>
    <VmCarousel />
    <VmSubheader />
    <VmProductsList />
  </div>
</template>

<script>
import VmProductsList from "@/components/products_list/ProductsListContainer"
import VmCarousel from "@/components/carousel/Carousel"
import VmSubheader from "@/components/subheader/Subheader"

export default {
  head() {
    return {
      script: [
        {
          src: "https://unpkg.com/vue",
          async: true,
          defer: true
        },
        {
          src: "https://unpkg.com/vueperslides",
          async: true,
          defer: true
        },
        {
          src: "https://cdn.jsdelivr.net/npm/vue-slick-carousel@1.0.6/dist/vue-slick-carousel.umd.min.js",
          async: true,
          defer: true
        },
        {
          src: "https://unpkg.com/vue-slick-carousel",
          async: true,
          defer: true
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/vueperslides/dist/vueperslides.css"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/vue-slick-carousel@1.0.6/dist/vue-slick-carousel-theme.min.css"
        }
      ]
    }
  },
  name: "index",
  components: {
    VmProductsList,
    VmCarousel,
    VmSubheader
  }
}
</script>
