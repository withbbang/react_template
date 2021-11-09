import ExampleSaga from "./exampleAPI";

function sagaConfigure(sagaMiddleware) {
  sagaMiddleware.run(ExampleSaga);
}

export default sagaConfigure;
