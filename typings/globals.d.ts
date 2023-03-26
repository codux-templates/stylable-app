declare module '*.st.css' {
    export * from '@stylable/runtime/stylesheet';

    const defaultExport: unknown;
    export default defaultExport;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.ComponentProps<'svg'> & { title?: string }
    >;
    export default ReactComponent;
}

declare module '*.png' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.jpg' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.jpeg' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.gif' {
    const urlToFile: string;
    export default urlToFile;
}
