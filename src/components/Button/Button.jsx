import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
function Button({ children, title, link, active }) {
    return (
        <Link to={link}>
            <div className={active ? cx('wrapper', 'active') : cx('wrapper')}>{children}</div>
        </Link>
    )
}

export default Button
