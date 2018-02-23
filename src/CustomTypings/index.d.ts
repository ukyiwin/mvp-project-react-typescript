interface MyEventTarget extends EventTarget {
  value: string
}

interface MyFormEvent<T> extends React.FormEvent<T> {
  target: MyEventTarget
}

interface InputProps extends React.HTMLProps<Input> {
  onChange?: React.EventHandler<MyFormEvent<Input>>;
}