import React from 'react'
import { useTranslation } from "react-i18next"
import { PaginationContainer, Button , Page } from "./PaginationElements"


export default function Pagination(props) {

     const { onLeftClick, onRightClick, page, totalPages } = props;

     const [t, i18n] = useTranslation("global")
 
    return (
        <PaginationContainer>

             <Button onClick={onLeftClick}>{t('pagination.left')}</Button>

            <Page>{page} {t('pagination.of')} {totalPages}</Page>

            <Button onClick={onRightClick}>{t('pagination.right')}</Button>

        </PaginationContainer>
    )
}
