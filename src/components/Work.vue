<template>
  <div
    class="work-container visible"
  >
    <div class="columns is-variable">
      <div class="column is-half">
        <a :href="url">
          <figure class="image is-4by3">
            <img :src="image" class="has-background-white" alt="Placeholder image">
          </figure>
        </a>
      </div>
      <div class="column is-half">
        <p class="title is-2">
          {{ title }}
        </p>
        <div class="content">
          <slot />
        </div>
        <div class="tags">
          <span v-for="tag in tags" :key="tag" type="tag is-info">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* .work-container{
  opacity: 0;
  animation-name:fade-in;
  animation-duration:1s;
  animation-timing-function: ease-out;
  animation-delay:0;
  animation-iteration-count:1;
  animation-direction:normal;
  animation-fill-mode: forwards;
} */

.columns {
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}

img {
  border-radius: 20px;
  border: 1px rgb(219, 219, 219) solid;
  object-fit: cover;
}
</style>
