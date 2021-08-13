<template>
  <h1>New Note</h1>
  <label for="title">Title</label>
  <input id="title" name="title" type="text" v-model="title" />
  <Tiptap v-model="content" />
  <button @click="save">Save</button>
</template>

<script>
import Tiptap from "@/components/Tiptap.vue";
import { addNote } from "@/store/index";
import { nanoid } from "nanoid";

export default {
  components: {
    Tiptap,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async save() {
      /*const stream = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const note = await stream.json();
      */
      addNote({
        id: nanoid(),
        title: this.title,
        content: this.content,
        date: new Date(),
      });

      console.log(new Date());

      this.$router.push({ name: "Home" });
    },
  },
};
</script>
