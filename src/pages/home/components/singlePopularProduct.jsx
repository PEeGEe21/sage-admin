

import React, { Component, useState, useEffect } from 'react'

import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {format} from 'timeago.js'








class SinglePopularProduct extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        categories: [],
        products: [],
        Open: false,
        productsData: [],
        itemsToShow: 0,
        usersToShow: 0,
        expanded: false,
        userExpanded: false,
    };

    this.showMore = this.showMore.bind(this);
    this.showMoreUsers = this.showMoreUsers.bind(this);
  }




  componentDidMount() {
    // setInterval(() => {
    axios
      .get('https://sage-server.herokuapp.com/api/products/?is_popular=True')
      .then((response) => {
        //   console.log(response.data)
        this.setState({
            productsData: response.data,
        });

        console.log(this.state.productsData);
      })
      .catch((error) => {
        console.log('Error');
      });
// }, 5000);
    this.getPopularProducts();
    this.showMoreUsers();
    this.showMore();
    
  }



  getPopularProducts() {
    const products = {
        products: this.state.products,
    };

    
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({
          itemsToShow: this.state.categoriesData.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  showMoreUsers() {
    this.state.usersToShow === 4
      ? this.setState({
          usersToShow: this.state.productsData.length,
          userExpanded: true,
        })
      : this.setState({ usersToShow: 4, userExpanded: false });
  }

//   style={{background: '#f2f2f2'}}

  render() {

    return (

            <>
                
                            {this.state.productsData.sort(()=> Math.random() - Math.random())
                    .slice(0, 1).map((prod, i)=>(
                        

                            <div className="col-lg-4"  key={prod.id}>
                                <div className="card mb-4 card-animate">
                                        <div className="bg-overlay" >
                                            <img className="card-img-top img-fluid" src={prod.image} alt="Card image cap"/>
                                                    <div className="card-img-overlay">
                                                <p className="card-text product-info-name" style={{position: 'absolute', bottom: '0', color: '#ffffff', zIndex: '9', marginBottom: '3px', fontSize: '1.5rem'}}>
                                                    {prod.name}
                                                </p>
                                                <div className="kt-widget19__shadow"></div>
                                                <div className="kt-widget19__labels">
                                                    <a href="#" className="btn btn-label-light-o2 btn-bold btn-sm btn-pill">Popular</a>
                                                </div>
                                            </div>
                                        </div>
                                                                    
                                        <div className="card-body" style={{padding: '25px'}}>
                                            <h5 className="card-title">{prod.category}</h5>
                                            <p className="card-text" style={{fontSize: '13px', textAlign: 'justify'}}>{prod.short_description}</p>
                                            <p className="card-text">
                                                <small className="text-muted">{format(prod.date_added)}</small>
                                            </p>

                                            <div className="kt-widget19__action">
                                                <Link to={`/product/${prod.id}`} className="btn btn-sm btn-label-brand btn-bold">See Product...</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                    ))}
                            
            </>   
      
    );
  }
}

export default SinglePopularProduct;
