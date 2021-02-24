<template>
  <div class="container">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <h1 class="mt-3">Total Price = {{ sendTotal }}</h1>
      <b-row align-h="start">
        <b-col cols="auto"><h3>Product list</h3></b-col>
      </b-row>
    </b-container>
    <b-table
      sticky-header
      :items="sendSelect"
      :fields="fields"
      head-variant="light"
      outlined
    >
    </b-table>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-h="end">
        <b-col cols="auto">
          <b-button variant="info" @click="clear">Clear</b-button>
        </b-col>
        <b-col cols="auto">
          <b-button variant="success" @click="$bvModal.show('bv-modal-example')"
            >Payment</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title><strong>Congratulations</strong></template>
      <div class="d-block text-center">
        <p class="lead">Payment completed!</p>
      </div>
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row align-h="center">
          <b-button
            class="col-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
            >Close</b-button
          >
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: {
    product: Array,
    totalprice: Number
  },
  data() {
    return {
      fields: ["List", "Number", "Price"]
    };
  },
  computed: {
    ...mapGetters(["sendSelect", "sendTotal"])
  },
  methods: {
    ...mapMutations(["clear"])
  }
};
</script>
