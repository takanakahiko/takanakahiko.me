<template>
  <div class="timeline">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Present</span>
    </header>
    <div v-for="(content, i) in timelineContent" :key="i" class="timeline-item">
      <div class="timeline-marker" />
      <div
        class="timeline-content"
      >
        <p class="heading">
          {{ content.title }}
        </p>
        <p>{{ content.content }}</p>
        <p>-</p>
        <p>{{ content.role }}</p>
      </div>
    </div>
    <div class="timeline-header">
      <span class="tag is-medium is-primary">Birth :tada:</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timelineContent: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-header {
  width: 4em;
  min-width: 4em;
  max-width: 8em;
  word-wrap: normal;
  text-align: center;
  display: flex;
  justify-content: center;
}

.timeline-item {
  display: flex;
  position: relative;
  margin-left: 2em;
  padding-bottom: 2em;
}

.timeline-item::before {
  content: "";
  background-color: #dbdbdb;
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  left: -0.5px;
  top: 0;
}

.timeline-marker {
  position: absolute;
  background: #dbdbdb;
  border: 1px solid #dbdbdb;
  border-radius: 100%;
  content: "";
  display: block;
  height: 12px;
  width: 12px;
  left: 0;
  transform: translateX(-50%);
  top: 1.2rem;
}

.timeline-content {
  padding: 1em 0 0 2em;
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

.timeline-content .heading {
  font-weight: 600;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
