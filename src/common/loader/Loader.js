// import React from 'react';
// import './loader.css';

// const Loader = (props) => {
// return (
// <div className="loader-parent">
//   <div className="loader"></div>
// </div>
// )
// }

// export default Loader;

import React from 'react';
import './loader.css';

 function Loading() {
    return (<div className='loading'>
        <div className='loadingText'>Loading, please wait!</div>
    </div>);
}

export default Loading;