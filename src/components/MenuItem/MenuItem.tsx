
import { useRef } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { MdChevronLeft } from "react-icons/md";
import { TMenuItem } from '../../types';

const MenuItem = ({ name, index, activeSubMenu, subItems, onClick }:TMenuItem) => {
    const menuRef = useRef<HTMLDivElement>(null);
   
    return (
        <>
            <MenuButton onClick={subItems ? onClick : () => null} name={name} index={index} hasSubItems={!!subItems} subMenuHeight={menuRef.current?.clientHeight} />
            {subItems?.length && (
                <div ref={menuRef} className={`sub-menu ${activeSubMenu === index ? 'sub-menu-open' : ''}`}>
                    <MenuButton onClick={onClick} icon={<MdChevronLeft />} name={name} index={-1} subMenuHeight={168}/>
                    {subItems.map((item: string) => (
                        <MenuButton key={item} name={item}/>
                    ))}
                </div>
            )}
        </>

    )
}

export default MenuItem;