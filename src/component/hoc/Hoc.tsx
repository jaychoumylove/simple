import React, { FunctionComponent, ComponentType, Component, useEffect } from 'react';

interface Props {
    backHandle?: Function;
}

const BackHandle = (WrappedComponent: ComponentType)=> {
    // return class BackHandleComponent extends Component<Props> {
    //     constructor(props: Props) {
    //         super(props);
    //         this.backHandler = this.backHandler.bind(this);
    //     }

    //     componentDidMount() {
    //         console.info('did mount');
    //         window.addEventListener('popstate', this.backHandler);
    //     }

    //     componentWillUnmount() {
    //         console.info('will unmount');
    //         window.removeEventListener('popstate', this.backHandler);
    //     }

    //     backHandler() {
    //         console.info('handler back');
    //     }

    //     render () {
    //         return <WrappedComponent />
    //     }
    // }
    const BackHandleComponent: FunctionComponent<Props> = () => {
        useEffect(()=> {
            window.addEventListener('popstate', backHandler);
            console.info('effect');
            return () => {
                console.info('clean up');
                window.removeEventListener('popstate', backHandler);
            }
        })

        function backHandler() {
            console.info('handler back');
        }

        return <WrappedComponent />
    }

    return BackHandleComponent;
}

export default BackHandle;