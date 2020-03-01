import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [originalText, setOriginalText] = useState("")

  return (
    <Layout>
      <SEO title="Home" />
      <h2>
        Make your text secret<i>er</i>
      </h2>
      <p>Everything but punctuation becomes *. **'* *******!</p>

      <label>
        Type your text here: <br />
        <textarea
          style={{ minWidth: "90vw" }}
          name="originalText"
          onChange={e => setOriginalText(e.target.value)}
        />
      </label>
      <br />
      {originalText.length > 0 && `${originalText.length} characters typed`}
      <br />
      <hr />

      {originalText.length > 0 && (
        <div>
          Your <i>secret-ish</i> text is
          <br />
          {originalText.replace(/[a-zA-Z\u00C0-\u00FF]{1}/g, "*")}
          <br />
          <CopyToClipboard text={originalText.replace(/[a-zA-Z\u00C0-\u00FF]{1}/g, "*")}>
            <button>Copy</button>
          </CopyToClipboard>
          <hr />
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
