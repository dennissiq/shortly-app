import React from "react"
import Button from "./Button/Button"

const App = () => {
  return (
    <>
      <div style={{ padding: 10 }}>
        <Button primary onClick={() => console.log("primary button")}>
          Sign Up
        </Button>
        <Button secondary>Login</Button>
        <Button borderless>Shorten It!</Button>
      </div>
      <div style={{ backgroundColor: "hsl(260, 8%, 14%)", padding: 30 }}>
        <Button
          primary
          onClick={() => console.log("invisible button")}
          invisible
        >
          Link Shortening
        </Button>
      </div>
    </>
  )
}

export default App
