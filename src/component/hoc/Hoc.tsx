import React, { FunctionComponent, ComponentType, useEffect, Component, ComponentClass } from 'react';

interface Props {
    backHandle?: Function;
}

const BackHandle = (WrappedComponent: any)=> {
    // return class BackHandleComponent extends Component<Props> {
    //     constructor(props: Props) {
    //         super(props);
    //         this.backHandler = this.backHandler.bind(this);
    //     }

    //     componentDidMount() {
    //         window.addEventListener('popstate', this.backHandler);
    //     }

    //     componentWillUnmount() {
    //         window.removeEventListener('popstate', this.backHandler);
    //     }

    //     backHandler() {
    //         console.info('handler back');
    //     }

    //     render () {
    //         return <WrappedComponent />
    //     }
    // }
    const BackHandleComponent: FunctionComponent<Props> = (props) => {
        useEffect(()=> {
            window.addEventListener('popstate', backHandler);
            return () => {
                window.removeEventListener('popstate', backHandler);
            }
        })

        function backHandler() {
            console.info('handler back');
        }

        return <WrappedComponent {...props} />
    }

    return BackHandleComponent;
}

export default BackHandle;
