import {Link} from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app to help me learn about React and refresh my skills</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
