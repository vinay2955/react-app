import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      radio: "",
      date: "",
      telephone: "",
      linkedin: "",
      Resume: "",
      Address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      radio1: "",
      workyes: false,
      workno: false,
      position: "",
      startdate: "",
      EndDate: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", this.state);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  selectState = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry === "india") {
      this.setState({
        country: selectedCountry,
        state: "AndhraPradesh",
        city: "vij",
      });
    } else {
      this.setState({
        country: selectedCountry,
        state: "",
      });
    }
  };
  updateStateDropdown = () => {
    const states = ["AndhraPradesh", "Telangana", "Tamilnadu", "Kerala"];
    return (
      <>
        <option value="">Please select state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </>
    );
  };

  selectCity = (event) => {
    const selectedState = event.target.value;
    this.setState({
      state: selectedState,
      city: selectedState === "AndhraPradesh" ? "vijayawada" : "",
    });
  };

  updateCityDropdown = () => {
    const { state } = this.state;
    let cities = [];

    if (state === "AndhraPradesh") {
      cities = [
        { name: "vijayawada", code: "vij" },
        { name: "guntur", code: "gnt" },
      ];
    }

    return (
      <>
        <option value="">Please select city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    this.setState(() => ({
      [name]: checked,
    }));
  };

  render() {
    return (
      <form
        className="container mt-5"
        onSubmit={(e) => this.handleSubmit(e)}
        autoComplete="on"
      >
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Job Application Form</h2>
            <table className="table">
              <tr>
                <td>
                  <label htmlFor="fname">First Name:</label>
                </td>
                <td>
                  <input
                    id="firstname"
                    type="text"
                    onChange={this.handleInputChange}
                    name="firstname"
                    value={this.state.firstname}
                    autoFocus
                    required
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lname">Last Name:</label>
                </td>
                <td>
                  <input
                    id="lastname"
                    type="text"
                    onChange={this.handleInputChange}
                    name="lastname"
                    value={this.state.lastname}
                    autoFocus
                    required
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Sex:</span>
                </td>
                <td>
                  <label htmlFor="Radio">Male</label>
                  <input
                    name="radio"
                    type="radio"
                    onChange={this.handleInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="Radio">Female</label>
                  <input
                    name="radio"
                    type="radio"
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date">Date of Birth:</label>
                </td>
                <td>
                  <input
                    id="date"
                    type="date"
                    onChange={this.handleInputChange}
                    name="date"
                    autoFocus
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="telephone">Telephone:</label>
                </td>
                <td>
                  <input
                    maxLength="10"
                    type="tel"
                    id="telephone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    onChange={this.handleInputChange}
                    name="telephone"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="url">LinkedIn:</label>
                </td>
                <td>
                  <input
                    type="url"
                    id="linkedin"
                    onChange={this.handleInputChange}
                    name="linkedin"
                    autoFocus
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="file">Resume Upload:</label>
                </td>
                <td>
                  <input
                    type="file"
                    id="Resume"
                    multiple
                    onChange={this.handleInputChange}
                    name="Resume"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Address">Address:</label>
                </td>
                <td>
                  <textarea
                    id="Address"
                    rows="3"
                    cols="30"
                    onChange={this.handleInputChange}
                    name="Address"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="country">Country:</label>
                </td>
                <td>
                  <select
                    onChange={(e) => {
                      this.handleInputChange(e);
                      this.selectState(e);
                    }}
                    id="country1"
                    name="country"
                    value={this.state.country}
                  >
                    <option value="">Please select country</option>
                    <option value="india">India</option>
                    <option value="us">US</option>
                    <option value="australia">Australia</option>
                    <option value="england">England</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="state">State:</label>
                </td>
                <td>
                  <select
                    onChange={(e) => {
                      this.handleInputChange(e);
                      this.selectCity(e);
                    }}
                    id="state1"
                    name="state"
                    value={this.state.state}
                  >
                    {this.updateStateDropdown()}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="city">City:</label>
                </td>
                <td>
                  <select value={this.state.city} id="city1" name="city">
                    {this.updateCityDropdown()}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="pincode">pincode:</label>
                </td>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    id="pincode"
                    name="pincode"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Are you willing to relocate:</span>
                </td>
                <td>
                  <label htmlFor="Radio1">Yes</label>
                  <input
                    name="radio1"
                    type="radio"
                    onChange={this.handleInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="Radio1">No</label>
                  <input
                    name="radio1"
                    type="radio"
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="experience">Work Experience:</label>
                </td>
                <td>
                  <label htmlFor="experiencey">Yes</label>
                  <input
                    type="checkbox"
                    id="work1"
                    name="workyes"
                    value="experiencey"
                    onChange={this.handleCheckboxChange}
                    checked={this.state.workyes}
                  />
                </td>
                <td>
                  <label htmlFor="experiencen">No</label>
                  <input
                    type="checkbox"
                    id="work2"
                    name="workno"
                    value="experiencen"
                    onChange={this.handleCheckboxChange}
                    checked={this.state.workno}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="position">Position:</label>
                </td>
                <td>
                  <input
                    list="positions"
                    name="position"
                    onChange={this.handleInputChange}
                    value={this.state.position}
                  />
                  <datalist id="positions">
                    <option value="Software Engineer" />
                    <option value="Frontend Developer" />
                    <option value="Backend Developer" />
                    <option value="Testing" />
                    <option value="Data Engineer" />
                  </datalist>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="startdate">Start Date:</label>
                </td>
                <td>
                  <input
                    type="month"
                    onChange={this.handleInputChange}
                    name="startdate"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="EndDate">End Date:</label>
                </td>
                <td>
                  <input
                    type="month"
                    onChange={this.handleInputChange}
                    name="EndDate"
                  />
                </td>
              </tr>
            </table>
            <div className="text-center">
              <button
                onClick={this.handleSubmit}
                //type="submit"
                className="btn btn-primary"
                id="submitButton"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default LoginForm;
// explination:
// firstname:good
// lastname:good
// radio:good
// date:good
// telephone:good
// linkedin:good
// Resume:good
// Address:good
// country:
// state:
// city:
// pincode:good
// radio1:good
// work: need explination
// position:nedd explination
// startdate:good
//  EndDate: good

//functions
//selectState- need else statement explination
//updateStateDropdown : need explination
//
