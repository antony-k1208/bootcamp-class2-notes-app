<template>
  <template v-if="note">
    <p v-if="showSuccess">Der Eintrag wurde erfolgreich gespeichert.</p>
    <div class="note-entry">
      <h1>{{ note.title }} - {{ note.date }}</h1>
      <label for="title">Title</label>
      <input id="title" name="title" type="text" v-model="note.title" />
      <Tiptap v-model="note.content" />
      <button @click="save">Save</button>
    </div>

    <div class="note-answers">
      <template v-for="answer in note.answers" :key="answer.date">
        <h3>{{ answer.date }}</h3>
        <button @click="deleteAnswer(answer.date)">Delete</button>
        <Tiptap v-model="answer.content" class="note-answer" />
      </template>

      <button @click="addAnswer">Add new answer</button>
    </div>
  </template>
</template>

<script>
import Tiptap from "@/components/Tiptap.vue";
import { notes } from "@/store/index";

export default {
  components: {
    Tiptap,
  },
  data() {
    return {
      noteIndex: -1,
      note: null,
      showSuccess: false,
    };
  },
  created() {
    this.callServer();
  },
  methods: {
    save() {
      notes[this.noteIndex] = this.note;
      this.showSuccess = true;
    },
    async callServer() {
      /*const stream = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      const note = await stream.json();
      this.title = note.title;
      this.content = note.content;*/

      this.noteIndex = notes.findIndex(
        (currentNode) => currentNode.id === this.$route.params.id
      );

      this.note = {
        ...notes[this.noteIndex],
      };
    },
    addAnswer() {
      if (this.note.answers) {
        this.note.answers.push({
          date: new Date(),
          content: "",
        });
      } else {
        this.note.answers = [
          {
            date: new Date(),
            content: "",
          },
        ];
      }
    },
    deleteAnswer(dateKey) {
      const answerIndex = this.note.answers.findIndex(
        (answer) => answer.date === dateKey
      );

      this.note.answers.splice(answerIndex, 1);
    },
  },
};
</script>

<style>
.note-entry {
  border: 1px solid gray;
}
.note-answers {
  width: 50%;
}
.note-answer {
  margin: 20px;
}
</style>
