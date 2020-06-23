import bookPreview from "./book-preview.cmp.js";

export default{
  props: ["books"],
  template: `
        <ul class="book-list clean-list flex wrap align-center justify-center space-around">
            <book-preview v-for="book in books" :book="book" :key="book.id"/>
        </ul>
    `,
  methods: {
    selectBook(book) {
      this.$emit("selected", book);
    },
  },
  components:{
    bookPreview
  }
}
