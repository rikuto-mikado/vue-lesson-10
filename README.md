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

## List Rendering with v-for

### What is v-for?
- `v-for` is a directive that renders a list of items by iterating over an array
- It creates a copy of the element for each item in the array
- The syntax is `"item in items"` where `item` is the current element and `items` is the source array

### v-for Syntax Breakdown

| Component | Description | Example |
|-----------|-------------|---------|
| **Directive** | `v-for` | Placed on the element you want to repeat |
| **Iterator Variable** | `goal` | Represents the current item in the loop |
| **Source Array** | `goals` | The data array you're looping through |
| **Full Syntax** | `"goal in goals"` | `<li v-for="goal in goals">` |
| **Display Value** | `{{ goal }}` | Variable name must match the iterator variable |

### Code Examples

#### Basic v-for Usage:
```html
<!-- Loop through goals array and display each goal -->
<ul v-else>
  <li v-for="goal in goals">{{ goal }}</li>
</ul>
```

#### How it Works:
```javascript
// If goals array contains: ['Learn Vue', 'Build App', 'Deploy']
// The v-for will render:
```
```html
<ul>
  <li>Learn Vue</li>
  <li>Build App</li>
  <li>Deploy</li>
</ul>
```

### Important Rules for v-for

1. **Variable Name Matching**: The variable in `{{ }}` must match the iterator variable
   ```html
   <!-- Correct -->
   <li v-for="goal in goals">{{ goal }}</li>

   <!-- Wrong - variable name doesn't match -->
   <li v-for="goal in goals">{{ item }}</li>
   ```

2. **Can be Combined with v-if/v-else**:
   ```html
   <p v-if="goals.length === 0">No goals yet!</p>
   <ul v-else>
     <li v-for="goal in goals">{{ goal }}</li>
   </ul>
   ```

### Key Takeaway
- Use `v-for` to dynamically render lists based on array data
- The iterator variable (e.g., `goal`) is only available within the `v-for` element and its children
- Always ensure the variable names match between `v-for` and template interpolation `{{ }}`
