/*********************************************************************************
 *  WEB422 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students. *
 *  Name: Wenxuan Liu   Student ID: 160678173   Date: May 13,2019
 *  ********************************************************************************/

const url_ = 'https://murmuring-spire-82736.herokuapp.com/';

$(document).ready(function() {
    console.log('jQuery Working');
    $('#teams-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: url_ + 'teams',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Teams</h3>')
                    .append('<pre></pre>');
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });
});

$(document).ready(function() {
    console.log('jQuery Working');
    $('#employees-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: url_ + 'employees',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Employees</h3>')
                    .append('<pre></pre>');
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });
});

$(document).ready(function() {
    console.log('jQuery Working');
    $('#positions-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: url_ + 'positions',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Positions</h3>')
                    .append('<pre></pre>');
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });
});

$(document).ready(function() {
    console.log('jQuery Working');
    $('#projects-menu').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: url_ + 'projects',
            type: 'GET',
            contentType: 'application/json'
        })
            .done(function(data) {
                $('#data')
                    .empty()
                    .append('<h3>Projects</h3>')
                    .append('<pre></pre>');
                $('pre').html(prettyPrintJson.toHtml(data));
            })
            .fail(function(err) {
                console.log('error: ' + err.statusText);
            });
    });
});
