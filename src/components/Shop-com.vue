<template>
  <div>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 17rem"
      class="mb-3"
    >
      <b-card-text> {{ tag }} ฿ </b-card-text>

      <div>
        <b-form-spinbutton
          id="sb-inline"
          v-model="num"
          min="1"
          max="100"
          inline
        ></b-form-spinbutton>
      </div>

      <div class="mt-3">
        <b-button
          id="show-btn"
          variant="success"
          @click="sendShop"
        >
          Buy</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    tag: Number
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    sendShop() {
      this.$emit("callbackshop",{
        List: this.title,
        Number: this.num,
        Price: this.tag*this.num
      });
      this.$bvModal.show("bv-modal-example");
    }
  }
};
</script>

<style></style>