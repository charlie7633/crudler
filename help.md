I am getting the following React Native error: 
`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. Check the render method of ModuleListScreen.`

I have already verified that all my components (`Screen`, `ModuleList`, `ModuleItem`) have the correct `export default ComponentName;` at the bottom of their files. 

My lecturer requires strict adherence to this architecture. Please DO NOT rewrite my code, change my state management, or use third-party libraries. 

Please analyze my current workspace folder structure and my `import` statements inside `ModuleListScreen.js` and `ModuleList.js`. Tell me exactly which file is in the wrong folder or which `import` path is mistyped causing this empty object error.