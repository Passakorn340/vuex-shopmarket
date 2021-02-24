<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <router-link to="/" class="container">
            <b-iconstack font-scale="2">
              <b-icon stacked icon="align-center" variant="white"></b-icon>
              <b-icon stacked icon="align-middle" variant="white"></b-icon>
            </b-iconstack>
            <router-link to="/" id="name">JesusShop</router-link>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div>
            <router-link to="/home">
              <b-button variant="outline-info" @click="sum">
                <b-icon icon="basket2-fill" aria-hidden="true"></b-icon> basket
              </b-button>
            </router-link>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["sum"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#name {
  color: #ffffff;
}
</style>
