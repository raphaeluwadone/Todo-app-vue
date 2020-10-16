<template>
  <div id="body">
        <main>
            <div class="inputs">
                <h2>My Todo List</h2>
                <input type="text" v-model="todo.title" placeholder="Title of task">
                <textarea name="" id="" cols="30" rows="10" v-model="todo.content"></textarea>
                <input type="submit" v-on:click="addTask">
            </div>
                <div>
                    <div class="todo" v-for="(task, index) in todo.tasks">
                        <div>
                            <i class="fas fa-check-circle circle" v-on:click="done(task)" :key="index"></i>
                        </div>
                            <div class="main-content">
                                <h2 :class="{ done:task.completed }">{{ task.title }}</h2>
                                <p :class="{ done:task.completed }">{{ task.content }}</p>
                            </div>
                            <i class="fas fa-trash trash" @click="trash(task)"></i>
                    </div>
                </div>
        </main>
  </div>
</template>

<script>

export default {

data(){
    return {
        todo: {
        title: "",
        content: "",
        id: "",
        completed: false,
        tasks:[]
        }
    }
},

methods: {
    addTask: function(){
        this.todo.id = new Date()
        this.todo.tasks.push({title: this.todo.title, content: this.todo.content, id: this.todo.id, completed: false})
        this.todo.title = ""
        this.todo.content = ""
},
    done: function(task){
        
        return task.completed = !task.completed
        
},
    trash: function(task){
        var ind = this.todo.tasks.indexOf(task)
        this.todo.tasks.splice(ind, 1)
    }
    
},

computed: {
}
}

</script>

<style>
.inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.circle {
font-size: 35px;
margin-bottom: 20px;
color: #42b983;
}

.trash {
    position: absolute;
    right: 1em;
    color: orangered;
}

</style>