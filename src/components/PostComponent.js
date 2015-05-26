import React from 'react';

var PostComponent = React.createClass({
  render: function() {
    return (
		<div>
			<span>{this.props.data.message}</span>
			<span>{this.props.data.id}</span>
		</div>
	);
  }
});



var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.results.map(function(post, i) {
           return <PostComponent key={i} data={post}/>;
        })}
      </div>
    );
  }
});


export default MyComponent;
