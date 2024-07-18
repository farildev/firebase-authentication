import PropTypes from 'prop-types';

const Input = ({type, placeholder, label, id, labelId, showIcon, closeIcon, changeVisibility ,visibility}) => {
  return (
    <div className="flex flex-col gap-3">
        <label className="text-xs text-gray-500" htmlFor={labelId}>{label}</label>
        <div id={id} className="px-[15px] py-3 bg-input rounded-lg flex items-center border border-gray-500">
          <input className="w-full h-full bg-transparent outline-none border-none text-xs" type={type} placeholder={placeholder} />
          <button onClick={changeVisibility} >{ visibility ? showIcon : closeIcon}</button>
        </div>
    </div>
  )
}

Input.propTypes = {
  type : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  labelId : PropTypes.string.isRequired,
  showIcon : PropTypes.element,
  closeIcon : PropTypes.element,
  changeVisibility : PropTypes.func,
  visibility : PropTypes.bool
}

export default Input