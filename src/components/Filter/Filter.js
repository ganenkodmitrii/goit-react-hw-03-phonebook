import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Filter({ filter, onChange }) {
    return (
        <label>
            <Typography variant="h6" gutterBottom>
                Find contacts by name
            </Typography>
            <TextField
                label="Enter name"
                variant="outlined"
                type="text"
                value={filter}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
