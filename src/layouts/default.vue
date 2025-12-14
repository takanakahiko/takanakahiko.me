<template>
  <div>
    <nav class="navbar is-primary is-transparent is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="navbar-item logo">
            <img src="~assets/animated-icon.gif">
            <b class>&nbsp;takanakahiko</b>
          </a>
          <div
            class="navbar-burger burger"
            :class="{ 'is-active': menuActive }"
            data-target="nav"
            @click="menuToggle()"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="nav" class="navbar-menu" :class="{ 'is-active': menuActive }">
          <div class="navbar-end">
            <nuxt-link
              v-for="(item, key) of items"
              :key="key"
              class="navbar-item"
              :to="item.to"
              exact-active-class="is-active"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <slot />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      menuActive: false,
      items: [
        {
          title: 'Top',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'About',
          icon: 'pencil',
          to: { name: 'about' }
        },
        {
          title: 'Works',
          icon: 'check',
          to: { name: 'works' }
        }
      ]
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  },
  watch: {
    $route () {
      this.menuActive = false
    }
  },
  methods: {
    menuToggle () {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style lang="scss">
.navbar-item .is-active {
  color: black;
}
</style>
