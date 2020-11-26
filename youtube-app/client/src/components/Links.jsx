import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    UCRTube
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/Login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/CreateAccount" className="nav-link">
                                CreateAccount
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links