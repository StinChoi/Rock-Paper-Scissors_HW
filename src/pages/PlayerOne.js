import React, { useState } from "react";
import { Button, Form, Segment, Image } from "semantic-ui-react";
import { CenterDiv, FlexDiv } from '../components/Styles';
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";


const PlayerOne = () => {
  const [player, setPlayer] = useState(null);
  const [contestant, setContestant] = useState(null);
  const [weapon, setWeapon] = useState(null);
  const [contestantChoice, setContestantChoice] = useState(null);
  const [name, setName] = useState("");

  const startGame = () => {
    let playerA = { name: name, wins: 0 }
    setPlayer(playerA);
    let cont = { name: "Contestant", wins: 0 }
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

            <Button type="submit">Rock, Paper, Scissors .. GO!</Button>
          </Form>}
        {player && contestant &&
          <div>
            {renderStatus()}
            {!weapon &&
              <>
                <p>Pick Carefully</p>
                <FlexDiv>
                  <Image src={rock} size="small" circular onClick={() => chooseWeapon(1)} />
                  <Image src={paper} size="small" circular onClick={() => chooseWeapon(2)} />
                  <Image src={scissors} size="small" circular onClick={() => chooseWeapon(3)} />

                </FlexDiv>
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