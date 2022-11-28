import backArrow from "../../assets/images/Icons/arrow_back-24px.svg";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

// form input initial value and validation state

// API connection info
const SERVER_HOST = "http://localhost";
const SERVER_PORT = "8080";
const SERVER_ENDPOINT = "warehouses";

function EditWarehouse() {
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}:${SERVER_PORT}/${SERVER_ENDPOINT}/${params.id}`)
      .then((response) => {
        
        const testObject = {};

        testObject.name = response.data.warehouse_name;
        testObject.address = response.data.address;
        testObject.city = response.data.city;
        testObject.country = response.data.country;
        testObject.person = response.data.contact_name;
        testObject.position = response.data.contact_position;
        testObject.phone = response.data.contact_phone;
        testObject.email = response.data.contact_email;

        setInputValue(testObject);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const inputFields = {
    value: {
      name: "",
      address: "",
      city: "",
      country: "",
      person: "",
      position: "",
      phone: "",
      email: "",
    },
    valid: {
      name: true,
      address: true,
      city: true,
      country: true,
      person: true,
      position: true,
      phone: true,
      email: true,
    },
  };

  // set form input initial states - value and valid
  const [inputValue, setInputValue] = useState(inputFields.value);
  const [inputValid, setInputValid] = useState(inputFields.valid);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // update input value state
    setInputValue({
        ...inputValue,
        [name]: value
    });
    // update input valid state
    setInputValid({
        ...inputValid,
        [name]: true
    });
};

  // check form vlaidation
  const handleFormVlidation = () => {
    // to validate the entire form
    let formValidation = true;

    // to vlaidate single input fields
    const inputsValidation = { ...inputValid };

    // iterate through all input values and update it's valid state
    // update the entire form valid state accordingly
    for (const key in inputsValidation) {
      inputsValidation[key] = Boolean(inputValue[key]);
      if (!inputValue[key]) formValidation = false;
    }

    // validate phone number with regex
    const phoneValid = /^(\+\d{1}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(
      inputValue.phone
    );

    // validate email with regex
    const emailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(inputValue.email);

    // update the entire form state accordingly
    if (!phoneValid || !emailValid) formValidation = false;

    // update validation state for all input fields
    setInputValid(inputsValidation);

    return formValidation;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if all input fields pass validation check
    if (handleFormVlidation(e.target)) {
      // new warehouse data
      const newWarehouse = {
        warehouse_name: inputValue.name,
        address: inputValue.address,
        city: inputValue.city,
        country: inputValue.country,
        contact_name: inputValue.person,
        contact_position: inputValue.position,
        contact_phone: inputValue.phone,
        contact_email: inputValue.email,
      };

      axios
        .put(`${SERVER_HOST}:${SERVER_PORT}/${SERVER_ENDPOINT}/${params.id}`, newWarehouse)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
          console.log(`an error occured ${err}`);
        });
    }
  };
  return (
    <div className='warehouse'>
        <div className='warehouse__container'>
            <div className='warehouse__header'>
                <Link className='warehouse__back' to='/'>
                    <img className='warehouse__arrow' src={backArrow} alt='back arrow' />
                </Link>
                <h1 className='warehouse__title'>Edit Warehouse</h1>
            </div>
            <form className='warehouse__form' onSubmit={handleFormSubmit}>
                <div className='warehouse__inputs'>
                    <div className='warehouse__details'>
                        <h2 className='warehouse__subtitle'>Warehouse Details</h2>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='warehouse-name'>
                                Warehouse Name
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.name ? `warehouse__input--error` : null}`} type='text' name='name' id='warehouse-name' placeholder='Warehouse Name'
                                value={inputValue.name}
                                onChange={handleInputChange}
                            />
                            {!inputValid.name && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='street-address'>
                                Street Address
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.address ? `warehouse__input--error` : null}`} type='text' name='address' id='street-address' placeholder='Street Address'
                                value={inputValue.address} onChange={handleInputChange}
                            />
                            {!inputValid.address && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='warehouse-city'>
                                City
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.city ? `warehouse__input--error` : null}`} type='text' name='city' id='warehouse-city' placeholder='City'
                                value={inputValue.city}
                                onChange={handleInputChange}
                            />
                            {!inputValid.city && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='warehouse-country'>
                                Country
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.country ? `warehouse__input--error` : null}`} type='text' name='country' id='warehouse-country' placeholder='Country'
                                value={inputValue.country}
                                onChange={handleInputChange}
                            />
                            {!inputValid.country && <span className='warehouse__error'>This field is required</span>}
                        </div>
                    </div>
                    <div className='warehouse__contact'>
                        <h2 className='warehouse__subtitle'>Contact Details</h2>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='contact-name'>
                                Contact Name
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.person ? `warehouse__input--error` : null}`} type='text' name='person' id='contact-name' placeholder='Contact Name'
                                value={inputValue.person}
                                onChange={handleInputChange}
                            />
                            {!inputValid.person && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='contact-position'>
                                Position
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.position ? `warehouse__input--error` : null}`} type='text' name='position' id='contact-position' placeholder='Position'
                                value={inputValue.position}
                                onChange={handleInputChange}
                            />
                            {!inputValid.position && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='contact-phone'>
                                Phone Number
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.phone ? `warehouse__input--error` : null}`} type='text' name='phone' id='contact-phone' placeholder='Phone Number'
                                value={inputValue.phone}
                                onChange={handleInputChange}
                            />
                            {!inputValid.phone && <span className='warehouse__error'>This field is required</span>}
                        </div>
                        <div className='warehouse__field'>
                            <label className='warehouse__label' htmlFor='contact-email'>
                                Email
                            </label>
                            <input
                                className={`warehouse__input ${!inputValid.email ? `warehouse__input--error` : null}`} type='text' name='email' id='contact-email' placeholder='Email'
                                value={inputValue.email}
                                onChange={handleInputChange}
                            />
                            {!inputValid.email && <span className='warehouse__error'>This field is required</span>}
                        </div>
                    </div>
                </div>
                <div className='warehouse__action'>
                    <Link className='warehouse__cancel' to='/'>Cancel</Link>
                    <button className='warehouse__submit' type='submit'>Save</button>
                </div>
            </form>
        </div>
    </div>
);
}

export default EditWarehouse;
