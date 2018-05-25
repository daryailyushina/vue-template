<template>
  <div :class="b()">
    <v-content class="application theme--light" data-app>
      <v-data-table
        v-model="selected"
        v-bind="gridOptions"
        :headers="localHeaders"
        :items="localItems"
        :select-all="isSelectable"
        :class="b('data-table')"
      >
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click="props.selected = !props.selected && isSelectable">
            <td v-if="isSelectable">
              <v-checkbox
                v-model="props.selected"
                primary
                hide-details
              />
            </td>
            <td v-for="(item) in gridOptions.headers" :key="item.value">
              <v-edit-dialog
                v-if="item.value !== 'date'"
                :return-value.sync="props.item[item.value]"
                lazy
              > {{ props.item[item.value] }}
                <v-text-field
                  slot="input"
                  v-model="props.item[item.value]"
                  :rules="item.rules"
                  :label="editLabel"
                  single-line
                  counter
                  @keyup.enter="onEditedItem"
                />
              </v-edit-dialog>
              <v-layout v-if="item.value === 'date'" row justify-center>
                <v-dialog
                  ref="dialog"
                  v-model="props.dateModal"
                  max-width="290"
                >
                  <v-text-field
                    slot="activator"
                    v-model="props.item.date"
                    label="Picker in dialog"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker v-model="props.item.date">
                    <v-spacer/>
                    <v-btn flat color="primary" @click="props.dateModal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="onDatePickerSave(props.index, props.item.date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-layout>
              {{ props.item.date }}
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
  import 'material-design-icons-iconfont/dist/material-design-icons.css';
  import 'vuetify/dist/vuetify.min.css';
  import * as VGrid from 'vuetify/es5/components/VGrid';
  import * as VDataTable from 'vuetify/es5/components/VDataTable';
  import * as VDatePicker from 'vuetify/es5/components/VDatePicker';
  import { VCheckbox, VAlert, VTextField, VDialog, VBtn } from 'vuetify';

  export default {
    name: 'c-data-grid',
    components: {
      ...VDataTable,
      ...VGrid,
      ...VDatePicker,
      VCheckbox,
      VAlert,
      VTextField,
      VBtn,
      VDialog,
    },
    inheritAttrs: false,
    // mixins: [],

    props: {
      /**
       * Defines the options of the vuetify data-table. See https://vuetifyjs.com/en/components/data-tables for
       * further details.
       */
      gridOptions: {
        type: Object,
        required: true,
      },

      /**
       * Defines the items which should be rendered in the grid. The definition of the columns has to be set in the
       * headers object in the gridOptions.
       */
      items: {
        type: Array,
        required: true,
      },

      /**
       * Defines the placeholder for the inline edit input field, if the text got removed.
       */
      editLabel: {
        type: String,
        default: 'Edit',
      },

      /**
       * Defines if the items are selectable.
       */
      isSelectable: {
        type: Boolean,
        default: false,
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
       * Adds a default class to all headers for styling purposes.
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
      /**
       * Called when an item has been edited and saved.
       */
      onEditedItem() {
        /**
         * Emits updateItems event after an item got edited and confirmed (enter key).
         *
         * @event updateItems
         * @type {Array}
         */
        this.$emit('updateItems', this.localItems);
      },

      /**
       * Called when a datepicker has been saved.
       *
       * @param {Number} index Index for ref
       * @param {String} value Value to store
       */
      onDatePickerSave(index, value) {
        this.$refs.dialog[index].save(value);
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
      transition: none; // This is a test to disable the animation on the sorting icon.
    }
    /* stylelint-enable */
  }

</style>
