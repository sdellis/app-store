const Redux = require('redux');
const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

namespace IIIFComponents {
    export class ComponentBoilerplateRedux extends _Components.BaseComponent {

        public options: IComponentBoilerplateReduxOptions;
        public rootNode: any;
        public tree: any;
        private _store: any;

        constructor(options: IComponentBoilerplateReduxOptions) {
            super(options);

            this._init();
            this._resize();
        }

        // events
        public stateChanged(new_state): void {
            this._emit(ComponentBoilerplateRedux.Events.STATECHANGED, new_state);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            // Initialise the state and document/view
            const initialState = { components: this.options.components };      // We need some app data.
            this.tree = this._render(initialState);               // We need an initial tree
            this.rootNode = createElement(this.tree);     // Create an initial root DOM node ...
            //document.body.appendChild(this.rootNode);    // ... and it should be in the document
            this._$element.append(this.rootNode);

            // main reducer
            function app(state = initialState, action) {
                return {
                  components: components(state.components, action)
                }
            }

            this._store = Redux.createStore(app);

            let unsubscribe = this._store.subscribe(() =>
              this._updateView()
            );

            // Add Event Listeners
            // Note: The only way to mutate the internal state is to dispatch an action.

            var total_componenents = initialState.components.length;
            for (var i=0; i < total_componenents; i++) {
              initialState.components[i].instance.on( "stateChanged",
                (args) => this._store.dispatch(update(args[0])) )
            }

            return success;
        }

        public getState(): any {
            return this._store.getState();
        }

        // Create a function that declares what the DOM should look like
        private _render(state: any)  {
          return h('ul', {},
            state.components.map( component =>{
              return h('li', component.id)
              }
            ));
        }

        // where we update the template
        private _updateView(): void {
            var newState = this._store.getState();
            var newTree = this._render(newState);
            var patches = diff(this.tree, newTree);
            this.rootNode = patch(this.rootNode, patches);
            this.tree = newTree;
            this.stateChanged(newState); //fire event
        }

        protected _getDefaultOptions(): IComponentBoilerplateReduxOptions {
            return <IComponentBoilerplateReduxOptions>{
                components: []
            }
        }

        protected _resize(): void {

        }
    }
}

namespace IIIFComponents.ComponentBoilerplateRedux {
    export class Events {
        static STATECHANGED: string = 'stateChanged';
    }
}

(function(g) {
    if (!g.IIIFComponents){
        g.IIIFComponents = IIIFComponents;
    } else {
        g.IIIFComponents.ComponentBoilerplateRedux = IIIFComponents.ComponentBoilerplateRedux;
    }
})(global);
