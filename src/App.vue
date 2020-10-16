<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
import todo from './components/todo'
export default {
  components: {
    'todo': todo
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

input{
    display: block;
    margin: 10px;
    width: 220px;
    border: 2px solid #42b983;
    border-radius: 999px;
    padding: 7px 15px;
    outline: none;
}
input[type='submit'] {
    width: 80px;
    border-radius: 5px;
    display: block;
    border: solid 2px#42b983;
     color: #42b983;
     font-weight: bolder;
    background: transparent;
    
}

input[type='submit']:hover {
  background-color: #42b983;
  color: white;
  cursor: pointer;
}
textarea {
    width: 70%;
    height: 100px;
    border: 2px solid #42b983;
    outline: none;
    padding: 20px;
}

#app {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-color:#2c3e50;
}
header {
    margin-bottom: 100px;
}

main {
    
    margin: 0 auto;
    width: 25%;
    min-height: 200px;
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    padding-bottom: 30px;
}

.todo {
    background-color: #ccc;
    position: relative;
    width: auto;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.4);
    align-items: center;
    margin-bottom:15px ;
}

.main-content {
    padding-left: 20px;
    width: 200px;
}
h4 {
    font-size: 1.3rem;
    word-wrap: break-word;
    
}
p {
    font-style: italic;
    width: 30ch;
    word-wrap: break-word;
}

.done {
text-decoration: line-through;
color: #066138;
}

#body {
  margin-top:100px ;
}
</style>
