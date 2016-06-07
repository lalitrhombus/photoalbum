import { FEATCH_PHOTOS } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FEATCH_PHOTOS:
            return action.payload.data;
    }
    return state;
}