import React from 'react'
import ButtonPageRedirect from '../../components/ButtonPageRedirect/ButtonPageRedirect.jsx'
import classNames from 'classnames/bind'
import styles from './ContainerButtonPageDirect.module.scss'
import { numberToMap } from '../../utils/numberToMap.js'
const cx = classNames.bind(styles)
function ContainerButtonPageDirect({ number, link }) {
    const pages = numberToMap(number)
    return (
        <div className="cont">
            {pages.map((page, index) => (
                <ButtonPageRedirect active={page.number === 3 && true} key={index}>
                    {page.number}
                </ButtonPageRedirect>
            ))}
        </div>
    )
}

export default ContainerButtonPageDirect
