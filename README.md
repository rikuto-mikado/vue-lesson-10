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

3. **Using Index with v-for**:
   ```html
   <!-- Access both item and its index (position) in the array -->
   <li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>
   ```

#### v-for with Index Details

| Syntax | Description | Example Output |
|--------|-------------|----------------|
| `(goal, index)` | Gets both item and position | If goals = ['Learn Vue', 'Build App'] |
| `{{ goal }}` | Current item value | 'Learn Vue', 'Build App' |
| `{{ index }}` | Position in array (starts at 0) | 0, 1 |
| Full example | `<li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>` | "Learn Vue - 0"<br>"Build App - 1" |

**Why use index?**
- Vue needs a unique `key` to track each element for efficient DOM updates
- Without proper keys, Vue may incorrectly reuse elements when the list changes
- Index provides a simple way to identify each item's position
- Better performance when adding/removing/reordering items

### Advanced v-for Usage

#### 4. Looping Through Object Properties

You can use `v-for` to iterate over the properties of an object:

```html
<!-- Loop through object properties -->
<li v-for="(value, key, index) in {name: 'Rikuto', age: '18'}">
  {{ key }}: {{ value }} - {{ index }}
</li>
```

**Object Loop Syntax:**

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| `value` | The property value | 'Rikuto', '18' |
| `key` | The property name | 'name', 'age' |
| `index` | Position in object (optional, starts at 0) | 0, 1 |

**Output:**
```
name: Rikuto - 0
age: 18 - 1
```

**Important Notes:**
- Order: `(value, key, index)` - Value comes first, then key, then index
- All three parameters are optional - you can use just `value`, or `(value, key)`, or all three
- Object iteration order may vary across different JavaScript engines

#### 5. Looping Through a Number Range

`v-for` can also iterate through a range of numbers:

```html
<!-- Loop from 1 to 10 -->
<li v-for="num in 10">{{ num }}</li>
```

**Number Range Details:**

| Syntax | Description | Output |
|--------|-------------|--------|
| `v-for="num in 10"` | Loops from 1 to 10 (inclusive) | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Start value | Always starts at 1 (not 0) | First iteration: `num = 1` |
| End value | Inclusive of the number specified | Last iteration: `num = 10` |

**Use Cases:**
- Creating numbered lists
- Generating a fixed number of placeholder elements
- Creating pagination numbers
- Simple counting displays

**Example Output:**
```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  ...
  <li>10</li>
</ul>
```

### v-for Usage Comparison Table

| Type | Syntax | Use Case | Example |
|------|--------|----------|---------|
| **Array** | `item in array` | List of items | `v-for="goal in goals"` |
| **Array with Index** | `(item, index) in array` | List with positions | `v-for="(goal, index) in goals"` |
| **Object** | `(value, key, index) in object` | Object properties | `v-for="(value, key) in person"` |
| **Number Range** | `num in n` | Fixed count (1 to n) | `v-for="num in 10"` |

### Key Takeaway
- Use `v-for` to dynamically render lists based on array data
- The iterator variable (e.g., `goal`) is only available within the `v-for` element and its children
- Always ensure the variable names match between `v-for` and template interpolation `{{ }}`
- Use `(item, index)` syntax when you need to track the position of each element
- `v-for` works with arrays, objects, and number ranges - choose based on your data structure
