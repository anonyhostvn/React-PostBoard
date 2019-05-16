#Core Concept ===================

     - 'reducer-function' is a function that take state and action as arguments, and return the next state of the app .
            - state : a JSON format represent the recent status or data of the apps
                eg : 
                        {
                            todos: [{
                                text: 'Eat food',
                                completed: true
                            }, {
                                text: 'Exercise',
                                completed: false
                            }],
                            visibilityFilter: 'SHOW_COMPLETED'
                        }

            - action : a JSON format represent an action with the state
                eg : 
                    { type: 'ADD_TODO', text: 'Go to swimming pool' }
                    { type: 'TOGGLE_TODO', index: 1 }
                    { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

                => Enforcing that every change is describe as an action let us have a clear understanding of what's going on in the app. If something have change, we know why it changed 

            *) However, it would be hard to write such a function for a big app, so we would write a small functions managing parts of the state. 
            ==> So this is the whole idea of redux. 

#Three principle =====

##Single source of truth 

    - The state of your whole application is store in an object tree within a single store
        + a store is an object that holds the application's state tree 
            eg :
                type Store = {
                        dispatch: Dispatch
                        getState: () => State
                        subscribe: (listener: () => void) => () => void
                        replaceReducer: (reducer: Reducer) => void
                    }

##State is read-only
    - The only way to change the state is to emit an action
        + action is an object that descibing what happend

##Changes are made with pure function 
    - To specify how the state tree is transformed by actions, you write pure reducer
        + a reducer is a function that accept an accumulation and a value and return a new accumulation. In Redux, accumulated value is the state object and the value being accumulated is action. 
        + Pure function : is a function that return exact the same output for given input, free of side-effect. 

### Dispatching Function 
