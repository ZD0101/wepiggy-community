import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {pink} from "@mui/material/colors";
import "./TokenFilters.css"

function TokenFilters(props) {
    return (
        <div className="TokenFilters">
            <FormControlLabel
                label="pToken"
                control={
                    <Checkbox
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                }
            />
            <FormControlLabel
                label="aToken"
                control={
                    <Checkbox
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                }
            />
            <FormControlLabel
                label="Partnership Pools"
                control={
                    <Checkbox
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                }
            />

        </div>
    );
}

export default TokenFilters;
