export default{
  props: ["book"],
  template: `
        <li class="book-preview align-center justify-center" v-bind:currency="getCurrency">
        <img src="book.thumbnail">
           <h3> {{getTitle}} </h3>
           <h4 :class="getColor"> {{getCurrency}} {{getPrice}}</h4> 
           <router-link :to="'/book/' + book.id">Details</router-link>            
        </li>
    `,
  data() {
    return {
      bookPrice: this.book.listPrice.amount,
    };
  },
  computed: {
    getTitle() {
      return this.book.title;
    },
    getPrice() {
      return this.book.listPrice.amount;
    },
    getCurrency() {
      switch (this.book.listPrice.currencyCode) {
        case "EUR":
          return "€";
        case "USD":
          return "$";
        case "ILS":
          return "₪";
      }
    },
    getColor() {
      return {
        red: this.bookPrice > 150,
        green: this.bookPrice < 20,
      };
    },
  },
}
