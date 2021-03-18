import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapActionsToProps = {
  addFeature
}

export default connect(null, mapActionsToProps)(Total);
