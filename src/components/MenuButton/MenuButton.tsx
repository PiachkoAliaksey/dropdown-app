import Icon from '../Icon/Icon';
import './styles.css';
import { MdChevronRight } from "react-icons/md";
import { TMenuButton } from '../../types';


const MenuButton = ({ name, icon, index, hasSubItems, subMenuHeight, onClick }: TMenuButton) => {
    return (
        <button onClick={() => onClick && index && subMenuHeight ? onClick(index, subMenuHeight) : null}>
            {icon && <Icon icon={icon} />}
            {name}
            {hasSubItems && <Icon icon={<MdChevronRight />} className='chevron' />}
        </button>
    )
}

export default MenuButton;