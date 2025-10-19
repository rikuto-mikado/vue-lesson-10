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

## v-if/v-else vs v-show Comparison

| Feature | v-if / v-else | v-show |
|---------|---------------|--------|
| **DOM Manipulation** | Completely adds/removes elements from DOM | Toggles CSS `display` property only |
| **Element in DOM** | Element destroyed when false, created when true | Element always exists in DOM |
| **Performance (Initial)** | Lower initial cost (doesn't render if false) | Higher initial cost (always rendered) |
| **Performance (Toggle)** | Higher toggle cost (destroy/recreate element) | Lower toggle cost (just CSS change) |
| **Opposite Condition** | Use `v-else` (automatic, no condition needed) | Must write explicit condition for each element |
| **Best Use Case** | Condition rarely changes | Condition toggles frequently |
| **Example** | `<p v-if="show">Text</p>`<br>`<p v-else>Hidden</p>` | `<p v-show="show">Text</p>`<br>`<p v-show="!show">Hidden</p>` |

### Code Examples

#### Using v-if/v-else:
```html
<!-- Elements are added/removed from DOM -->
<p v-if="goals.length === 0">No goals yet!</p>
<ul v-else>
  <li>Goal</li>
</ul>
```

#### Using v-show:
```html
<!-- Elements always in DOM, just hidden/shown -->
<p v-show="goals.length === 0">No goals yet!</p>
<ul v-show="goals.length > 0">
  <li>Goal</li>
</ul>
```

### Key Takeaway
- **v-if/v-else**: Better when condition changes rarely (e.g., user login state)
- **v-show**: Better when toggling frequently (e.g., dropdown menus, tabs)
