import React from 'react'
import Container from '@mui/material/Container';
import { Children } from 'react';

function PageContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default PageContainer