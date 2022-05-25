import { useState } from "react";
import ReactMde from "react-mde";
import showdown from "showdown";

function Editor({ currentNote, editNote }) {
  const [selectedTab, setSelectedTab] = useState("write");

  /* Object created by using the method converter of the 
   showdown's library MD -> HTML */
  const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    ghMentions: true,
    ghMentionsLink: true,
    smartIndentationFix: true,
    simplifiedAutoLink: true,
  });

  return (
    <section>
      <ReactMde
        value={currentNote.body()}
        onChange={editNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </section>
  );
}

export default Editor;
