const Home = () => {
  return (
    <main className="font-sans">
      <div className="py-2">
        <p className="font-thin text-large">👋🏻 Hi over there, my name is </p>
        <h1 className="font-serif font-semibold text-6xl uppercase neon-text py-1">
          Tuomas Alanen.
        </h1>
        <p className="text-2xl font-semibold">
          I'm a Web Form Service Artisan.
        </p>
      </div>
      <div className="py-2">
        <p>
          I am a{" "}
          <span className="font-bold text-green-500">software developer</span>{" "}
          who loves to make an impact on users' life by solving identified
          problems. I'm passionate about{" "}
          <span className="font-bold text-green-500">
            fullstack development
          </span>
          , learning analytics and I also have done some designing and material
          creation for existing platforms. I also want to{" "}
          <span className="font-bold text-green-500">identify problems</span>{" "}
          and find the root cause for identified problems before solving them. I
          love doing things in{" "}
          <span className="font-bold text-green-500">agile manner</span> and
          don't hesitate to take the software into new directions.
        </p>
      </div>
      <div className="py-2">
        <p>
          👨🏻‍💻 My current position is{" "}
          <span className="font-bold text-green-500">
            Trainee Software Developer
          </span>{" "}
          at{" "}
          <a className="text-green-500" href="https://digia.com/en/">
            Digia Plc
          </a>
          . My past work history is available on my{" "}
          <a
            className="text-green-500"
            href="https://www.linkedin.com/in/tuomasalanen/"
          >
            LinkedIn profile
          </a>
          .
        </p>
        <p>
          📖 I'm{" "}
          <span className="font-bold text-green-500">
            Bachelor of Computer Science Student
          </span>{" "}
          at University of Helsinki.
        </p>
        <p>
          🐴 My main work horses are TypeScript, SQL, Node.js, Python, Bash,
          React.js, Docker and AWS.
        </p>
        <p>
          📚 I have Certified ScrumMaster® (CSM®) and Certified Scrum Product
          Owner® (CSPO®) certifications from Scrum Alliance. Also I am AWS
          Certified Solutions Architect - Associate.
        </p>
      </div>
      <div className="py-2">
        <h2>🏃🏻‍♂️ You can find me on</h2>
        <div className="flex flex-row gap-2">
          <a
            className="text-green-500"
            href="https://www.linkedin.com/in/tuomasalanen/"
          >
            linkedin
          </a>
          <a
            className="text-green-500"
            href="https://github.com/FinThunderstorm"
          >
            github
          </a>
          <a
            className="text-green-500"
            href="https://twitter.com/finthunderstorm"
          >
            twitter
          </a>
          <a className="text-green-500" href="mailto:tuomas@alanen.dev">
            email
          </a>
        </div>
      </div>
    </main>
  )
}

export default Home
