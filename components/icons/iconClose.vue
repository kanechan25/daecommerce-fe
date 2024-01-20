<template>
  <svg
    v-if="iconColor && width && height"
    :style="{ cursor: 'pointer' }"
    @click="handleClick"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.75 1.25L1.25 14.75"
      :stroke="isHovered ? hoverColor : iconColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.75 14.75L1.25 1.25"
      :stroke="isHovered ? hoverColor : iconColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: "currentColor"
    },
    hoverColor: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: [String, Number],
      default: 16
    },
    height: {
      type: [String, Number],
      default: 16
    }
  },
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
}
</script>
<style scoped>
svg:hover path {
  stroke: red;
}
</style>
