import React from 'react'

/* 
//! disabled about page for this example.
1.Added a bootstrap alert component to the page.
2.then we created a state to set the values of the alert object.
3.created a showAlert function to set the value of alert object.
4.removed the cross button and added the setTimeout function to auto disable the alert object after the given time.

*/
function Alert(props) {
    const capatilize = (word) => {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height : '50px'}}>
            {/* props.alert && (logical and operator) will eliminate the null pointer error . */}
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capatilize(props.alert.type)} </strong>:{props.alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert
