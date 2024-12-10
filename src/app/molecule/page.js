"use client"
import Layout from "../componen/layout"
import styles from '../componen/stylemodule/container.module.css';
import InputWithButton from "../molecules/InputWithButton";

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Welcome to My Website</h1>
                <p>This is the main content. you can place your content here.</p>
                <InputWithButton
                    placeholder="Enter Text"
                    buttonText="Submit"
                    onclick={() => alert('Submitted!')}
                />
            </div>
        </Layout>
    );
}
export default Page;