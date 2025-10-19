# Vue Lesson 10

## What I Learned

### Conditional Rendering with v-if and v-else
- Learned how to use `v-if` and `v-else` directives to conditionally render elements in Vue
- `v-if` evaluates a condition and only renders the element when the condition is true
- `v-else` must immediately follow a `v-if` element and renders when the v-if condition is false
- These directives completely add/remove elements from the DOM (not just hide them with CSS)

## Challenges

### Understanding v-if vs v-else Behavior
- Initially found it tricky to understand that `v-else` doesn't need a condition - it automatically takes the opposite of the preceding `v-if`
- The `v-else` element must be a direct sibling of the `v-if` element, otherwise Vue won't recognize the connection
- Understanding when to use `v-if`/`v-else` vs `v-show` (which only toggles CSS display property) was confusing at first
