/** @jsx jsx */
import {jsx} from "theme-ui"
import {Container} from "../container/container";

const styles = {
    main: {
        width: '100%',
        flex: '1 1 auto',
    }
}

export const Content = ({children}) => {
    return <main
        sx={styles.main}>
        <Container>
            {children}
        </Container>
    </main>
}