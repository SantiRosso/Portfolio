import "./SwitchHamburger.css";

const SwitchHamburger = ({click}) => {

    return(
        <div>
            <input onClick={click} type="checkbox" id="checkbox"/>
            <label htmlFor="checkbox" class="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </div>
    )
}

export default SwitchHamburger;