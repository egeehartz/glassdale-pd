export const noteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note--title">Title: ${noteObject.title}</div>
            <div class="note--content">Notes: ${noteObject.content}</div>
            <div class="note--author">Author: ${noteObject.author}</div>
            <div class="note--timestamp">Date: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</div>
        </section>
    `
}