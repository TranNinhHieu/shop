import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cx = classNames.bind(styles)
function Button() {
    return <div className={cx('wrapper')}>Button</div>
}

export default Button
