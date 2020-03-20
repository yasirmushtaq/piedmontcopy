<template>
   <div> 
        <div>
            <i :class="post.icon"></i>
            <span>{{ post.title }}</span>
            <p>{{ post.content }}</p>
        </div>
   </div> 
</template>

<script>
export default {
    name: 'OurCommitment',
    props: {
        post: Object
    }
}
</script>

<style scoped>
  .main i {
    font-size: 42px;
    padding: 15px 35px;
    color: #6aa6d1;
  }
.main span {
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 8px;
  }
</style>