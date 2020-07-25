import React from 'react';
import Table from './components/table'

function MainWrapper (props: any) {
  let [state, setState] = React.useState();
  return (
    <>
    {props.children}
    </>
  );
}

export default function App() {

  function onButtonClicked(data: any) {
    console.log(data)
  }

  return (
    <MainWrapper>
     <Table 
      liftStateUpFunc={onButtonClicked}
     />
    </MainWrapper>
  );
}
