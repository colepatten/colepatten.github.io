"use strict";
const usernamePattern = /^[A-Za-z0-9._-]/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.edu$/;
const phonePattern = /^\u0028\d{3}\u0029\d{3}\u002E\d{4}$/;
const zipPattern = /(^\d{5}-\d{4}$)/;
const datePattern = /^((0[13578]|1[02])\/31\/(18|19|20)[0-9]{2})|((01|0[3-9]|1[0-2])\/(29|30)\/(18|19|20)[0-9]{2})|((0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-8])\/(18|19|20)[0-9]{2})|((02)\/29\/(((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/;


$(document).ready( () => {
    //set values equal to elements on the form based on id values
    const txtUsername = $("#username");
    const txtEmail = $("#email");
    const txtPhone = $("#phone");
    const txtZip = $("#zip");
    const txtBirth = $("#birth");

    //boolean to track is entries are valid
    let isValid;

    //function to make a textbox appear to have invalid information
    const makeInvalid = (textbox, message) => {
        //add validation message to element after textbox
        textbox.next().text(message);
        //add is-invalid to textbox to outline in red
        textbox.addClass('is-invalid');
        //set boolean to false to prevent submission
        isValid = false;
    }

    //make textbox appear valid
    const makeValid = (textbox) => {
        //clear validation message from element after textbox
        textbox.next().text("");
        //remove is-invalid
        textbox.removeClass('is-invalid');
        textbox.addClass('is-valid');
    }

    //send focus to username textbox
    txtUsername.focus();

    //event handler for clicking validate button
    $("#validate").on("click", (evt) => {
        isValid = true;

        //set variables equal to contents of textboxes
        const username = txtUsername.val().trim();
        const email = txtEmail.val().trim();
        const phone = txtPhone.val().trim();
        const zip = txtZip.val().trim();
        const birth = txtBirth.val().trim();

        !usernamePattern.test(username) ?
            makeInvalid(txtUsername, 'Username can only contain numbers, letters, periods, hyphens, and underscores') : makeValid(txtUsername);
        !emailPattern.test(email) ?
            makeInvalid(txtEmail, 'Please enter an email that ends with .edu') : makeValid(txtEmail);
        !phonePattern.test(phone) ?
            makeInvalid(txtPhone, 'Please enter a number in format (999)999-9999') : makeValid(txtPhone);
        !zipPattern.test(zip) ?
            makeInvalid(txtZip, 'Please enter a valid zip-code in format 99999-9999') : makeValid(txtZip);
        !datePattern.test(birth) ?
            makeInvalid(txtBirth, 'Please enter a valid birth date MM/DD/YYYY') : makeValid(txtBirth);

        $('#results').text(isValid ? 'All fields contain valid entries' : '');

        txtUsername.focus();

    })
})