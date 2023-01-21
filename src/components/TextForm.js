import React, { useState } from 'react'

export default function TextForm(props) {

    const HandleOnChange = (event) => {
        // State Change using function 
        SetText(event.target.value);
    }

    const HandleUpOnClick = () => {
        let ctUppertext = mytext.toUpperCase()
        SetText(ctUppertext);
        props.showAlert('Uppercase convert successfully.', 'success');
    }

    const HandleLoOnClick = () => {
        let ctLowertext = mytext.toLowerCase()
        SetText(ctLowertext);
        props.showAlert('Lowercase convert successfully.', 'success');
    }

    const HandleClOnClick = () => {
        let ctUppertext = ""
        SetText(ctUppertext);
        props.showAlert('Textbox clear successfully.', 'success');
    }

    const HandleCopyOnClick = () => {
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert('Copy text successfully.', 'success');
    }

    const HandleExSpaceOnClick = () => {
        let remoSpaceText = mytext.split(/[ ]+/)
        SetText(remoSpaceText.join(' '))
        props.showAlert('Remove Extra Space successfully.', 'success');
    }

    const [mytext, SetText] = useState('Enter Your Text');

    return (
        <div>
            <div className="container" style={{color: props.Mode === 'dark' ? 'white' : 'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={mytext} onChange={HandleOnChange} rows="8"
                        style={
                            {
                                backgroundColor: props.Mode === 'dark' ? 'black':'white',
                                color: props.Mode === 'dark' ? 'white':'black'
                            }
                        }
                    ></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={HandleUpOnClick}>Convert To Uppercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={HandleLoOnClick}>Convert To Lowercase</button>
                <button className="btn btn-outline-success mx-2" onClick={HandleCopyOnClick}>Copy Text</button>
                <button className="btn btn-outline-info mx-2" onClick={HandleExSpaceOnClick}>Remove Extra Space</button>
                <button className="btn btn-outline-danger mx-2" onClick={HandleClOnClick}>Clear Text</button>
            </div>

            <div className="container my-5" style={{color: props.Mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{mytext.split(' ').length} words and {mytext.length} characters</p>
                <p>{0.008 * mytext.split(' ').length} Minutes Read Time</p>
                <h2>Preview</h2>
                <p>{mytext.length>0?mytext:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </div>
    )
}
