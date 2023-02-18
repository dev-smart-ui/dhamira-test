import * as React from "react";
import {Box} from "theme-ui";

const styles = {
    container: {
        px: 2,
        mx: "auto",
        width: "100%",
        height: '100%',
        maxWidth: '1200px',
    }
}

export const Container = ({children}) => {
    return <Box sx={styles.container}>
        {children}
    </Box>
}