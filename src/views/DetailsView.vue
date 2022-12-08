<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>
      {{post.title}}
      <p class="pre">{{post.body}}</p>
    </h3>
  </div>
</template>

<script setup>
import {getPost} from '../composables/getPost'
  const myProps = defineProps(['id'])
  const {post,error,load} = getPost(myProps.id)
  load()
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>