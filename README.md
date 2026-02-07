COMPONENT HIERARCHY:

App (Parent Component)

|── AddTodo (Child - Form Component)

└── TodoList (Child - Container Component)

    └── TodoItem (Grandchild - UI Component)
    
------------------------------------------------------------------------------------------------------------------------------------------
COMPONENT RESPONSIBILITIES:
1.	APP COMPONENT: 
•	Root container component.
•	Manages global state (todos array).
•	Contains business logic functions:
o	addTodo() - Adds new todo.
o	toggleComplete() - Marks todo complete/incomplete.
o	deleteTodo() - Removes todo.
•	Passes state and functions as props to children.
2.	ADDTODO COMPONENT:
•	Presentational form component.
•	Local state for input field.
•	Receives addTodo() function as prop.
•	Handles form submission.
•	Validates user input.
3.	TODOLIST COMPONENT:
•	Container component for todos.
•	Receives todos array as prop.
•	Maps through todos to render TodoItem components.
•	Displays empty state message.
•	Passes toggleComplete() and deleteTodo() to TodoItem.
4.	TODOITEM COMPONENT:
•	Reusable UI component.
•	Displays individual todo item.
•	Shows: checkbox, text, delete button.
•	Applies CSS styles based on completion status.
•	Receives todo object and functions as props.

PROPS PASSING FLOW:
	App → TodoList → TodoItem (Data flow).
	App → AddTodo (Function flow).
-------------------------------------------------------------------------------------------------------------------------------
STATE MANAGEMENT:
•	Top-level state in App component.
•	Local form state in AddTodo component.
•	No state in TodoList or TodoItem (pure presentational).
------------------------------------------------------------------------------------------------------------------------------------------
COMPONENT REUSABILITY:
•	TodoItem is highly reusable.
•	Can be used in different contexts.
•	Accepts props for customization.
•	Independent styling.
-------------------------------------------------------------------------------------------------------------------------------
CSS ARCHITECTURE:
•	Component-scoped CSS files.
•	BEM-like naming convention.
•	No global CSS conflicts.
•	Responsive design principles.
-------------------------------------------------------------------------------------------------------------------------------
BEST PRACTICES IMPLEMENTED:
	Single Responsibility Principle.
	Prop Types validation (can be added).
	Component composition.
	Separation of concerns.
	Reusable component design.
	Clean folder structure.
	Consistent naming conventions.

FOLDER STRUCTURE:
src/
|── components/           # All reusable components
|   |── TodoItem.js
|   |── TodoItem.css
|   |── TodoList.js
|   |── TodoList.css
|   |── AddTodo.js
|   └── AddTodo.css
|── App.js                       # Main component
|── App.css                    # Global styles
└── index.js                   # Entry point
------------------------------------------------------------------------------------------------------------------------------------------
KEY LEARNINGS:
•	Container vs Presentational pattern. 
•	Props drilling vs Context API choice. 
•	Component composition techniques. 
•	State lifting principles. 
•	Event handling in nested components.
•	CSS modularity approaches.
