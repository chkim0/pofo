import Layout from "../common/Layout";
import Section from "./Section";
import deviceSize from './theme';
import styled, { ThemeProvider } from 'styled-components';
export default function Department() {
    const path = process.env.PUBLIC_URL;


    return (
        <Layout name={'Department'}>
            <ThemeProvider theme={deviceSize}>
                <Section />
            </ThemeProvider>
        </Layout>
    );
}