<template>
  <div :class="b()">

    <e-heading tag-name="h1" font-weight="bold">Schwan Cosmetics - Vue Test</e-heading>

    <e-label name="Your name" position="top">
      <e-input v-model="form.name" name="name" placeholder="..." />
    </e-label>

    <e-label name="Comment" position="top">
      <e-textarea v-model="form.comment"
                  :rows="5"
                  name="comment"
                  placeholder="Insert comment"
                  state="info"
                  notification="You can add a specific comment here.<br>Please do so."
      />
    </e-label>

    <pre>{{ form }}</pre>

  </div>
</template>

<script>

  export default {
    name: 'schwan-cosmetics-test',
    // components: {},
    data() {
      return {
        form: {
          name: null,
          comment: null,
        },
      };
    },
  };
</script>

<style lang="scss">
  .schwan-cosmetics-test {
    padding: $spacing--50;
    max-width: 50%;

    .e-heading,
    .e-textarea {
      margin-bottom: $spacing--30;
    }
  }
</style>
