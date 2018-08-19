new Vue({
   el: '#app',
   data: {
      boards : [{
         name : 'To Do',
         task : [
            {'title':'Bug #4','edit':false},
            {'title':'Bug #5','edit':false}
         ],
         newTask: false
      },
      {
         name : 'In Progress',
         task : [
            {'title':'Bug #3','edit':false}
         ],
         newTask: false
      },
      {
         name : 'Done',
         task : [
            {'title':'Bug #1','edit':false},
            {'title':'Bug #2','edit':false}
         ],
         newTask: false
      }],
      newTaskContent: []
   },
   methods: {
      setNewTask: function(index) {
         this.boards[index].newTask = true;
      },
      addNewTask: function(index, string) {
         if (string != null) {
            this.boards[index].task.push({ 'title':string, 'edit':false });
            this.newTaskContent = [];
            this.boards[index].newTask = false;
         }
      },
      deleteTask: function(board, task) {
         let index = board.task.indexOf(task)
         board.task.splice(index, 1);
      },
   }
});

$('[data-toggle="tooltip"]').tooltip();