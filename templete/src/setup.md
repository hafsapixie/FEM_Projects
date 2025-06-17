Step 1 : Run the following commands

```
npm install -D tailwindcss@3
npx tailwindcss init
npx tailwindcss init -p

```

Step 2: Update tailwind.conf.js file to include this line:

```
content: ["*.html"],
```

Step 3: Create src/input.css to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 4: Include the src/output.css file to your html 

Step 5: Update package.json file to include this line:

```
"build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```
Step 6: Run command in terminal:
```
npm run build
```


