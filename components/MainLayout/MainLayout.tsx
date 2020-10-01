import Link from "next/link";
import Head from "next/head";
import s from "../../styles/MainLayout.module.scss"

const MainLayout = ({children, title ='Base page'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={s.nav}>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main className={s.main}>
                {children}
            </main>
        </>
    )
}

export default MainLayout
