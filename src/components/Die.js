import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }

    return (
        <div 
            class="die" 
            style={styles} 
            onClick={props.holdDice}
        >
            <h2>{props.value}</h2>
        </div>
    )
}