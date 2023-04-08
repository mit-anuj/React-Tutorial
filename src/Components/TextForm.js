import React, { useState } from 'react'

// ! all the functions defination must be defined inside the exproted function and must be defined before return statement.
export default function TextField(props) {
    // ! we set the value of text here in the blank inverted commas.
    const [text, setText] = useState("")


    const hanldeUpCase = () => {
        // console.log('button clicked')
        setText(text.toUpperCase());
        props.onShowAlert("converted to uppercase", "success")
    }
    const hanldeLoCase = () => {
        // console.log('button clicked')
        setText(text.toLowerCase());
        props.onShowAlert("converted to lowercase", "success")

    }
    const hanldeClearAll = () => {
        setText('');
        props.onShowAlert("cleared", "success")

    }
    const hanldeTitleCase = () => {
        const newText = text.split(' ');
        let finalText = "", newWord;
        for (let word of newText) {
            newWord = word.charAt(0).toUpperCase() + word.substring(1);
            finalText = finalText + newWord + " ";
        }
        setText(finalText);
        props.onShowAlert("converted to titlecase", "success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    // const changeColor = ()=>{
    //     if(props.mode === 'blue'){
    //         backgroundColor: #215121;
    //     }


return (
    <>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {/* //!here we are using props which allows us to change the value according to the user input. 
            //! we need to pass the prop as an argument in the function.*/}
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                {/* <label for="Mybox" className="form-label">Example textarea</label> */}
                {/* //! here we are using the user input as an attribute in html tag so it is called as "states". */}
                <textarea className="form-control " value={text} onChange={handleOnChange} 
                    id="Mybox" rows="8" placeholder='Enter your text here'></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={hanldeUpCase}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={hanldeLoCase}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={hanldeClearAll}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={hanldeTitleCase}>Convert to Titlecase</button>


        </div>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1> Your text summary</h1>
            {/* here we added filter method so that we can remove the bug which is counting space as a word. */}
            <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        </div>
        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}> Preview</h2>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </>
)
}
