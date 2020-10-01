import '../styles/global.scss'
import NextNprogress from 'nextjs-progressbar';
import {Provider} from 'react-redux'
import {store} from "../redux/redux-store";
import {createWrapper} from 'next-redux-wrapper'

const MyApp = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <NextNprogress
                color={"#fff"}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}/>
            <Component {...pageProps}/>
        </Provider>
    )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
