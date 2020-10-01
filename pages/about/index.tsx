import Router from "next/router";
import MainPage from "../../components/MainLayout/MainLayout";


const About = () => {

    const linkClickHandler = () => {
        Router.push('/')
    }
    return (
        <MainPage title={'About page'}>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aspernatur, cumque distinctio
                facilis fugiat labore minus nostrum odio quasi quo sed sint sit soluta vel velit! Architecto
                eum necessitatibus sit. Quae ratione sit vero! Aliquam, molestiae, vel.</p>
            <button onClick={linkClickHandler}>Back to homepage</button>
        </MainPage>
    )
}

export default About
