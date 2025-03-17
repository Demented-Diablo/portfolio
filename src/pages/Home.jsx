import React, { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'

function Home() {
  const [initialLine, setInitialLine] = useState(true)
  const [finalText, setFinalText] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInitialLine(false)
      setFinalText(true)
    }, 4000)
  }, [])

  return (
    <div className="home-hero">
      <div className="shape-corner top-left"></div>
      <div className="shape-corner top-right"></div>
      <div className="shape-corner bottom-left"></div>
      <div className="shape-corner bottom-right"></div>
      <div className="home-intro">
        {initialLine && (
          <h1>
            <ReactTyped
              strings={["Hi, I'm Gavin Sharma"]}
              typeSpeed={40}
              backSpeed={0}
              loop={false}
            />
          </h1>
        )}
        {finalText && (
          <h1>
            <ReactTyped
              strings={[
                "Available for a 4-Month Co-op starting September 2025",
                "Studying Applied Computer Science @ Dalhousie",
                "Skilled in React, Node.js, Docker, AWS, CI/CD, Java, C#, Swift, Python",
                "Passionate about building robust web applications & delightful user experiences"
              ]}
              typeSpeed={40}
              backSpeed={0}
              loop={false}
            />
          </h1>
        )}
      </div>
    </div>
  )
}

export default Home