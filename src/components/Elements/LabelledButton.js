import React from 'react';
import { Button } from 'semantic-ui-react';

const LabelledButton = ({ onClick, content }) => (
  <div onClick={onClick}>
    <Button content={content} icon="right arrow" labelPosition="right" />
  </div>
);

export default LabelledButton;
