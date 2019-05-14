import React from 'react';
import styled from 'styled-components';

import Player from './Player';

const StyledStatsheet = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
`;

const Rules = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  h3 { 
    margin: 0;
    padding: 0;
  }
`;

const Statsheet = () => {
  return(
    <StyledStatsheet>
      <Player playerNumber='1' />
      <Rules>
        <h3>Rules:</h3>
        <p>Lorem Ipsum asdfhajsdfhasldkjfl;aksdfj a;sldkjf;askjd fasdfklja sd;lfkj ads;lfkj asdflkjasdlfkj ads</p>
      </Rules>
      <Player playerNumber='2' />
    </StyledStatsheet>
  );
};

export default Statsheet;
