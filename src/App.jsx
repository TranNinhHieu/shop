import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './components/Button/Button.jsx'
import ButtonPageRedirect from './components/ButtonPageRedirect/ButtonPageRedirect.jsx'
import ContainerButtonPageDirect from './containers/ContainerButtonPage/ContainerButtonPageDirect.jsx'
// import './App.css'
const cx = classNames.bind(styles)

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Button title="a" link="/homea">
                Home
            </Button>
            <Button title="a" link="/homeb" active={true}>
                b
            </Button>
            <ButtonPageRedirect link="/home/1">1</ButtonPageRedirect>
            <ButtonPageRedirect link="/home/2" active={true}>
                2
            </ButtonPageRedirect>
            <ContainerButtonPageDirect number="11" />
        </Router>
    )
}

export default App
