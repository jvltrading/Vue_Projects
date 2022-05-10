app.component('todo-display', {
    props: {

    },
    template: 
    /*html*/
    `<div class="todo-display">
        <todo-form @todo-submitted="addTodo"></todo-form>
        <todo-list v-if="todos.length" :todos="todos"></todo-list>
    </div>`,
    data() {
        return { 
            todos: []
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo);
        }
    },
    computed: {}
})