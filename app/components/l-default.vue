<!-- TODO - This component is supposed to be functional -->
<template>
  <div :class="b()">
    <c-header :state="headerState"/>
    <div :class="b('content')">
      <div :class="b('inner')">
        <slot></slot>
      </div>
    </div>
    <c-footer/>
  </div>
</template>

<script>
  import cHeader from '@/components/c-header';
  import cFooter from '@/components/c-footer';

  export default {
    name: 'l-default',
    components: {
      cHeader,
      cFooter
    },
    // mixins: [],

    // props: {},
    data() {
      return {
        lastKnownScrollPosition: 0,
        ticking: false,
        headerState: 'full',
      };
    },

    // computed: {},
    // watch: {},

    // beforeCreate() {},
    created() {
      window.addEventListener('resize', this.setContentPosition);
      window.addEventListener('scroll', this.setHeaderState);
    },
    // beforeMount() {},
    mounted() {
      this.setContentPosition();
    },
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    destroyed() {
      window.removeEventListener('resize', this.setContentPosition);
      window.removeEventListener('scroll', this.setHeaderState);
    },

    methods: {
      setContentPosition() {
        const height = document.getElementsByClassName('c-header')[0].offsetHeight;

        document.getElementsByClassName('l-default__content')[0].style.marginTop = `${height}px`;
      },
      setHeaderState() {
        this.lastKnownScrollPosition = window.scrollY ? window.scrollY : window.pageYOffset;

        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.headerState = this.lastKnownScrollPosition > 0 ? 'reduced' : 'full';
            this.ticking = false;
          });

          this.ticking = true;
        }
      }
    },
    // render() {},
  };
</script>

<style lang="scss">

  .l-default {
    display: flex;
    flex-direction: column;
    height: 100vh;

    &__content {
      background: $color-grayscale--600;
      flex: 1 0 auto;
      min-height: 1px; // Fixes a content shifting issue with IE11 if a child element has hover
    }

    &__inner {
      background: $color-grayscale--1000;
      box-shadow: 0 4px 10px 1px rgba($color-grayscale--400, 0.3);
      margin: $spacing--20 auto;
      max-width: #{map-get($grid-breakpoints, xl) - 20px};

      @include media(sm) {
        margin: $spacing--20 $spacing--10;
      }

      @include media(xl) {
        margin: $spacing--20 auto;
      }
    }
  }

  .s-layout {
    max-width: initial;
    margin: initial;
  }
</style>
