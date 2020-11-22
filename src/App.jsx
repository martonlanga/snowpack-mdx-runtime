import Markdown from 'markdown-to-jsx';
import React from 'react';
// surprise, it's a div instead!
const MyParagraph = ({ children, ...props }) => (
  <div style={{ color: props.color }}>{children}</div>
);

const md = `
# DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.

<MyParagraph color="green"><b>eyo</b></MyParagraph>


`;

const App = () => (
  <Markdown
    options={{
      overrides: {
        MyParagraph: {
          component: MyParagraph,
        },
      },
    }}
  >
    {md}
  </Markdown>
);

export default App;
