import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Todo from '../../common/Todo';
import Loader from '../../Components/Loader';

export interface IIndexState {
    title: string;
    todos: Todo[];
    loading: boolean;
}

export interface IIndexDispatch {
    setTitle(n: string): void;
    saveTodo(): void;
    setDone(i: number): void;
}

export type IIndexProps = IIndexState & IIndexDispatch & RouteComponentProps<undefined>;

const IndexView: React.StatelessComponent<IIndexProps> = ({ title, todos, loading, setTitle, saveTodo, setDone }) =>
    // tslint:disable-next-line:jsx-wrap-multiline
    <main className="index">
        {loading && <Loader />}
        <h1 className="index__header">Todo app</h1>
        <form className="index__form" onSubmit={(e) => e.preventDefault()}>
            <label className="index__form__label" htmlFor="newtodo">
                Add a new todo:
            </label>
            <input
                className="index__form__input"
                name="newtodo"
                type="text"
                // tslint:disable-next-line:jsx-boolean-value
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
        <br />
    </main>;

export default IndexView;
