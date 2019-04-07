import React, { FunctionComponent, ComponentType, Component } from 'react';

interface Props {
    backHandle?: Function;
}

// const BackHandleComponent = function(WrappedComponent: ComponentType) {
//     const BackHandle:FunctionComponent<Props> = () => {
//         return <WrappedComponent />
//     }
//     return BackHandle;
// }

const BackHandle = (WrappedComponent: ComponentType)=> {
    return class BackHandleComponent extends Component<Props> {
        constructor(props: Props) {
            super(props);
            this.backHandler = this.backHandler.bind(this);
        }

        componentDidMount() {
            console.info('did mount');
            window.addEventListener('popstate', this.backHandler);
        }

        componentWillUnmount() {
            console.info('will unmount');
            window.removeEventListener('popstate', this.backHandler);
        }

        backHandler() {
            console.info('handler back');
        }

        render () {
            return <WrappedComponent />
        }
    }
}

export default BackHandle;