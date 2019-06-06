<template>
  <div class="dh-iframe__wrapper">
    <div v-if="loading" class="dh-iframe__loading">
      <div class="dh-iframe__loading-loading">
        <img src="/images/loading.svg" alt="iFrame Loading">
        <div class="dh-iframe__loading-title">Loading...</div>
      </div>
      <div class="dh-iframe__loading-text">{{ttl}}</div>
    </div>
    <iframe
      :class="loading ? 'dh-iframe__iframe-hide' : claz"
      tab-index="0"
      :title="ttl"
      :src="source"
      :height="h"
      :width="w"
      allowfullscreen
      scrolling="no"
      @load="loadCompleted"
      >
        Sorry your browser does not support iframes.
      </iframe>
  </div>
</template>

<script>
export default {
  name: 'DOTIFrame',
  props: ['title', 'src', 'clazz', 'height', 'width'],
  data: function() {
    return  {
      ttl: this.title,
      source: this.src,
      claz: this.clazz,
      h: this.height,
      w: this.width,
      loading: false
    }
  },
  created: function() {
      this.loading = true
  },
  methods: {
    loadCompleted: function() {
      this.loading = false;
    }
  }
}
</script>
