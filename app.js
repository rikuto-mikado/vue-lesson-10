const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []

    };
  },
  methods: {
    // Method to add a new goal to the goals array
    // Uses 'this' to access component's data properties (enteredGoalValue and goals)
    // push() adds the entered value to the end of the goals array
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');