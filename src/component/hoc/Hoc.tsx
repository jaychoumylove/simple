import React, { FunctionComponent, ComponentType } from 'react';

interface Props {
    backHandle?: Function;
}

const BackHandleComponent = function(WrappedComponent: ComponentType) {
    const BackHandle:FunctionComponent<Props> = () => {
        return <WrappedComponent />
    }
    return BackHandle;
}
export default BackHandleComponent;