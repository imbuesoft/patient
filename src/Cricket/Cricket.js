import React from 'react'

const Cricket = () => {

    const [score, setScore] = React.useState(0)
    const [balls, setBalls] = React.useState(0)
    const [bowler, setBowler] = React.useState(0)
    const [batsman, setBatsman] = React.useState([0, 1])
    const [wicket, setWicket] = React.useState(0)
    const [over, setOver] = React.useState(0)
    const [teamNameA, setTeamNameA] = React.useState('India')
    const [teamNameB, setTeamNameB] = React.useState('Australia')
    //done by Deep
    const [runs, setRuns] = React.useState([]);
    const [count, setCount] = React.useState(0)


    function calculation_over(balls) {
        let overs = Math.floor(balls / 6)
        let remainballs = balls % 6
        return overs + '.' + remainballs
    }

    const [teamA, setTeamA] = React.useState([{
        "id": 1,
        "name": "Virat Kohli",
        "category": "Batsman",
        "Runs": 0,
        "Balls": 0,
        "Four": 0,
        "Six": 0,
        "Timings": 0,
        "StrickRate": 0
    },
    {
        "id": 2,
        "name": "Rohit Sarma",
        "category": "Batsman",
        "Runs": 0,
        "Four": 0,
        "Six": 0,
        "Balls": 0,
        "Timings": 0,
        "StrickRate": 0
    },
    {
        "id": 3,
        "name": "MS Dhoni",
        "category": "Batsman",
        "Runs": 0,
        "Four": 0,
        "Six": 0,
        "Balls": 0,
        "Timings": 0,
        "StrickRate": 0
    }])

    const [teamB, setTeamB] = React.useState([{
        "id": 1,
        "name": "Josh Buttler",
        "category": "Batsman",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    },
    {
        "id": 2,
        "name": "Stive Smith",
        "category": "Bowler",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    },
    {
        "id": 3,
        "name": "Rasid Khan",
        "category": "Bowler",
        "Runs": 0,
        "Balls": 0,
        "Wicket": 0,
        "Maddian": 0,
        "Eco": 0
    }])


    const handleRuns = (x) => {

        setBalls(balls + 1)

        let batsman_team = [...teamA];
        let bowlers_team = [...teamB];


        batsman_team[batsman[0]].Balls += 1;
        batsman_team[batsman[0]].Runs += x;
        bowlers_team[bowler].Balls += 1;
        bowlers_team[bowler].Runs += x;

        if (x % 2 == 0) {
            if (x == 4)
                batsman_team[batsman[0]].Four += 1;
            else if (x == 6)
                batsman_team[batsman[0]].Six += 1;
        } else {
            setBatsman([batsman[1], batsman[0]])
        }
        //score count
        setScore(score + x)

        if (balls % 6 == 0 && balls != 0) {
            setRuns([null]);
            setBatsman([batsman[1], batsman[0]])
            let bowlerIndex = 0;
            while (true) {
                bowlerIndex = prompt('Please Bowler Index')
                if (bowlerIndex)
                    if (parseInt(bowlerIndex) >= 0 && parseInt(bowlerIndex) < teamB.length) {
                        setBowler(parseInt(bowlerIndex))
                        break
                    }
            }

        }
        else {
            setRuns([x, ...runs]);
        }
        setTeamB(bowlers_team)
    }
    //done by deep

    const handleBowler = (e) => {

        let temp = [...teamA];
        let temp2 = [...teamB];
        if (balls % 6 == 0 && balls != 0) {
            setBatsman([batsman[1], batsman[0]])
            setRuns([null])
            var bowlerIndex = prompt('Please Bowler Index')
            if (bowlerIndex)
                setBowler(parseInt(bowlerIndex))
            else
                setBowler((bowler + 1) % 3)
        } else {
            setRuns([e, ...runs]);
            if (e === 'W') {
                setBalls(balls)
                setScore(score + 1)
                temp[batsman[0]].Runs += 1;

                temp2[bowler].Runs += 1;
            }
            if (e === 'WC') {
                setWicket(wicket + 1)
                setBalls(balls + 1)

                let temp2 = [...teamB];
                temp2[bowler].Balls += 1;
                while (true) {
                    var Batsman = prompt('Please Batsman Index')
                    if (Batsman) {
                        if (parseInt(Batsman) >= 0 && parseInt(Batsman) < teamA.length) {
                        setBatsman([parseInt(Batsman), batsman[1]])
                        break
                    }}
                }
            }
        }

        setTeamA(temp)
        setTeamB(temp2)
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Ind : <span>{score}/{wicket} ({calculation_over(balls)}/20)</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center border">
                        <div className='d-flex justify-content-between'>
                            <h3 className='text-success'>{teamA[batsman[0]].name} ({teamA[batsman[0]].Runs})</h3>
                            <h3 className='text-danger'>{teamA[batsman[1]].name} ({teamA[batsman[1]].Runs})</h3>
                        </div>
                    </div>
                    <div className="col-md-6 text-center border">
                        <h3>{teamB[bowler].name} ({teamB[bowler].Balls} | {teamB[bowler].Runs})</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 border">
                        <h3>This Over : {
                            runs.map((value, index) => {
                                return <b key={index}>{" "}{value} {" "}</b>
                            })}<span></span>
                        </h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            {
                                ['W', 'WC'].map((e, i) => {
                                    return (<button type='button' className='btn btn-danger btn-lg rounded-circle ms-4' key={i} onClick={() => handleBowler(e)} >{e}</button>)
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        {
                            [0, 1, 2, 3, 4, 5, 6].map((e, i) => {
                                return (<button type='button' className='btn btn-danger btn-lg rounded-circle ms-4' key={i} onClick={() => handleRuns(e)} >{e}</button>)
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cricket