import React, { Component } from "react";

export default class TshirtFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tshirts: [
        {
          childCategory: false,
          count: 257,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ADRO",
            selected: false,
          },
          selectedCount: 0,
        },
        {
          childCategory: false,
          count: 4,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Advay+Store",
            selected: false,
          },
          selectedCount: 0,
        },
        {
          childCategory: false,
          count: 9,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Adyavastram",
            selected: false,
          },
          selectedCount: 0,
          title: "Adyavastram",
        },
        {
          childCategory: false,
          count: 15,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AEC",
            selected: false,
          },
          selectedCount: 0,
          title: "AEC",
        },
        {
          childCategory: false,
          count: 37,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Aelomart",
            selected: false,
          },
          selectedCount: 0,
          title: "Aelomart",
        },
        {
          childCategory: false,
          count: 94,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AeroNation",
            selected: false,
          },
          selectedCount: 0,
          title: "AeroNation",
        },
        {
          childCategory: false,
          count: 114,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AEROPOSTALE",
            selected: false,
          },
          selectedCount: 0,
          title: "AEROPOSTALE",
        },
        {
          childCategory: false,
          count: 6,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AETAS",
            selected: false,
          },
          selectedCount: 0,
          title: "AETAS",
        },
        {
          childCategory: false,
          count: 126,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=af+collection",
            selected: false,
          },
          selectedCount: 0,
          title: "af collection",
        },
        {
          childCategory: false,
          count: 22,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Afalusz",
            selected: false,
          },
          selectedCount: 0,
          title: "Afalusz",
        },
        {
          childCategory: false,
          count: 5,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Afams",
            selected: false,
          },
          selectedCount: 0,
          title: "Afams",
        },
        {
          childCategory: false,
          count: 5,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Afelix",
            selected: false,
          },
          selectedCount: 0,
          title: "Afelix",
        },
        {
          childCategory: false,
          count: 50,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Affordable+AF",
            selected: false,
          },
          selectedCount: 0,
          title: "Affordable AF",
        },
        {
          childCategory: false,
          count: 4,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AGAMI+STORES",
            selected: false,
          },
          selectedCount: 0,
          title: "AGAMI STORES",
        },
        {
          childCategory: false,
          count: 6,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AHP",
            selected: false,
          },
          selectedCount: 0,
          title: "AHP",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AIDAN+PAUL",
            selected: false,
          },
          selectedCount: 0,
          title: "AIDAN PAUL",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AIGenz",
            selected: false,
          },
          selectedCount: 0,
          title: "AIGenz",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AIMHIGH",
            selected: false,
          },
          selectedCount: 0,
          title: "AIMHIGH",
        },
        {
          childCategory: false,
          count: 4,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Aisehi+Gift+Store",
            selected: false,
          },
          selectedCount: 0,
          title: "Aisehi Gift Store",
        },
        {
          childCategory: false,
          count: 65,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Ajile+By+Pantaloons",
            selected: false,
          },
          selectedCount: 0,
          title: "Ajile By Pantaloons",
        },
        {
          childCategory: false,
          count: 42,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AJOLLI",
            selected: false,
          },
          selectedCount: 0,
          title: "AJOLLI",
        },
        {
          childCategory: false,
          count: 13,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AK",
            selected: false,
          },
          selectedCount: 0,
          title: "AK",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AK+TRADING",
            selected: false,
          },
          selectedCount: 0,
          title: "AK TRADING",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Akaas",
            selected: false,
          },
          selectedCount: 0,
          title: "Akaas",
        },
        {
          childCategory: false,
          count: 5,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=akaryan",
            selected: false,
          },
          selectedCount: 0,
          title: "akaryan",
        },
        {
          childCategory: false,
          count: 12,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AKAYN",
            selected: false,
          },
          selectedCount: 0,
          title: "AKAYN",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AKF",
            selected: false,
          },
          selectedCount: 0,
          title: "AKF",
        },
        {
          childCategory: false,
          count: 21,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AKIBA",
            selected: false,
          },
          selectedCount: 0,
          title: "AKIBA",
        },
        {
          childCategory: false,
          count: 36,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AKMX",
            selected: false,
          },
          selectedCount: 0,
          title: "AKMX",
        },
        {
          childCategory: false,
          count: 115,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Alan+Jones",
            selected: false,
          },
          selectedCount: 0,
          title: "Alan Jones",
        },
        {
          childCategory: false,
          count: 48,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALARM",
            selected: false,
          },
          selectedCount: 0,
          title: "ALARM",
        },
        {
          childCategory: false,
          count: 30,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Albaadi",
            selected: false,
          },
          selectedCount: 0,
          title: "Albaadi",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALBEPOSE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALBEPOSE",
        },
        {
          childCategory: false,
          count: 8,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALEX+TREATS",
            selected: false,
          },
          selectedCount: 0,
          title: "ALEX TREATS",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALFA",
            selected: false,
          },
          selectedCount: 0,
          title: "ALFA",
        },
        {
          childCategory: false,
          count: 34,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALIVE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALIVE",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALKAAPPAREL",
            selected: false,
          },
          selectedCount: 0,
          title: "ALKAAPPAREL",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Alkaenterprises",
            selected: false,
          },
          selectedCount: 0,
          title: "Alkaenterprises",
        },
        {
          childCategory: false,
          count: 21,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALL+IN+ONE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALL IN ONE",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALL+KIDSS+CHOICE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALL KIDSS CHOICE",
        },
        {
          childCategory: false,
          count: 15,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=All+Your+Design",
            selected: false,
          },
          selectedCount: 0,
          title: "All Your Design",
        },
        {
          childCategory: false,
          count: 11,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=allan+peter",
            selected: false,
          },
          selectedCount: 0,
          title: "allan peter",
        },
        {
          childCategory: false,
          count: 44,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Allen+Cooper",
            selected: false,
          },
          selectedCount: 0,
          title: "Allen Cooper",
        },
        {
          childCategory: false,
          count: 3,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Allen+Solly+Tribe",
            selected: false,
          },
          selectedCount: 0,
          title: "Allen Solly Tribe",
        },
        {
          childCategory: false,
          count: 8,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALLERJEUNE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALLERJEUNE",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Allons-Y+Let%27s+go",
            selected: false,
          },
          selectedCount: 0,
          title: "Allons-Y Let's go",
        },
        {
          childCategory: false,
          count: 5,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALLSAH+CREATION",
            selected: false,
          },
          selectedCount: 0,
          title: "ALLSAH CREATION",
        },
        {
          childCategory: false,
          count: 4,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=allytrue",
            selected: false,
          },
          selectedCount: 0,
          title: "allytrue",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Almo",
            selected: false,
          },
          selectedCount: 0,
          title: "Almo",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Almo+Wear+Private+Limited",
            selected: false,
          },
          selectedCount: 0,
          title: "Almo Wear Private Limited",
        },
        {
          childCategory: false,
          count: 24,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALMUDA",
            selected: false,
          },
          selectedCount: 0,
          title: "ALMUDA",
        },
        {
          childCategory: false,
          count: 37,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALNIK",
            selected: false,
          },
          selectedCount: 0,
          title: "ALNIK",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALPHABET26",
            selected: false,
          },
          selectedCount: 0,
          title: "ALPHABET26",
        },
        {
          childCategory: false,
          count: 118,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALPHINE",
            selected: false,
          },
          selectedCount: 0,
          title: "ALPHINE",
        },
        {
          childCategory: false,
          count: 6,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Alpine+Bikes",
            selected: false,
          },
          selectedCount: 0,
          title: "Alpine Bikes",
        },
        {
          childCategory: false,
          count: 99,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Alsi+Life",
            selected: false,
          },
          selectedCount: 0,
          title: "Alsi Life",
        },
        {
          childCategory: false,
          count: 12,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALTRAX",
            selected: false,
          },
          selectedCount: 0,
          title: "ALTRAX",
        },
        {
          childCategory: false,
          count: 31,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=ALY+JOHN",
            selected: false,
          },
          selectedCount: 0,
          title: "ALY JOHN",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AM+SWAN",
            selected: false,
          },
          selectedCount: 0,
          title: "AM SWAN",
        },
        {
          childCategory: false,
          count: 9,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMAK+INC",
            selected: false,
          },
          selectedCount: 0,
          title: "AMAK INC",
        },
        {
          childCategory: false,
          count: 115,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Aman+Textile",
            selected: false,
          },
          selectedCount: 0,
          title: "Aman Textile",
        },
        {
          childCategory: false,
          count: 10,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Amanibhusea",
            selected: false,
          },
          selectedCount: 0,
          title: "Amanibhusea",
        },
        {
          childCategory: false,
          count: 68,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Amarcom",
            selected: false,
          },
          selectedCount: 0,
          title: "Amarcom",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Amaresh+Kumar",
            selected: false,
          },
          selectedCount: 0,
          title: "Amaresh Kumar",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMARJEET+KUMAR",
            selected: false,
          },
          selectedCount: 0,
          title: "AMARJEET KUMAR",
        },
        {
          childCategory: false,
          count: 1,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=Ambeycreations",
            selected: false,
          },
          selectedCount: 0,
          title: "Ambeycreations",
        },
        {
          childCategory: false,
          count: 248,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=American+Crew",
            selected: false,
          },
          selectedCount: 0,
          title: "American Crew",
        },
        {
          childCategory: false,
          count: 32,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=American+Eagle",
            selected: false,
          },
          selectedCount: 0,
          title: "American Eagle",
        },
        {
          childCategory: false,
          count: 186,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=American+Eagle+Outfitters",
            selected: false,
          },
          selectedCount: 0,
          title: "American Eagle Outfitters",
        },
        {
          childCategory: false,
          count: 43,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=American+Pie",
            selected: false,
          },
          selectedCount: 0,
          title: "American Pie",
        },
        {
          childCategory: false,
          count: 21,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMEVI",
            selected: false,
          },
          selectedCount: 0,
          title: "AMEVI",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMEYS+ALMUDA",
            selected: false,
          },
          selectedCount: 0,
          title: "AMEYS ALMUDA",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMF",
            selected: false,
          },
          selectedCount: 0,
          title: "AMF",
        },
        {
          childCategory: false,
          count: 4,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMOLDO",
            selected: false,
          },
          selectedCount: 0,
          title: "AMOLDO",
        },
        {
          childCategory: false,
          count: 2,
          highlighted: false,
          leafNode: false,
          parentCategory: false,
          resource: {
            params: "facets.brand%5B%5D=AMOSA",
            selected: false,
          },
          selectedCount: 0,
          title: "AMOSA",
        },
      ],
      selectedBrand: "",
      tshirtCount: "",
    };
  }
  handleSelectChange = (event) => {
    this.setState({ selectedBrand: event.target.value });
  };
  populateTshirt = () => {
    const { tshirts } = this.state;
    const titleArray = tshirts.filter((tshirt) =>
      tshirt.hasOwnProperty("title")
    );
    return titleArray;
  };

  getTshirtCount = () => {
    const { selectedBrand, tshirts } = this.state;
    const result = tshirts.find((tshirt) => tshirt.title === selectedBrand);

    if (result) {
      this.setState({ tshirtCount: result.count });
    } else {
      this.setState({ tshirtCount: "Brand not found" });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedBrand !== this.state.selectedBrand) {
      this.getTshirtCount();
    }
  }

  render() {
    const titleArray = this.populateTshirt();

    return (
      <div>
        <h1>Tshirt Count</h1>
        <label htmlFor="SelectTshirt">Select Brand:</label>
        <select id="tshirtSelect" onChange={this.handleSelectChange}>
          {titleArray &&
            titleArray.map((tshirt) => (
              <option key={tshirt.title} value={tshirt.title}>
                {tshirt.title}
              </option>
            ))}
        </select>
        <div>
          <span id="span1">ThsirtCount:{this.state.tshirtCount}</span>
        </div>
      </div>
    );
  }
}
