import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Loader.jsx', error, errorInfo); // eslint-disable-line
    }


    render() {
        return (
            <React.Fragment>
                    <CircularProgress />
            </React.Fragment>
        )
    }
}

export default Loader;
