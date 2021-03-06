import React, { useState, useEffect } from "react";
import { CounterProps } from "./ICounter";
import { CounterContainer } from "./style";

const Counter: React.FC<CounterProps> = ({
    maxValue = 10,
    setValue,
    initialCount = 1
}) => {
    const [count, setCount] = useState(initialCount);

    const handleSetCount = e => {
        if (e.target.id === "+") {
            if (count === maxValue) return;
            setCount(count + 1);
        } else if (e.target.id === "-") {
            if (count === 1) return;
            setCount(count - 1);
        }
    };

    useEffect(() => {
        setValue(count);
    }, [count, setValue]);
    return (
        <CounterContainer>
            <div className="counter" data-testid='count'>{count}</div>
            <div className="editor" onClick={handleSetCount}>
                <div id="+" className="increase btn" data-testid='+'>
                    +
                </div>
                <div id="-" className="decrease btn" data-testid='-'>
                    -
                </div>
            </div>
        </CounterContainer>
    );
};

export default Counter;
