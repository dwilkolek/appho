<template>
  <q-page padding>
    <q-toolbar-title>Find roof pressure coefficients</q-toolbar-title>
    <div class="q-pa-md">
      <q-form
        padding
        @submit="onSubmit"
        class="q-gutter-md"
      >

        <q-input
          filled
          v-model.number="angle"
          type="number"
          label="Angle"
          step="0.001"
          :rules="[
            val => (val || val === 0) && val >= -45 || 'Please type something above -45',
            val => (val || val === 0) && val <= 75 || 'Please type something below or equal 75'
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
        <q-toolbar-title>
          {{lastSortedOutAngle
          ? `Last calculated angle: ${lastSortedOutAngle}&deg;` : "Nothing was calculated"}}
        </q-toolbar-title>
      </div>
    </div>
    <div class="
      row
      justify-between">

      <div class="col-xs-12 col-lg-6">
        <q-table
          class="q-ma-md"
          title="Wind angle: <b>90&deg;</b>"
          :data="data90"
          :columns="columns"
          row-key="letter"
          hide-bottom
        >
          <template v-slot:top="props">
            <q-toolbar-title>Wing angle 90&deg;</q-toolbar-title>
          </template>
        </q-table>
      </div>
      <div class="col-xs-12 col-lg-6">
        <q-table
          class="q-ma-md"
          title=""
          :data="data0"
          :columns="columns"
          row-key="letter"
          hide-bottom
        >
          <template v-slot:top="props">
            <q-toolbar-title>Wing angle 0&deg;</q-toolbar-title>
          </template>
        </q-table>
      </div>
    </div>

  </q-page>
</template>
<script>

import Service from '../services/PreasureCoefficientsService.js';

export default {
  name: 'RoofPressureCoefficientsIndex',
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 0, // 0 means all rows
      },
      angle: null,
      fullData: [],
      data0: [],
      data90: [],
      lastSortedOutAngle: null,
      columns: [
        {
          name: '',
          required: true,
          label: '',
          field: row => row.letter,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Cpe10',
          required: true,
          label: 'Cpe10',
          field: row => row.cpe10,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Cpe1',
          required: true,
          label: 'Cpe1',
          field: row => row.cpe10,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Cpe10+',
          required: true,
          label: 'Cpe10+',
          field: row => row.cpe10a,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
        {
          name: 'Cpe1+',
          required: true,
          label: 'Cpe1+',
          field: row => row.cpe1a,
          format: val => `${(!val && val !== 0) ? '' : val}`,
          sortable: true,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      function transformResultToData(result) {
        return Object.keys(result)
          .filter(key => key !== 'angle')
          .map((key) => {
            const ures = {};
            Object.assign(ures, result[key], { letter: key });
            return ures;
          });
      }
      this.lastSortedOutAngle = this.angle;
      this.data0 = transformResultToData(Service.getCoefficientsFor0(this.angle));
      this.data90 = transformResultToData(Service.getCoefficientsFor90(this.angle));
    },

  },
};
</script>
