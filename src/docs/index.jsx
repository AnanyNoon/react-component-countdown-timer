import React from "react";
import {render} from "react-dom";
import CountdownTimer from "../../lib";
import "./styles.scss";

function endFunction() {
    console.log()
}

function Demo() {
    return (
        <div className="count-down-react-box">
            <div className="count-down-react">
                <h1>Demo of the count down timer react</h1>
                <div className="title">Base</div>
                <pre>
                    <code>
                        {'<CountdownTimer count={5432} />'}
                    </code>
                </pre>
            </div>
        </div>
    );
}

render(<Demo/>, document.getElementById("app"));
