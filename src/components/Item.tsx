import React from 'react';

export const Item = (props: { key: number; label: string; }) => <li key={props.key}>{props.label}</li>;
