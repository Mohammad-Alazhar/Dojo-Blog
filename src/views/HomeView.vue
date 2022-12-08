
<template>
  <main>
    <h1>Home Page</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </main>
</template>

<script setup>
import PostList from "../components/PostList.vue"
import {getPosts} from "../composables/getPosts"

const {posts,error,load}= getPosts()

load()
</script>
