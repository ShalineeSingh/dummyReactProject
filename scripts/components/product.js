/** @jsx React.DOM */

var Product = React.createClass({
    getInitialState: function() {
      return {
        added: false
      };
    },

    addToCart: function(e) {
      if(!this.state.added) {
        // add
        $.publish('cart.added', this.props.data);
      }
      else {
        // remove
        $.publish('cart.removed', this.props.data.id);
      }

      this.setState({
        added: !this.state.added
      });
    },

    render: function() {
        // assign to props
        var data = this.props.data;

        return (
          
         <div className="thumbnail col-md-12">
            <div className="col-md-9">
            <h3 className="card-header"><a href={data.url}>{data.name}</a></h3>
              <div className="product_price">{data.price} {data.currency}</div></div>
                <div className="product_button-wrap col-md-3">
                  <button className={this.state.added ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.addToCart}>
                  {this.state.added ? 'Cancel' : 'Add to cart'}
                </button>
              </div>
          </div>

         
        );
    }
});
