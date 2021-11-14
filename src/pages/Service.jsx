import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Service() {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('servicePage.title')}</h1>
        </div>
    )
}
