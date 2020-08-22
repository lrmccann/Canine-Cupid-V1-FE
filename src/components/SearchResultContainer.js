import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";
const MaxResults = 20;

class SearchResultContainer extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: ""

  };

  // When this component mounts, search the Giphy API for pictures of kittens
  // onsafe_componentWillMount()
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i
          }))

        })
     
      })
      .catch(err => console.log(err));
  }

  filterEmployees = (searchkey) => {
    console.log("***in Filter*******");
    console.log(searchkey);
    console.log(this.state.result);
    // this.state.result = this.state.result.filter(this.state.result => this.state.result.includes(searchkey));
    var filterResult = this.state.result.filter(person => person.firstName === searchkey)

    this.setState({
      result:filterResult
      
    })

   
    // console.log("FILTERD RESULT------")
    // console.log(filterResult);
  }


  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function here
    this.filterEmployees(value);
    this.setState({

      [name]: value

    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);

  };

  // testFunction = () => {
  //   { console.log("************") }
  //   { console.log(this.state.result[0].picture) }
  //   { console.log("+++++++++++++") }
  // }
  // filtertestfunction = () => {
  //   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  //   const result2 = words.filter(word => word.includes("it"));
  //   console.log(result2);
  // }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function be called here
    // this.filterEmployees(value);
    // this.filterEmployees(this.state.search);
    this.setState({

      [name]: value

    });
        
  };

  render() {

    // const{ data } = this.state.result;
    //  const{ currentSort } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Employee Directory</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SearchForm
              value={this.state.search}
               handleInputChange={this.handleInputChange}
               handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">
          {/* <div > */}
          <table className="table">
            <tr>
              <th scope="col">Photo</th>
              <th>First Name</th>
              {/* <th onClick={this.onSortChange}>First Name   */}
              {/* <button onClick={this.onSortChange}> ^
								</button> */}
              {/* </th> */}
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>

            {/* { [...this.state.result].sort(this.sortTypes[this.state.currentSort].fn).map((item) =>  */}
            {/* {this.state.result.length > 0 ? (
                <div>
                  {this.state.result.map(item => (
                    <EmployeeCard
                      picture={item.picture}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      phone={item.phone}
                      key={item.key}
                    />
                  ))}
                </div>
              ) : (<div />)} */}
            {[...this.state.result].map((item) =>
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            )}

          </table>
        </div>


      </div>
    );
  }
}

export default SearchResultContainer;