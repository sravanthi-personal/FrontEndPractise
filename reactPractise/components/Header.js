import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps={
  title:'Task tracker',
}





// this is used to provide types as well as required mantory to props. 
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

//css in js
// const headingStyle = {
//   color:'red',
//   backgroundColor:'black'
// }

export default Header 
 