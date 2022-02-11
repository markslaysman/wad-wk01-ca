import React from 'react';

export default class TextInputField extends React.Component {
    render() {
        // return (
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-6">
        //                 <label>Username: </label>
        //             </div>
        //             <div className="col-6">
        //                 <input type="test" id="username-field" placeholder="User Name"></input>
        //             </div>
        //         </div>
        //     </div>
        // );

        return <input type="text" id="username-field" placeholder="User Name"></input>
    }
}