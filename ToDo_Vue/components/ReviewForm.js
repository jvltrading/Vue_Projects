app.component('todo-form', {
    template:
    /*html*/
    `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Create a To-Do Item:</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="todo">To-Do:</label>
            <textarea id="todo" v-model="todo"></textarea>

            <label for="status">Status:</label>
            <select id="status" v-model.number="status">
                <option>Pending</option>
                <option>In-Progress</option>
                <option>Completed</option>
            </select>

            <input class="button" type="submit" value="Submit">

        </form>
    `,
    data() {
        return {
            name: '',
            todo: '',
            status: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.todo === '' || this.status === null) {
                alert('To-Do is incomplete. Please fill out every field!');
                return;
            }
            let todoData = {
                name: this.name,
                todo: this.todo,
                status: this.status
            }
            this.$emit('todo-submitted', todoData);

            this.name = '';
            this.todo = '';
            this.status = null;
        }
    }
})