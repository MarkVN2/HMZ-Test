import BellIcon from "../svg_icons/bell_icon";
import AlignJustifyIcon from "../svg_icons/justify_icon";
import RightArrowIcon from "../svg_icons/right_arrow_icon";


const IconMapping = {
    'bell':<BellIcon/>,
    'right_arrow':<RightArrowIcon/>,
    'align_justify':<AlignJustifyIcon/>
}

interface SidebarItemProps {
    title: string;
    active?: boolean;
    icon: string;
}

const SidebarItem = ({ title,icon,active}: SidebarItemProps) => {
    return (
        <li className={`grid grid-flow-col ${active? 'border border-solid border-[#adacac9d]':''}`}>
            <div className=" grid grid-flow-col p-[0.85rem]">
            <span className="left-full text-[#b1b1b1] ">
                {title}
            </span>
            <span className="  grid grid-flow-col  right-full place-content-end">
                {IconMapping[icon]}
            </span>
            </div>
        </li>
    )
}
export default SidebarItem;