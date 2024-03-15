import { createContext, useState } from "react";
import { v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction."
        },
        {
            id: 2,
            rating: 8,
            text: "I don't know what all the trouble is about, but I'm sure it must be your fault. You watch your language! He says it's the best he can do. Since the XP-38 came out, they're just not in demand. It will be enough. "
        },
        {
            id: 3,
            rating: 9,
            text: "She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel. "
        },
        {
            id: 4,
            rating: 8,
            text: "There's no lock! That oughta hold it for a while. Quick, we've got to get across. Find the control that extends the bridge. Oh, I think I just blasted it. They're coming through! Here, hold this. Here they come! For luck! Where could they be? Close the blast doors! Open the blast doors! Open the blast doors! I've been waiting for you, Obi-Wan."
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, //this is function
        feedbackEdit, // this is the state
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext