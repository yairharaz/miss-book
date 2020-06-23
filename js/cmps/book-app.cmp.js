import bookList from "./book-list.cmp.js";
import bookFilter from "./book-filter.cmp.js";
import bookDetails from "./book-details.cmp.js";

import { bookService } from "../services/book.service.js";

export default{
  template: `
        <main class="app-main book-app">
            <book-filter @filtered="setFilter"></book-filter>
            <book-details @close="selectBook" :book="selectedBook" v-if="selectedBook"></book-details> 
            <book-list  v-bind:books="booksToShow" @selected="selectBook" v-else></book-list>
        </main>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
      selectedBook: null,
    };
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;

      //    FILTER BY TITLE:
      var filteredBooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
      });
          

      // FILTER BY PRICE RANGE:
      filteredBooks = filteredBooks.filter((book) => {
        return (filterBy.maxPrice)? book.listPrice.amount < filterBy.maxPrice : this.books;
      });
      return filteredBooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    selectBook(book) {
      this.selectedBook = book;
    },
  },
  created() {
    bookService.query()
      .then(books => {
        this.books = books;
      })
  },
  components:{
    bookList,
    bookFilter,
    bookDetails
  }
}
