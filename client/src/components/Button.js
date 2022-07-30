const Button = props => {

    return <button className={props.className} type={props.type}>

        {props.name}

    </button>
}

export default Button;