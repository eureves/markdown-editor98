const { useState } = React;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const Editor = (props) => {
  return (
    <textarea
      style={{ width: "100%", height: "80vh" }}
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  );
};

const Preview = (props) => {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}></div>;
};

marked.setOptions({
  breaks: true,
});

const App = () => {
  const [rawMarked, setRaw] = useState(placeholder);

  return (
    <div className="container h-100">
      <h1 className="text-center">Markdown previewer</h1>
      <div className="row mb-2">
        <div className="col">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Editor</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>

            <div className="window-body h-100">
              <Editor markdown={rawMarked} onChange={(e) => setRaw(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Preview</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>

            <div className="window-body">
              <Preview markdown={rawMarked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
