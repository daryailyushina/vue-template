<template>
  <div :class="b()">
    <h1>Swiper example (c-swiper-gallery)</h1>
    <c-swiper-gallery :images="product.images"/>

  </div>
</template>

<script>
  import CSwiperGallery from '@/components/c-swiper-gallery';
  import { mapGetters } from 'vuex';

  export default {
    name: 'swiper',
    components: {
      CSwiperGallery,
    },
    computed: {
      ...mapGetters({
        product: 'product/product',
      }),
    }
  };
</script>

<style lang="scss">
  .swiper {
    padding: $spacing--30 $spacing--10;

    @include media(xs) {
      max-width: 1000px;
      padding: $spacing--30;
    }
  }
</style>

