# SYLLABUS

## How to create components?

### Create Component A
```typescript
import ComponentB from "./ComponentB"

/**
 * This is how to create a re-usable component
 * @returns Card Component
 */
type TComponentAProps = {
  title: string,
  content: string
}

export default function ComponentA({title, content} : TComponentAProps) {
  function handleClick() {
    alert('You clicked the button!')
  }
  
  return (
    <div className="card">
      {/* Card Header */}
      <div>
        <h3>{title}</h3>
      </div>
      {/* Card Content */}
      <div>
        <p>{content}</p>
      </div>
      {/* Card Footer */}
      <div>
        <ComponentB label="Test Button" className="button" onClick={handleClick} />
      </div>
    </div>
  )
}
```

### Create Component B
```typescript
/**
 * 
 * @returns Button Component
 */
type TComponentBProps ={
  label: string
  className: string;
  onClick: () => void;
}

export default function ComponentB({label, className, onClick} : TComponentBProps) {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {label}
    </button>
  )
}
```

### Import ComponentA to App.tsx
```typescript
import ComponentA from "./components/ComponentA";

export default function App() {
  return (
    <div>
      <ComponentA title="Component A" content="Test Content" />
    </div>
  )
}

```

## How to handle state management?

## How to make CRUD operations?