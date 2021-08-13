export let notes = [];

export function addNote(note) {
  notes.push(note);
}

export function removeNote(note) {
  notes = notes.filter((currentNode) => currentNode.id !== note.id);
}
