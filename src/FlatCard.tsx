import * as React from 'react'
import { useStyles } from './card-styles';
import { Card } from '@material-ui/core';

export const FlatCard: React.FC = ({ children }) => {
  const classes = useStyles(); // TS2554: Expected 1 arguments, but got 0.
  return (
    <Card elevation={0} className={classes.card}>
      {children}
    </Card>
  );
};
