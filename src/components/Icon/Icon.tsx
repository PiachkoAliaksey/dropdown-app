import './style.css';

import { TIcon } from '../../types';


const Icon = ({ icon, className }: TIcon) => {
    return (
        <span className={`${className}`}>{icon}</span>
    )
}

export default Icon;