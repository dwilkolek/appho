<template>
  <q-page padding>
    <q-toolbar-title>Rod finder</q-toolbar-title>
    <div class="q-pa-md">
      <q-form
        padding
        @submit="onSubmit"
        class="q-gutter-md"
      >

        <q-input
          filled
          v-model.number="sca"
          type="number"
          label="Cross-sectional area"
          step="0.001"
          :rules="[
            val => (val || val === 0) || 'Please type something',
          ]"
        />

        <q-btn
          padding
          label="Find"
          type="submit"
          color="primary"
        />
        <q-space />
        <q-separator />
      </q-form>

    </div>
    <div class="row">
      <div class="col-xs-12">
        <q-table
          class="q-ma-md"
          :title="`Results for ${lastSca}`"
          :data="data"
          :columns="columns"
          row-key="diameter"
          hide-bottom
          :pagination.sync="pagination"
        />
      </div>
    </div>
  </q-page>
</template>
<script>

import Service from '../services/RodFinderService.js';

export default {
  name: 'RoofPressureCoefficientsIndex',
  data() {
    return {
      sca: null,
      data: [],
      lastSca: null,
      pagination: {
        rowsPerPage: 30, // current rows per page being displayed
      },
      columns: [
        {
          name: 'Diameter',
          required: true,
          label: 'Diameter',
          field: row => row.diameter,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Cross-Sectional Area',
          required: true,
          label: 'Cross-Sectional Area',
          field: row => row.crossSectionalArea,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Count',
          required: true,
          label: 'Count',
          field: row => row.count,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.data = Service.getResults(this.sca);
      this.lastSca = this.sca;
    },

  },
};
</script>
