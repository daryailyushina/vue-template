<template>
  <div :class="b()">
    <v-content class="application theme--light" data-app>
      <v-data-table
        v-model="selected"
        v-bind="gridOptions"
        :headers="localHeaders"
        :items="localItems"
        :select-all="gridOptions.isSelectable"
        :class="b('data-table')"
      >
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click="props.selected = !props.selected && gridOptions.isSelectable">
            <td v-if="gridOptions.isSelectable">
              <v-checkbox
                v-model="props.selected"
                primary
                hide-details
              />
            </td>
            <td v-for="(item) in gridOptions.headers" :key="item.value">
              <v-edit-dialog
                :return-value.sync="props.item[item.value]"
                lazy
              > {{ props.item[item.value] }}
                <v-text-field
                  slot="input"
                  v-model="props.item[item.value]"
                  :rules="gridOptions.rules"
                  :label="gridOptions.editLabel"
                  single-line
                  counter
                  @keyup.enter="onEditedItem"
                />
              </v-edit-dialog>
            </td>
          </tr>
        </template>
        <div slot="no-results">
          Your Search for "{{ gridOptions.search }}" found no results.
        </div>
      </v-data-table>
    </v-content>
  </div>
</template>

<script>
  import { VCheckbox, VAlert, VTextField } from 'vuetify';
  import * as VGrid from 'vuetify/es5/components/VGrid';
  import * as VDataTable from 'vuetify/es5/components/VDataTable';
  import 'material-design-icons-iconfont/dist/material-design-icons.css';
  import 'vuetify/dist/vuetify.min.css';

  export default {
    name: 'c-data-grid',
    components: {
      VCheckbox,
      VAlert,
      VTextField,
      ...VDataTable,
      ...VGrid,
    },
    inheritAttrs: false,
    // mixins: [],

    props: {
      gridOptions: {
        type: Object,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        selected: [],
      };
    },

    computed: {
      /**
       * Used for storing the model until it can be saved. This is as we don't want to manipulate the original
       * store object.
       *
       * @returns {Array}
       */
      localItems() {
        return this.items.map(x => Object.assign({}, x));
      },

      /**
       * Adds styling class to all headers.
       *
       * @returns {Array}
       */
      localHeaders() {
        return this.gridOptions.headers.map((object) => {
          let headerClass = this.b('header-field');
          const existingClass = object.class;

          if (object.class) {
            headerClass = `${existingClass} ${headerClass}`;
          }

          object.class = headerClass;

          return object;
        });
      }
    },
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
      onEditedItem() {
        this.$emit('updateItems', this.localItems);
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-data-grid {
    /* stylelint-disable */
    .datatable thead th.c-data-grid__header-field i {
      transition: none;
    }
    /* stylelint-enable */
  }

</style>
