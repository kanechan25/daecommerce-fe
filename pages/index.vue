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
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/vueperslides/dist/vueperslides.css"
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
