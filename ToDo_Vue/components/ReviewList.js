app.component('todo-list', {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    template: /*html*/
    `
        <div class="todo-container">
            <h3>To-Do's</h3>
            <ul>
                <li v-for="(todo, index) in todos" :key="index">
                <div>
                    <input type="checkbox" class="toggle">
                    To-Do:
                    <br />
                    "{{ todo.todo }}"
                    <br />
                    Status: {{ todo.status }}
                    <button class="destroy" @click="deleteToDo">
                        X
                    </button>
                    <br />
                    <hr />
                </div>
                </li>
            </ul>
        </div>
    `,
    methods: {
        deleteToDo() {
            console.log('Here deleting');
        },
    }
})