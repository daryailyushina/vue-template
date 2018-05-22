
```vue
<template>
  <c-data-grid :gridOptions="gridOptions"/>
</template>

<script>
  export default {
    data() {
      return {
        gridOptions: {
          max25chars: (v) => v.length <= 25 || 'Input too long!',
          search: '',
          headers: [
            {
              text: 'Name',
              align: 'left',
              value: 'name',
            }, {
              text: 'Email',
              value: 'email',
            }
          ],
          items: [
            {
              name: 'Claudio Schäpper',
              email: 'claudio.schäpper@cec.valantic.com',
            }, {
              name: 'Mathias Ober',
              email: 'mathias.ober@cec.valantic.com',
            }, {
              name: 'Patric Eberle',
              email: 'patric.eberle@cec.valantic.com',
            },
          ],
        },
      };
    },
  };
</script>
```
