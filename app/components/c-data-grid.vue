<template>
  <div :class="b()">
    <v-text-field
      v-model="gridOptions.search"
    />
    <v-data-table
      v-model="selected"
      v-bind="gridOptions"
      select-all
      item-key="name"
      @input="onClick"
    >
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            />
          </td>
          <td>
            <v-edit-dialog
              :return-value.sync="props.item.name"
              lazy
            > {{ props.item.name }}
              <v-text-field
                slot="input"
                v-model="props.item.name"
                :rules="[gridOptions.max25chars]"
                label="Edit"
                single-line
                counter
              />
            </v-edit-dialog>
          </td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
        </tr>
      </template>
      <div slot="no-results">
        Your Search for "{{ gridOptions.search }}" found no results.
      </div>
    </v-data-table>
  </div>
</template>

<script>
  import VCheckbox from 'vuetify/es5/components/VCheckbox';
  import VAlert from 'vuetify/es5/components/VAlert';
  import VTextField from 'vuetify/es5/components/VTextField';
  import { VDataTable, VEditDialog } from 'vuetify/es5/components/VDataTable';

  export default {
    name: 'c-data-grid',
    components: {
      VCheckbox,
      VAlert,
      VTextField,
      VDataTable,
      VEditDialog,
    },
    // mixins: [],

    props: {
      gridOptions: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        selected: [],
      };
    },

    // computed: {},
    // watch: {},

    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},

    methods: {
      onClick(value) {
        this.$emit('input', value);
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-data-grid {
  }

</style>
