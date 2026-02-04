* Context Api
- Context Api is a way to pass data through the component tree without having to pass props down manually at every level also know as prop drilling.

- To create context api create a folder called context and create a file.jsx ex: UserContext
- wrap <App> with <UserContext> his file in a app.jsx file 
- the props.children means App is the component that is wrapped in <UserContext>
- children cant directly access the context data but the context data can be accessed by using createContext and exporting it
- then wrap the children inside userContext with provider and pass the context data as value

