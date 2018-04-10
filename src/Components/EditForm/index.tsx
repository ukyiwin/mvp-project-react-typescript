// @flow
import React from 'react';
import compose from 'recompose/compose';
import User from './user';
import { User as UserType } from 'CustomTypings/schema';

const EditFormPure = (props: any): any => {
  const { type } = props;
  switch (type) {
    default:
    case 'user': {
      return <User {...props} />;
    }
  }
};

interface FormProps {
  user?: UserType;
}

export const EditForm = compose()(EditFormPure);
export const UserEditForm = (props: FormProps) => (
  <EditForm type="user" {...props} />
);
