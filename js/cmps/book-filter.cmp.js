export default{
  template: `
        <section class="input-container">
            <h2>Search!</h2>
            <input type="text" placeholder="search?" v-model="filterBy.searchStr" @input="filter"/>
            <input type="number" placeholder="max price?" v-model.number="filterBy.maxPrice" @input="filter"/>
        </section>
    `,
  data() {
    return {
      filterBy: {
        searchStr: '',
        maxPrice: 0,
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
}
