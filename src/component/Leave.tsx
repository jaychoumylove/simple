import { FunctionComponent, useEffect } from 'react';

interface OwnProps {
    call: Function
}

type handleEvent = (evt: Event) => void;

const Leave: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const { call } = props;

    const handle: handleEvent = () => {
        console.info('dispatch');
        call && call();
    };

    // function handle (): void {
    //     console.info('dispatch');
    //     call && call();
    // }

    function remove(): void {
        console.info('remove');
        window.removeEventListener('popstate', handle);
    }

    function lisener(): void {
        console.info('add');
        window.addEventListener('popstate', handle);
    }

    useEffect(() => {
        lisener();
        return remove;
    });

    return null;
}

export default Leave;