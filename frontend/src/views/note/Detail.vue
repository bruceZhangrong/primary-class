<template>
  <div class="note-detail-box">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      Back
    </mu-appbar>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('updateBottomBar', false)
  }
}
</script>
