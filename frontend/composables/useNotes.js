export async function getNotes() {
    return await csrFetch("/notes", { method: "GET" });
}


export async function addNote(note) {
    return await csrFetch("/notes", { method: "POST", body: note });
}

export const deleteNote = async (note_id) => {
    return await csrFetch(`/notes/${note_id}`, {
        method: "DELETE"
    })
}
