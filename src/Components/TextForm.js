import React, { useState } from 'react'

// ! all the functions defination must be defined inside the exproted function and must be defined before return statement.
export default function TextField(props) {
    // ! we set the value of text here in the blank inverted commas.
    const [text, setText] = useState("")


    const hanldeUpCase = () => {
        // console.log('button clicked')
        setText(text.toUpperCase());
    }
    const hanldeLoCase = () => {
        // console.log('button clicked')
        setText(text.toLowerCase());
    }
    const hanldeClearAll = () => {
        setText('');
    }
    const hanldeTitleCase = () => {
        const newText = text.split(' ');
        let finalText="", newWord;
        for(let word of newText){
            newWord= word.charAt(0).toUpperCase() + word.substring(1);
            finalText = finalText+newWord+" ";
        }
        setText(finalText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log('change handled!');
    }

    return (
        <>
            <div className='container'>
                {/* //!here we are using props which allows us to change the value according to the user input. 
            //! we need to pass the prop as an argument in the function.*/}
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="Mybox" className="form-label">Example textarea</label> */}
                    {/* //! here we are using the user input as an attribute in html tag so it is called as "states". */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="8" placeholder='Enter your text here'></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={hanldeUpCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={hanldeLoCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={hanldeClearAll}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={hanldeTitleCase}>Convert to Titlecase</button>


            </div>
            <div className="container my-100">
                <h1> Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
