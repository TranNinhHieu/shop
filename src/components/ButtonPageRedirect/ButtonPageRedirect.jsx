import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ButtonPageRedirect.module.scss'
const cx = classNames.bind(styles)
function ButtonPageRedirect({ children, active, link }) {
    return (
        <Link to={link}>
            <div className={active ? cx('wrapper', 'active') : cx('wrapper')}>{children}</div>
        </Link>
    )
}

export default ButtonPageRedirect
