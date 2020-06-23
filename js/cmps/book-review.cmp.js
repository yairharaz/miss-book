import {bookService} from '../services/book.service.js';

export default {
  props: ["book"],
  template: `
    <section v-if="book" class="book-review align-center justify-center space-between">
        <div>
            <h3> Reviews </h3>
            <ul v-if="isReviewed" class="clean-list">
                <li v-for="(review,idx) in book.reviews">
                    <button @click="deleteReview(idx)" title="Delete review">Delete Review</button>
                    <p>Review by {{review.fullName}} ,</p> 
                    <p>Posted at: {{review.readAt}}</p> 
                    <p>Added Text: {{review.freeText}}</p> 
                </li>
            </ul>
        </div>
        <div class= "flex">
            <form class=" review-form flex align-center justify-center space-between" @submit.prevent="addReview()">
                <input type="text" ref="userNameInput" placeholder="Username" v-model="reviewToEdit.fullName"/>
                <select name="grade" title="Your Review" required v-model="reviewToEdit.grade">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>   
                <input type="date" v-model="reviewToEdit.readAt">
                <textarea v-model="reviewToEdit.freeText" placeholder="add something..."></textarea>
                <button>Save Review</button>
            </form>
        </div>
    
    </section>
    `,
    data(){
        return {
            reviewToEdit: {
                fullName: 'Books Reader',
                readAt: this.formattedDate,
                freeText:'',
                grade: 1
            }
        }
    },
    methods: {
        addReview() {
            bookService.addReview(this.bookId(), this.reviewToEdit);
            // eventBus.$emit('user-msg', `review was added successfully`);
        },
        deleteReview(reviewIdx) {
            bookService.removeReview(this.bookId(), reviewIdx);
        },
        bookId(){
            return this.$route.params.bookId
        }
    },
    computed:{
        isReviewed(){
            console.log(this.book.title);
            
            return this.book.reviews.length > 0;
        },
        formattedDate(){
            new Date().toISOString().substring(0, 10);
        }
    },
    mounted(){
        this.$refs.userNameInput.focus()
    }
};
