import React from 'react'; // required in order to use JSX



// a component that will render one or more components
// that it doesn't explicitly include in it's JSX
export const CapitalizedReferenceComponent = (props) => {

  // get references to all possible components
  // that this component might render
  const { section, components: Components } = props;

  // make a reference using a Capitalized variable name
  // to the component you need to render
  // where props.type is one of 'Type1' or 'Type2'
  let Component = Components[section.component];

  // use the reference to the component with the
  // Capitalized variable name to render it
  return (<Component { ...props } />);

};

export default CapitalizedReferenceComponent;