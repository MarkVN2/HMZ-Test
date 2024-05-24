import { twMerge } from "tailwind-merge";

interface AlignJustifyIconProps {
    className?: string;
}

const AlignJustifyIcon = ({className}: AlignJustifyIconProps) => {
    return (
        <svg
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        x='0px'
        y='0px'
        width="25" 
        height="25">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17Z"  className={twMerge('w-35 h-35 fill-[#b1b1b1] stroke-[#b1b1b1]',className)}/>
        </svg>
    )
}
export default AlignJustifyIcon;