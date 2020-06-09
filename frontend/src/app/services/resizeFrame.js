import { Constants } from '../../constants';

export const resizeFrame = (increaseSizeBy) => {
    setTimeout(() => {
        if (Constants.IS_CANVAS_PROJECT) {
            window.parent.postMessage({
                type: 'ResizeFrame',
                height: document.querySelector('#main').offsetHeight + (increaseSizeBy || 0),
            }, 'https://localhost:44326/');
        }
    }, 100);
};
