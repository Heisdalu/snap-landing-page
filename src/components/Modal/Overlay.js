import style from './Overlay.module.css'

const Overlay = (props) => {
    const classes = props.onShow ? style.overlay: '';
    return <div className={classes} onClick={props.onHide}></div>
}

export default Overlay;