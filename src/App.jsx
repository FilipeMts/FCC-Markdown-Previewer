import React, { useState } from 'react';
import marked from 'marked';
import './App.scss';

marked.setOptions ({
  breaks: true,
})

const App = () => {
  const defaultMarkdown = 
`# FCC Project: React Markdown Previewer  
## Front End Libraries
You can write and preview a lot of things...
[links](https://www.freecodecamp.com)
Inline code \`<div></div>\` like this one
\`\`\`
// Multi-line code:
console.log(Hello World)
\`\`\`
_Lists_
1. JavaScript
2. C#
3. Python

**Bold** text!
> Code block
Images:
![Terminal](https://cyberhades.ams3.cdn.digitaloceanspaces.com/imagenes/2012/09/300px-bash_screenshot.png)

...and more. Try it out!
`
  const [text, setState] = useState(defaultMarkdown);

  const handleChange = e => {
    console.log(e.target.value)
    setState(`${e.target.value}`)
  }

  const markup = () => {
    const markup = marked(text, {breaks: true});
    return { __html: markup };
  }

  return (
    <div className="App">
      <main>
        <div className='user_input'>
          <div className='input_header'>Editor</div>
          <div className='editor_wrapper'>
            <textarea 
              id='editor' 
              name='text' 
              value={text}
              onChange={handleChange}>
            </textarea>        
          </div>
        </div>
        <div className='previewer'>
          <div className='previewer_header'>Previewer</div>
          <div id="preview" dangerouslySetInnerHTML={markup()}></div>
        </div>      
      </main>
      <div className="code">
        <a href="http://filipemts.github.io/FCC-Markdown-Previewer/" target="_blank" rel="noopener noreferrer">code is available here</a>
      </div> 
    </div>
  );
}

export default App;
