import Para from './Para'
import Button from './Button';
import Form from './Form';

const Main = () => {
    return (
        <main className="main">
            <Para />
            <Button text="Save" color="green" />
            <Form type="country"/>
            <Form />
            <Button />
            <Para text="Nännännäää" />
        </main>
    )
}

export default Main;