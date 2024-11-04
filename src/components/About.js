import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About </h1>
            <h2>User Details of Company</h2>
            <User name={"Nandish Kumara JM (function)"} location={"Bangaluru function"}/>
            <UserClass name={"Nandish Kumara JM (class)"} location={"Bangaluru class"}/>
        </div>
    )
};

export default About;