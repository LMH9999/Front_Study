import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    const {name,children} = props;
    return (
        <div>
            {name} 컴포넌트<br/>
            children : {children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름',
    children : '기본 자식'
}
MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}


export default MyComponent;