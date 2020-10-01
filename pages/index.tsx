import Head from "next/head";
import MainPage from "../components/MainLayout/MainLayout";

const Index = () => {


    return (
        <MainPage title={'Main page'}>
            <Head>
                <title>Main page</title>
                <meta name={'description'} content={'Learning next.js'}/>
            </Head>
            <h1>
                Main Page
            </h1>
        </MainPage>
    )

}
export default Index
