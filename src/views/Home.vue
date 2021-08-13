<template>
  <div class="home">
    <ul>
      <li v-for="note in notesList" :key="note.id">
        <router-link :to="{ name: 'NotesDetail', params: { id: note.id } }">{{
          note.title
        }}</router-link>
        <button @click="deleteNote(note)">Löschen</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { notes } from "@/store/index";

export default {
  name: "Home",
  data() {
    return {
      notesList: notes,
    };
  },
  methods: {
    deleteNote(note) {
      const noteIndex = notes.findIndex(
        (currentNode) => currentNode.id === note.id
      );
      notes.splice(noteIndex, 1);
    },
  },
};
</script>
