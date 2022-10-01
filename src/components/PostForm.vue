<template>
 <div class="card   elevation-3 mx-4 my-5">
<div class="card-header text-center">
  <span>Create a Post</span>
</div>
            <div class="card-body form-floating">
      <form @submit.prevent="handleSubmit()">
        <div class="form-floating my-1">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="imgUrl"
            v-model="editable.imgUrl"
          />
          <label for="floatingPassword">Share an Image!</label>
        </div>
        <div class="form-floating mt-2">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="editable.body"
          ></textarea>
          <label for="floatingTextarea2">Comment</label>
        </div>
        <div>
          <button class="btn btn-warning">cancel</button>
          <button type="submit" class="btn btn-primary">submit</button>
        </div>
      </form>
            </div>
          </div>
</template>

<script>
import { ref } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
       async handleSubmit(){
        try {
            await postsService.createPost(editable.value)
          } catch (error) {
            Pop.error(error, '[handleSubmit]')
          }
       
        }
    };
  },
};
</script>

<style lang="scss" scoped></style>

