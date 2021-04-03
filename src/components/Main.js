import Para from './Para'
import Button from './Button';

const Main = () => {
    return (
        <main className="main">
            <Para />
            <Button text="Save" color="green" />
            <Para />
            <Button />
            <Para text="Nännännäää" />
        </main>
    )
}

export default Main;