import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { CenterDiv, FlexDiv } from '../components/Styles';


const PlayerOne = () => {
  const [player, setPlayer] = useState(null);
  const [contestant, setContestant] = useState(null);
  const [weapon, setWeapon] = useState(null);
  const [contestantChoice, setContestantChoice] = useState(null);
  const [name, setName] = useState("");

  const startGame = () => {
    let playerA = { name: name, wins: 0 }
    setPlayer(playerA);
    let cont = { name: "contestant", wins: 0 }
    setContestant(cont);
  };

  const renderStatus = () => {
    return (
      <FlexDiv>
        <div>
          <h2>{player.name}</h2>
          <p>Wins: {player.wins}</p>
        </div>
        <div>
          <h2>{contestant.name}</h2>
          <p>Wins: {contestant.wins}</p>
        </div>
      </FlexDiv>
    );
  };

  const chooseWeapon = (id) => {
    let contWeapons = ["rock", "paper", "scissors"];
    setContestantChoice(contWeapons[Math.floor((Math.random() * contWeapons.length))]);
    if (id === 1) {
      setWeapon("rock");
    } else if (id === 2) {
      setWeapon("paper");
    } else if (id === 3) {
      setWeapon("scissors");
    };
  };

  const whoseWinner = () => {
    let winner = "";
    let result = null;
    if (weapon === contestantChoice) {
      result = "tie";
    } if (result === "tie") {
      return <h2>Tie</h2>
    } else {
      return (
        <div>
          <h2>{winner} Winner!</h2>
        </div>
      )
    }
  }

  const reset = () => {
    setContestantChoice(null);
    setWeapon(null);
  }

  return (
    <Segment>
      <CenterDiv>
        {!player &&
          <Form onSubmit={startGame}>
            <Form.Field>
              <label>Please Enter Name</label>
              <Form.Input fluid placeholder="Name .." value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Field>
            <Button type="submit">Start Rock, Paper, Scissors!</Button>
          </Form>}
        {player && contestant &&
          <div>
            {whoseWinner()}
            {!weapon &&
              <>
                <p>Pick Carefully</p>
              </>}
            {weapon && contestantChoice &&
              <div>
                <h3>{player.name} - {weapon}</h3>
                <h3>{contestant.name} - {contestantChoice}</h3>
                {whoseWinner()}
                <Button onClick={reset}>Go Again</Button>
              </div>}
          </div>}
      </CenterDiv>
    </Segment>
  );
};

export default PlayerOne;