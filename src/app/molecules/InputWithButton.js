import styles from '../componen/stylemodule/button.module.css';
import Button from '../componen/atom/Button';

const Container = styles.div`
    display: flex;
    align-items: center;
`;

const Input = styles.input`
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px;
    border-radius: 5px;
`;

const InputWithButton = ({ buttonText, onclick, props}) => (
    <Container>
        <Input{...props} />
        <Button onclick={onclick} primary>
            {buttonText}
        </Button>
    </Container>
);

export default InputWithButton;