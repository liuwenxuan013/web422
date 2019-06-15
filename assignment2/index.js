/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Wenxuan Liu    Student ID: 1601678173      Date: 2019/05/27          *
 *
 ********************************************************************************/
// Import jQuery, which will also expose $ on the global `window` Object.
import $ from './jquery-es';
// After jQuery is loaded, we can load the Bootstrap JS, which depends on jQuery.
import 'bootstrap';
// Place your imports for Moment.js and Lodash here...
import moment from 'moment';
import _ from 'lodash';
// The rest of your code can go here.  You're also welcome to split
// your code up into multiple files using ES modules and import/export.
$(function() {
  let employeesModel = [];
  //define functions
  function initializeEmployeesModel() {
    $.ajax({
      url: 'https://murmuring-spire-82736.herokuapp.com/employees',
      type: 'GET',
      contentType: 'application/json'
    })
      .done(function(data) {
        employeesModel = data;
        refreshEmployeeRows(employeesModel);
      })
      .fail(function(err) {
        showGenericModal('Error', 'Unable to get Employees' + err);
      });
  }

  function showGenericModal(title, message) {
    $('#genericModal .modal-title')
      .empty()
      .append(title);
    $('#genericModal .modal-body')
      .empty()
      .append(message);
    $('#genericModal').modal('show');
  }

  function refreshEmployeeRows(employees) {
    let rowTemplate = _.template(
      '<% _.forEach(arr, function(employee){ %>' +
        '<div class="row body-row" data-id="<%- employee._id %>">' +
        '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
        ' <div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
        ' <div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
        '</div><% }); %>'
    );
    let rows = rowTemplate({ arr: employees });
    $('#employees-table').empty();
    $('#employees-table').append(rows);
  }

  function getFilteredEmployeesModel(filterString) {
    filterString = filterString.toUpperCase();
    let filteredString = _.filter(employeesModel, function(employee) {
      return (
        employee.FirstName.toUpperCase() == filterString ||
        employee.LastName.toUpperCase() == filterString ||
        employee.Position.PositionName.toUpperCase() == filterString
      );
    });
    return filteredString;
  }

  function getEmployeeModelById(id) {
    let foundEmp = _.find(employeesModel, function(employee) {
      return employee._id == id;
    });
    if (foundEmp == null) return null;
    else return _.cloneDeep(foundEmp);
  }
  // code
  initializeEmployeesModel();
  $('#employee-search').on('keyup', function() {
    if (this.value === '') initializeEmployeesModel();
    else {
      let filtered = getFilteredEmployeesModel(this.value);
      refreshEmployeeRows(filtered);
    }
  });

  $('#employees-table').on('click', '.body-row', function() {
    let clickedEmp = getEmployeeModelById($(this).attr('data-id'));
    clickedEmp.HireDate = moment(clickedEmp.HireDate).format('LL');
    let modalTemplate = _.template(
      '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %>. <%- employee.AddressZip %></br>' +
        '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %></br>' +
        '<strong>Hire Date:</strong> <%- employee.HireDate %>'
    );
    let modal = modalTemplate({ employee: clickedEmp });
    showGenericModal(clickedEmp.FirstName + ' ' + clickedEmp.LastName, modal);
  });
});
