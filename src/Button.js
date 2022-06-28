import { Button } from 'react-bootstrap';

// penggunaan props
function MyButton(props) {
    const { text, disableButton, colorButton } = props;
    return (
        <Button disabled={disableButton} variant={colorButton}> { text } </Button>
    );
}

export default MyButton;