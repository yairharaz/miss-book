

export default{
    template:`
    form class="column-layout"">
        <input type="text" placeholder="Full Name">
        <select name="grade" title="Your Review" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <textarea name="review" id="" cols="30" rows="10" placeholder="Add Your Review"></textarea>
        <button type="submit">Submit</button>
    </form>
    `
}