import React, { Component } from 'react';
import api from '../../services/api';

export default class Product extends Component {
    state = {
        products: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params; //pega o parametro passado pela url/rota

        const response = await api.get(`/products/${id}`);
        this.setState({products: response.data});
    }

    render() {

        return <h1>Oi</h1>;

    }
}