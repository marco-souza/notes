import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui';

const styles = {
    col: {
        display: 'flex'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        borderRight: '2px dashed rgb(0, 57, 79, .3)'
    },

    header: {
        margin: 20
    },

    list: (width = 250) => ({
        width
    })
};

function SideBar(props) {
    const { children, title, rightSide, width } = props;
    return (
        <div style={styles.col}>
            <div style={styles.container}>
                <h3 style={styles.header}>{title}</h3>

                <List style={styles.list(width)}>{children}</List>
            </div>

            {rightSide}
        </div>
    );
}

SideBar.propTypes = {
    width: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
    rightSide: PropTypes.node.isRequired
};

export default SideBar;
