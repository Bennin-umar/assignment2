import ButtonContainer from "./ButtonContainer";

function Form() {
    return (
        <div id="form1">
            <form>
                <input type="email" placeholder="email"/>
                <input type="text" placeholder="name"/>
                <textarea placeholder="ennter message"></textarea>
                <br/>
                <ButtonContainer/>
            </form>
        </div>
    )
}

export default Form
