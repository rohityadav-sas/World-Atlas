import debounce from 'lodash.debounce';

export const debounceSearch = (searchHandler, delay = 200) => {
    return debounce(searchHandler, delay);
};
