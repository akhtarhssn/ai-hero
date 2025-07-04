import React from 'react'

const ClipText = ({ text, from, to }: { text: string, from?: string, to?: string }) => {
    return (
        <span className="inline-block relative text-[#1F1F1F]"
            style={{
                WebkitTextStroke: '1px #ffffff00',
                WebkitTextStrokeWidth: '2px'
            }}
        >
            <span
                className={`text-inherit bg-gradient-to-br from-[${from ? from : "#8258C8"}] to-[${to ? to : "#2C84C8"}]  inline-block`}
                style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    backgroundColor: 'transparent',
                }}
            >
                {text}
            </span>
        </span>
    )
}

export default ClipText