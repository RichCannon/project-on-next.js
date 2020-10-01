import Link from "next/link";
import MainLayout from "../components/MainLayout/MainLayout";
import s from '../styles/error.module.scss'

const ErrorPage = () => {
    return (
        <MainLayout title={'404 NOT FOUND'}>
            <div>
                <h1 className={s.errorText}>404 NOT FOUND</h1>
                <div>You can <Link href={'/'}><a>go back</a></Link></div>
            </div>
        </MainLayout>
    )
}

export default ErrorPage
