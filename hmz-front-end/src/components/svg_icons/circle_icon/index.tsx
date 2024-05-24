import { twMerge } from "tailwind-merge";

interface CircleIconProps {
    className?: string;
}

const CircleIcon = ({className}:CircleIconProps) => {
    return(
        <svg 
        height="25" 
        width="50"
        className={twMerge("fill-[#b1b1b1]  stroke-[#b1b1b1]", className)}
        >
            <circle cx="25" cy="13" r="11"  />
        </svg>
    )
}

export default CircleIcon;