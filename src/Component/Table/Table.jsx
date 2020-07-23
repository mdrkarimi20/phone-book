import React, { Component } from 'react'
import RowTable from '../RowTable/RowTable';
import './Table.scss';

export default class Table extends Component {
    state = {
        item: [
            { id: 1, name: "mohammad", last_name: "ahmadi", email: "mohammad@gmail.com" },
            { id: 2, name: "ali", last_name: "hoseini", email: "ali@gmail.com" },
            { id: 3, name: "hasan", last_name: "hasani", email: "hasan@gmail.com" },
        ],
        search: "" ,
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleAdd = () => {
        const item = this.state.item;
        item.push('new item')
        this.setState({ item: item })
    }

    show_form = () => {
        const el = document.getElementById('form')
        el.classList.add("show");
        console.log(el.classList.add("show"));
      }
  
    hide_form = () => {
        const el = document.getElementById('form');
        el.classList.remove("show");
      }

    render() {
        const { item, search,  } = this.state;
        let filtersearch = item.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()));
        return (
            <div>
                <input type="text" name="search" onChange={this.handleChange} value={search} />
                <div className="table-phone">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">last name</th>
                                <th scope="col">email</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        {filtersearch.map(item => (
                            <RowTable key={item.id} item={item} />
                        ))}
                    </table>

                    <div id="form">
                        <form id="contact_form">
                            <div className="form-group">
                                <label for="id_name">ID: </label>
                                <input type="number" name="id" className="form-control" id="id_id" placeholder="id of contact" required="" />
                            </div>

                            <div className="form-group">
                                <label for="id_name">Name: </label>
                                <input type="text" name="name" className="form-control" id="id_name" placeholder="Enter name" required="" />
                            </div>
                            <div class="form-group">
                                <label for="id_last_name">Last name: </label>
                                <input type="text" className="form-control" name="lastName" id="id_last_name" placeholder="Enter last name" />
                            </div>
                            <div className="form-group">
                                <label for="id_phone">phone: </label>
                                <input type="phone" name="phone" className="form-control" id="id_phone" placeholder="Enter Phone" />
                            </div>
                            <div className="form-group">
                                <label for="id_email">Email: </label>
                                <input type="email" name="email" className="form-control" id="id_email" placeholder="Enter Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="reset" className="btn btn-primary">Clear</button>
                        </form>
                    </div>
                </div>
                <button className="btn btn-primary" onclick={this.show_form}>Add</button>
                <button className="btn btn-secondary" onclick={this.hide_form}>Cancel</button>
            </div>
        )
    }
}
