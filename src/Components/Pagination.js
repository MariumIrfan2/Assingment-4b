import { Stack } from '@mui/material'
import React from 'react'

export default function Pagination({ count, currentPage }) {
    return (
        <div>
            <Stack spacing={2}>
                <Pagination count={count} color="primary" />
            </Stack>
        </div>
    )
}
