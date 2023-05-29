import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ContainerButtonPageDirect.module.scss'
import './ContainerButtonPageDirect.scss'
import PaginationCustom from '../../components/PaginationCustom/PaginationCustom.jsx'
const cx = classNames.bind(styles)
function ContainerButtonPageDirect({ number, link }) {
    const [page, setPage] = useState(1)
    const handlePageChange = (event, value) => {
        setPage(value)
    }

    return (
        <div className={cx('ContainerButtonPageDirect')}>
            <PaginationCustom number={number} page={page} link={link} handlePageChange={handlePageChange} />
        </div>
    )
}

export default ContainerButtonPageDirect
