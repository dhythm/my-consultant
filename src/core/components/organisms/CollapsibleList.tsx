import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';

interface Props {
  label: string;
  icon?: JSX.Element;
}

const CollapsibleList: React.FunctionComponent<Props> = ({
  label,
  icon,
  children,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <ListItem button onClick={() => setOpen(prev => !prev)}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>{children}</Collapse>
    </>
  );
};

export default CollapsibleList;
