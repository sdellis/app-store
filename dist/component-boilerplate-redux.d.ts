// component-boilerplate-redux v1.0.0 https://github.com/viewdir/component-boilerplate#readme
declare namespace IIIFComponents {
    function register(c: any): {
        type: string;
        component: any;
    };
    function update(c: any): {
        type: string;
        component: any;
    };
}

declare namespace IIIFComponents {
    const REGISTER: string;
    const UPDATE: string;
}

declare const Redux: any;
declare const h: any;
declare const diff: any;
declare const patch: any;
declare const createElement: any;
declare namespace IIIFComponents {
    class ComponentBoilerplateRedux extends _Components.BaseComponent {
        options: IComponentBoilerplateReduxOptions;
        rootNode: any;
        tree: any;
        private _store;
        constructor(options: IComponentBoilerplateReduxOptions);
        stateChanged(new_state: any): void;
        protected _init(): boolean;
        getState(): any;
        private _render(state);
        private _updateView();
        protected _getDefaultOptions(): IComponentBoilerplateReduxOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ComponentBoilerplateRedux {
    class Events {
        static STATECHANGED: string;
    }
}

declare namespace IIIFComponents {
    interface IComponentBoilerplateReduxOptions extends _Components.IBaseComponentOptions {
        components?: any;
    }
}

declare namespace IIIFComponents {
    function components(state: any[], action: any): any[];
}
