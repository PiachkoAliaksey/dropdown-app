import { useState } from "react";
import './styles.css';
import Icon from "../Icon/Icon";
import { MdAccountCircle } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import MenuItem from "../MenuItem/MenuItem";
import { itemsMenu } from "../../data";



const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [subMenuHeight, setSubMenuHeight] = useState<number | null>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

    const handlerClick = (index: number, subMenuHeight: number) => {
        setSubMenuHeight(subMenuHeight);
        setActiveSubMenu(index);
        setIsSubMenuOpen(index > -1);
    }

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(prev => !prev)}>
                <Icon icon={<MdAccountCircle />} />
                Kim Wilson
                <Icon className="chevron" icon={<FiChevronDown />} />
            </button>
            <div className={`menu ${isOpen ? 'menu-open' : ''}`} style={{ height: `${subMenuHeight || 168}px` }}>
                <div className={`menu-inner ${isSubMenuOpen ? 'open' : ''}`}>
                    <div className="main-menu">{itemsMenu.map((item, index) => (
                        <MenuItem subItems={item.subItems} onClick={handlerClick} activeSubMenu={activeSubMenu} key={item.name} name={item.name} index={index + 1} />
                    ))}</div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;