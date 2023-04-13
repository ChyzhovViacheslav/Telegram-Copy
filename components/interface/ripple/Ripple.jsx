import React from 'react'
import styled from 'styled-components'

const RippleWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
`

export default function Ripple() {
    const rippleHandler = (event) => {
        const wrapper = event.target.getBoundingClientRect()
        const x = event.clientX
        const y = event.clientY

        const styles = {
            position: 'absolute',
            width: '50px',
            height: '50px',
            backgroundColor: '#5a5a5a',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            top: `${y - wrapper.y}px`,
            left: `${x - wrapper.x}px`,
            animation: 'pulse 0.5s ease-out',
            pointerEvents: 'none',
            opacity: '0.5'
        }

        const keyframes = `@keyframes pulse {
            to {
              transform: translate(-50%, -50%) scale(8);
              opacity: 0;
            }
          }`;

        const styleSheet = document.createElement('style')
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        const ripple = document.createElement('div')
        ripple.classList.add('ripple')
        Object.assign(ripple.style, styles)

        event.target.appendChild(ripple)

        setTimeout(() => {
            ripple.remove()
        }, 480)
    }

    return (
        <RippleWrapper  onMouseDown={rippleHandler}/>
    )
}
