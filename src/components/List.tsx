import React from 'react';

export const List = <T,>(props: {data ?: T[] | null;renderItem: (item: T) => React.ReactElement;}) => (
    <ul>
    {props.data?.map(props.renderItem)}
  </ul>
);
