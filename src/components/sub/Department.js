import Layout from "../common/Layout";
import Section from "./Section";
export default function Department() {
    const path = process.env.PUBLIC_URL;
    

    return (
        <Layout name={'Department'}>
            <Section />
        </Layout>
    );
}