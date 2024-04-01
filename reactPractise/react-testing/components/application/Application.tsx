import React from "react";

export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>section 01</h2>
      <p>All fields are mandatory</p>
      <img src="" alt="a person with a laptop"></img>
      <span title="close">X</span>
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            value="sravanthi"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
